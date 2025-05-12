import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.sandonjurowski.com/',
  output: 'static',
  integrations: [
    tailwind(),
    mdx({ syntaxHighlight: 'shiki', shikiTheme: 'github-dark' }),
    sitemap()
  ],
});
