import next from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const configuracion = [
  { ignores: [".next/**", "node_modules/**", "out/**", "next-env.d.ts"] },
  ...next,
  ...nextTs,
  {
    // El texto de la ley vive en lib/legal.ts, con su fuente. Los componentes
    // y el resto del dominio no llevan cifras fiscales escritas a mano: las
    // importan.
    files: ["components/**/*.{ts,tsx}", "app/**/*.{ts,tsx}", "lib/**/*.{ts,tsx}"],
    ignores: ["lib/legal.ts", "lib/*.test.ts"],
    rules: {
      "no-restricted-syntax": [
        "error",
        {
          selector:
            "Literal[value=/^(25\\.000|50\\.000 euros|12\\.000\\.000|3 por mil|80%|85%|55%|50%|45%|40%|30%|20%|15%|10%|25%|90%|2,75%|1\\.000)$/]",
          message:
            "Las cifras de la ley viven en lib/legal.ts, con su fuente. Importalas de ahi.",
        },
      ],
    },
  },
];

export default configuracion;
