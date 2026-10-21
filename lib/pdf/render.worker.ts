import { renderDocumento } from "./render";
import type { InformeCalculoModel } from "./informe";

/**
 * Worker de renderizado.
 *
 * Solo viajan datos planos: los elementos React no se pueden clonar y el
 * worker construye el documento a partir del modelo.
 */

export interface PdfRenderRequest {
  kind: "informe-calculo";
  model: InformeCalculoModel;
  /** Ruta del binario, resuelta por el hilo principal. */
  wasmUrl: string;
}

export interface PdfRenderResponse {
  ok: boolean;
  bytes?: ArrayBuffer;
  error?: string;
}

self.onmessage = async (event: MessageEvent<PdfRenderRequest>) => {
  try {
    const respuesta = await fetch(event.data.wasmUrl);
    if (!respuesta.ok) {
      throw new Error(
        `no se encuentra el binario del PDF en ${event.data.wasmUrl} (${respuesta.status})`,
      );
    }
    const bytes = await renderDocumento(
      event.data.kind,
      event.data.model,
      await respuesta.arrayBuffer(),
    );
    const transferable = bytes.buffer.slice(0) as ArrayBuffer;
    (self as unknown as Worker).postMessage(
      { ok: true, bytes: transferable },
      [transferable],
    );
  } catch (error) {
    (self as unknown as Worker).postMessage({
      ok: false,
      error: error instanceof Error ? error.message : String(error),
    });
  }
};
