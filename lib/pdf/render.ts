import { fromJsx } from "@takumi-rs/helpers/jsx";
import initPdf, { render } from "takumi-pdf/no-init";
import { createElement, type ReactElement } from "react";
import { InformeCalculo } from "./documents/InformeCalculo";
import type { InformeCalculoModel } from "./informe";

/**
 * Renderizado de PDF con Takumi.
 *
 * El modulo no depende del navegador ni del worker: recibe la fuente del
 * binario WebAssembly y devuelve los bytes del PDF. Asi se puede probar en
 * Node (con los bytes del paquete) y en el navegador (con la URL del archivo
 * publicado en `public/`).
 */

export type PdfDocumentKind = "informe-calculo";

export type FuenteWasm = string | URL | ArrayBuffer | Uint8Array;

const DOCUMENTOS: Record<PdfDocumentKind, (model: never) => ReactElement> = {
  "informe-calculo": InformeCalculo as (model: never) => ReactElement,
};

let listo: Promise<unknown> | undefined;

/** Inicializa el binario una sola vez. */
export function initTakumi(fuente: FuenteWasm): Promise<unknown> {
  listo ??= initPdf({ module_or_path: fuente as never });
  return listo;
}

/** Convierte un modelo en el PDF correspondiente. */
export async function renderDocumento(
  kind: PdfDocumentKind,
  model: InformeCalculoModel,
  fuente: FuenteWasm,
): Promise<Uint8Array> {
  await initTakumi(fuente);
  const componente = DOCUMENTOS[kind];
  const elemento = createElement(componente as never, { model } as never);
  const { node, css } = await fromJsx(elemento);
  return render(node, { size: "a4", css });
}
