// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
// Cloudflare adapter enables SSR for pages with `export const prerender = false`
// All other pages remain static (prerendered at build time)
export default defineConfig({
  adapter: cloudflare(),
});
