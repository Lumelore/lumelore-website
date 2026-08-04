// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

import mdx from '@astrojs/mdx';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), mdx()],
  adapter: cloudflare()
});