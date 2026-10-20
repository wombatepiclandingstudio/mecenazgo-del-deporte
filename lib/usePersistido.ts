"use client";

import { useCallback, useEffect, useState } from "react";
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

  // Recuperar lo guardado.
  useEffect(() => {
    try {
      const crudo = window.localStorage.getItem(CLAVE_ALMACEN);
      const guardado = crudo ? (JSON.parse(crudo) as Partial<EstadoApp>) : {};
      // eslint-disable-next-line react-hooks/set-state-in-effect -- en el servidor no hay almacenamiento: leerlo durante el render romperia la hidratacion, asi que se lee despues de montar.
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
          programa: { ...actual.programa, ...(guardado.programa ?? {}) },
          solicitud: { ...actual.solicitud, ...(guardado.solicitud ?? {}) },
        }),
      );
    } catch {
      // Almacenamiento lleno, bloqueado o con contenido corrupto: seguimos con el estado inicial.
    } finally {
      setListo(true);
    }
  }, []);

  // Guardar cuando cambia. Hasta que lo guardado no este aplicado, guardar
  // escribiria el estado inicial encima de lo que el usuario tenia.
  useEffect(() => {
    if (!listo) return;
    try {
      window.localStorage.setItem(CLAVE_ALMACEN, JSON.stringify(estado));
    } catch {
      // Sin espacio o en modo privado: la app sigue funcionando en memoria.
    }
  }, [estado, listo]);

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
