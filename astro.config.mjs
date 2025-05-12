import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.sandonjurowski.com/',
  output: 'static',
  integrations: [
    mdx({ syntaxHighlight: 'shiki', shikiTheme: 'github-dark' }),
    sitemap()
  ],
});
