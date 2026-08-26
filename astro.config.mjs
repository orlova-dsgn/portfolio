// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import sentry from '@sentry/astro';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://elizavetaorlova.ru',

  integrations: [
    react(),
    sentry({
      project: 'javascript-astro',
      org: 'fors-m9',
      authToken: import.meta.env.SENTRY_AUTH_TOKEN,
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: [400, 500, 600],
      styles: ['normal'],
      subsets: ['latin', 'cyrillic'],
    },
  ],
});
