// @ts-check
import { defineConfig } from 'astro/config';

// Built into the Quackbyte org site at https://quackbyte.dev/glide/
export default defineConfig({
  site: 'https://quackbyte.dev',
  base: '/glide',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'en',
    locales: [
      'en', 'es', 'fr', 'de', 'ja', 'ko',
      { path: 'zh', codes: ['zh-Hans'] },
      { path: 'pt', codes: ['pt-BR'] },
    ],
    routing: { prefixDefaultLocale: false },
  },
});
