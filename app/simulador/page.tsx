import type { Metadata } from "next";
import { Simulador } from "@/components/mecenazgo/Simulador";

export const metadata: Metadata = {
  title: "Simulador | Mecenazgo del deporte",
  description:
    "Comprueba los requisitos de la entidad, calcula el efecto fiscal de la aportacion y genera el certificado en PDF. Los datos se guardan en tu navegador.",
};

export default function PageSimulador() {
  return <Simulador />;
}
