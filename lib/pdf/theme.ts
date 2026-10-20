import { professionalTheme } from "@/lib/pdf-themes/professional";
import type { PdfcnTheme } from "@/types/pdf-themes";

/**
 * Paleta del PDF. Los colores salen de las escalas de marca de la aplicacion
 * (`components/ui/theme.ts`), pero el PDF se renderiza fuera del navegador, en
 * un worker, y no puede leer los tokens de Chakra: se reproducen aqui los
 * mismos valores para que ambos medios se vean igual.
 */
export const fdjTheme: PdfcnTheme = {
  ...professionalTheme,
  name: "fdj",
  colors: {
    ...professionalTheme.colors,
    primary: "#1f304c",
    primaryForeground: "#ffffff",
    accent: "#d99a12",
    background: "#ffffff",
    foreground: "#16233a",
    muted: "#f4f6f8",
    mutedForeground: "#5a6570",
    border: "#dbe4f1",
  },
};
