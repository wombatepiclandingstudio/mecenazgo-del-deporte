/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['@chakra-ui/react', '@react-pdf/renderer'],
  },
};

export default nextConfig;
