"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { CLAVE_ALMACEN, conFecha, type EstadoApp } from "./estado";

/**
 * Estado persistente en el navegador.
 *
 * Los datos se guardan en localStorage, se recuperan al recargar y se
 * vuelven a guardar en cuanto cambian. La carga inicial no lee el
 * almacenamiento durante el render: se hace despues de montar, para que el
 * HTML del servidor y el del cliente coincidan.
 */
export function usePersistido(inicial: () => EstadoApp) {
  const [estado, setEstado] = useState<EstadoApp>(inicial);
  const [listo, setListo] = useState(false);
  const primeraCarga = useRef(true);

  // Recuperar lo guardado.
  useEffect(() => {
    try {
      const crudo = window.localStorage.getItem(CLAVE_ALMACEN);
      const guardado = crudo ? (JSON.parse(crudo) as Partial<EstadoApp>) : {};
      setEstado((actual) =>
        conFecha({
          cumplimiento: {
            ...actual.cumplimiento,
            ...(guardado.cumplimiento ?? {}),
          },
          aportante: { ...actual.aportante, ...(guardado.aportante ?? {}) },
          certificado: {
            ...actual.certificado,
            ...(guardado.certificado ?? {}),
          },
        }),
      );
    } catch {
      // Almacenamiento lleno, bloqueado o con contenido corrupto: seguimos con el estado inicial.
    } finally {
      primeraCarga.current = false;
      setListo(true);
    }
  }, []);

  // Guardar cuando cambia.
  useEffect(() => {
    if (primeraCarga.current) return;
    try {
      window.localStorage.setItem(CLAVE_ALMACEN, JSON.stringify(estado));
    } catch {
      // Sin espacio o en modo privado: la app sigue funcionando en memoria.
    }
  }, [estado]);

  const borrar = useCallback(() => {
    try {
      window.localStorage.removeItem(CLAVE_ALMACEN);
    } catch {
      /* sin permisos de almacenamiento */
    }
    setEstado(conFecha(inicial()));
  }, [inicial]);

  return { estado, setEstado, listo, borrar };
}
