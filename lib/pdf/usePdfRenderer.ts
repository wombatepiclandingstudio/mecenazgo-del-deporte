import { useCallback, useRef, useState } from "react";
import type { InformeCalculoModel } from "./informe";

/**
 * Puente con el worker de PDF.
 *
 * El worker devuelve los bytes del PDF ya renderizados; aqui solo se managea
 * la peticion y la descarga.
 */

export interface PdfRendererState {
  renderPdf: (model: InformeCalculoModel) => Promise<Uint8Array>;
  isRendering: boolean;
  error: string | null;
}

export function usePdfRenderer(): PdfRendererState {
  const workerRef = useRef<Worker | null>(null);
  const pendientes = useRef(
    new Map<
      number,
      { resolve: (b: Uint8Array) => void; reject: (e: Error) => void }
    >(),
  );
  const [isRendering, setIsRendering] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const contador = useRef(0);

  const obtenerWorker = useCallback((): Worker => {
    if (workerRef.current) return workerRef.current;
    const worker = new Worker(
      new URL("./render.worker.ts", import.meta.url),
      { type: "module" },
    );
    worker.onmessage = (
      evento: MessageEvent<{
        ok: boolean;
        bytes?: ArrayBuffer;
        error?: string;
      }>,
    ) => {
      const id = contador.current - 1;
      const pendiente = pendientes.current.get(id);
      if (!pendiente) return;
      pendientes.current.delete(id);
      if (evento.data.ok && evento.data.bytes) {
        pendiente.resolve(new Uint8Array(evento.data.bytes));
      } else {
        pendiente.reject(
          new Error(evento.data.error ?? "no se pudo generar el PDF"),
        );
      }
      setIsRendering(pendientes.current.size > 0);
    };
    workerRef.current = worker;
    return worker;
  }, []);

  const renderPdf = useCallback(
    async (model: InformeCalculoModel): Promise<Uint8Array> => {
      setError(null);
      setIsRendering(true);
      const worker = obtenerWorker();
      const id = contador.current++;
      // La ruta del binario la resuelve el hilo principal: el worker no ve la
      // ruta base del despliegue.
      const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
      return new Promise<Uint8Array>((resolve, reject) => {
        pendientes.current.set(id, { resolve, reject });
        worker.postMessage({
          kind: "informe-calculo",
          model,
          wasmUrl: `${base}/takumi_pdf.wasm`,
        });
      });
    },
    [obtenerWorker],
  );

  return { renderPdf, isRendering, error };
}

/** Descarga unos bytes como archivo. */
export function descargar(bytes: Uint8Array, nombre: string): void {
  const copia = new Uint8Array(bytes);
  const url = URL.createObjectURL(
    new Blob([copia], { type: "application/pdf" }),
  );
  const enlace = document.createElement("a");
  enlace.href = url;
  enlace.download = nombre;
  enlace.click();
  URL.revokeObjectURL(url);
}
