import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

/**
 * Sistema de temas propio sobre la configuracion por defecto de Chakra.
 *
 * Para reestilizar la aplicacion basta con tocar las escalas de este archivo:
 * los componentes, los estados y los resultados los consumen a traves de los
 * tokens semanticos, no con colores literales.
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
        /**
         * Azul de la ley. No es un azul nuevo: es el de marca, aliased valor a
         * valor, para que cambiar la marca repinte los dos a la vez.
         */
        ley: {
          50: { value: '{colors.brand.50}' },
          100: { value: '{colors.brand.100}' },
          200: { value: '{colors.brand.200}' },
          300: { value: '{colors.brand.300}' },
          400: { value: '{colors.brand.400}' },
          500: { value: '{colors.brand.500}' },
          600: { value: '{colors.brand.600}' },
          700: { value: '{colors.brand.700}' },
          800: { value: '{colors.brand.800}' },
          900: { value: '{colors.brand.900}' },
          950: { value: '{colors.brand.950}' },
        },
        /**
         * Rojo de la Fundacion Deporte Joven. El tono 500 (#db291e) es su color
         * de marca: sale de `a { color:#DB291E }` en el custom.css de su tema
         * WordPress.
         */
        fdj: {
          50: { value: '#fdf0ef' },
          100: { value: '#fbdcd9' },
          200: { value: '#f7b9b4' },
          300: { value: '#f28e87' },
          400: { value: '#ec625a' },
          500: { value: '#db291e' },
          600: { value: '#c12219' },
          700: { value: '#a01c14' },
          800: { value: '#7f1711' },
          900: { value: '#66130e' },
        },
        /**
         * Violeta de la mezcla: el camino corto del espectro entre el azul de
         * la ley y el rojo de la Fundacion.
         */
        mixto: {
          50: { value: '#f5f1fa' },
          100: { value: '#ebe1f4' },
          200: { value: '#d7c3ea' },
          300: { value: '#b99ad9' },
          400: { value: '#9a6cc7' },
          500: { value: '#7f49b3' },
          600: { value: '#6d3b8e' },
          700: { value: '#5b2f76' },
          800: { value: '#4a265f' },
          900: { value: '#3d204f' },
        },
        /**
         * Contraste medido de los tres tonos `fg` (el 700 de cada escala) sobre
         * fondo blanco, con la formula de WCAG 2.2: `ley` (#2a4472) 9.69:1,
         * `fdj` (#a01c14) 7.86:1 y `mixto` (#5b2f76) 9.94:1. Los tres superan
         * 4.5:1, asi que ningun tono necesita oscurecerse.
         */
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
        /**
         * Paletas de procedencia: lo que dice la ley, lo que dice la Fundacion
         * y lo que dicen las dos. Misma forma que `brand` y `accent`.
         */
        ley: {
          solid: { value: '{colors.ley.600}' },
          contrast: { value: '{colors.white}' },
          fg: { value: '{colors.ley.700}' },
          muted: { value: '{colors.ley.50}' },
          subtle: { value: '{colors.ley.100}' },
          emphasized: { value: '{colors.ley.200}' },
          focusRing: { value: '{colors.ley.400}' },
        },
        fdj: {
          solid: { value: '{colors.fdj.500}' },
          contrast: { value: '{colors.white}' },
          fg: { value: '{colors.fdj.700}' },
          muted: { value: '{colors.fdj.50}' },
          subtle: { value: '{colors.fdj.100}' },
          emphasized: { value: '{colors.fdj.200}' },
          focusRing: { value: '{colors.fdj.400}' },
        },
        mixto: {
          solid: { value: '{colors.mixto.500}' },
          contrast: { value: '{colors.white}' },
          fg: { value: '{colors.mixto.700}' },
          muted: { value: '{colors.mixto.50}' },
          subtle: { value: '{colors.mixto.100}' },
          emphasized: { value: '{colors.mixto.200}' },
          focusRing: { value: '{colors.mixto.400}' },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
