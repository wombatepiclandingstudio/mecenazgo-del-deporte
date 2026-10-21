/** @type {import('next').NextConfig} */

// La ruta base la fija el despliegue: en GitHub Pages el sitio vive bajo
// /<repositorio>, y sin esto los enlaces y los recursos saldrian de la raiz
// equivocada.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig = {
  basePath,
  // Con NEXT_OUTPUT=export el build produce la carpeta out/ para subirla a
  // GitHub Pages o a cualquier servidor de estaticos. Sin la variable, el
  // build es el normal de Next, que es lo que usa Vercel.
  output: process.env.NEXT_OUTPUT === "export" ? "export" : undefined,
  // En la exportacion estatica las rutas llevan barra final, para que las
  // carpetas se sirvan como indice.
  trailingSlash: process.env.NEXT_OUTPUT === "export" ? true : undefined,
  experimental: {
    optimizePackageImports: ['@chakra-ui/react', '@react-pdf/renderer'],
  },
};

export default nextConfig;
