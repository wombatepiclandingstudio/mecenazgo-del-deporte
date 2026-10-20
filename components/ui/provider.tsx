'use client';

import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { ThemeProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes';
import { system } from './theme';

export function Provider(props: ThemeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ThemeProvider attribute="class" disableTransitionOnChange defaultTheme="light" {...props} />
    </ChakraProvider>
  );
}

export { defaultSystem };
