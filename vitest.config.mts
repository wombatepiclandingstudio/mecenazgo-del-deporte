import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

export default defineConfig({
  // El tsconfig de Next.js deja el JSX en "preserve" porque lo compila el
  // empaquetador. En los tests no hay empaquetador, asi que se transforma aqui.
  oxc: {
    jsx: { runtime: "automatic" },
  },
  resolve: {
    alias: { "@": fileURLToPath(new URL("./", import.meta.url)) },
  },
  test: {
    environment: "node",
    include: ["lib/**/*.test.ts"],
  },
});
