import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import { Box, Container, Text } from '@chakra-ui/react';
import { Provider } from '@/components/ui/provider';
import { Cabecera } from '@/components/mecenazgo/Cabecera';
import './globals.css';

const sans = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Mecenazgo del deporte | Ley 49/2002',
  description:
    'Que dice la Ley 49/2002 para una federacion o una entidad deportiva: quien puede aportar, que deduccion resulta y que datos debe llevar el certificado. Incluye el regimen foral de Navarra.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={sans.variable}>
        <Provider>
          <Cabecera />
          {children}
          <Box as="footer" borderTopWidth="1px" mt={16} bg="bg.muted">
            <Container maxW="6xl" px={{ base: 4, md: 6 }} py={8}>
              <Text fontSize="sm" color="fg.muted" maxW="90ch">
                Resumen divulgativo de la Ley 49/2002, de 23 de diciembre, de régimen fiscal de las
                entidades sin fines lucrativos y de los incentivos fiscales al mecenazgo, y del
                Decreto Foral Legislativo 2/2023 en lo que corresponde al regimen foral de Navarra.
                Los datos que introduces se guardan solo en este navegador y no se envían a ningún
                servidor. Esta herramienta no sustituye el criterio de un asesor fiscal para un caso
                concreto.
              </Text>
            </Container>
          </Box>
        </Provider>
      </body>
    </html>
  );
}
