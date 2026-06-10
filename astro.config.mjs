import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 站台主網域 —— 部署前確認與你註冊的網域一致
export default defineConfig({
  site: 'https://getpredictgo.com',
  output: 'static',
  vite: {
    build: {
      minify: 'terser',
      cssMinify: true,
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-cn', 'hi'],
    routing: {
      prefixDefaultLocale: true, // 所有語言都帶前綴：/en/、/zh-cn/、/hi/
      redirectToDefaultLocale: false,
    },
  },
  integrations: [sitemap()],
});
