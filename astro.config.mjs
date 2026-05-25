import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://gronqa.github.io',
  base: '/BGLex',
  integrations: [react(), tailwind()],
  build: {
    assets: 'assets' // CRITICAL for GitHub Pages: Avoids underscore folder issues
  }
});
