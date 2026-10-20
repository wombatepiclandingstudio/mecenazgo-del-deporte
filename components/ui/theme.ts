import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

/**
 * Sistema de temas propio sobre la configuracion por defecto de Chakra.
 *
 * Para reestilizar la aplicacion basta con tocar las escalas `brand` y `accent`
 * de este archivo: los componentes, los estados y los resultados los consumen
 * a traves de los tokens semanticos, no con colores literales.
 */
const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        // Color principal de marca
        brand: {
          50: { value: '#eef2f8' },
          100: { value: '#dbe4f1' },
          200: { value: '#b9c9e5' },
          300: { value: '#8da7d4' },
          400: { value: '#5f81bf' },
          500: { value: '#3d63a8' },
          600: { value: '#31518d' },
          700: { value: '#2a4472' },
          800: { value: '#243a5d' },
          900: { value: '#1f304c' },
          950: { value: '#16233a' },
        },
        // Color de acento para cifras destacadas
        accent: {
          50: { value: '#fdf8ed' },
          100: { value: '#f9ebcd' },
          200: { value: '#f4d894' },
          300: { value: '#eec45a' },
          400: { value: '#e9b32f' },
          500: { value: '#d99a12' },
          600: { value: '#b87d0d' },
          700: { value: '#95610d' },
          800: { value: '#794e10' },
          900: { value: '#654212' },
        },
      },
      fonts: {
        heading: { value: 'var(--font-sans), system-ui, sans-serif' },
        body: { value: 'var(--font-sans), system-ui, sans-serif' },
        mono: { value: 'ui-monospace, SFMono-Regular, Menlo, monospace' },
      },
      radii: {
        card: { value: '16px' },
      },
    },
    semanticTokens: {
      colors: {
        brand: {
          solid: { value: '{colors.brand.600}' },
          contrast: { value: '{colors.white}' },
          fg: { value: '{colors.brand.700}' },
          muted: { value: '{colors.brand.50}' },
          subtle: { value: '{colors.brand.100}' },
          emphasized: { value: '{colors.brand.200}' },
          focusRing: { value: '{colors.brand.400}' },
        },
        accent: {
          solid: { value: '{colors.accent.500}' },
          contrast: { value: '{colors.white}' },
          fg: { value: '{colors.accent.700}' },
          muted: { value: '{colors.accent.50}' },
          subtle: { value: '{colors.accent.100}' },
          emphasized: { value: '{colors.accent.200}' },
          focusRing: { value: '{colors.accent.400}' },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
