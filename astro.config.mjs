import { defineConfig } from 'astro/config';
import astroReact from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [astroReact()]
});
