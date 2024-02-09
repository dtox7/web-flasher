// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config';
import nodePolyfills from 'vite-plugin-node-stdlib-browser';

export default defineNuxtConfig({
  head: {
    title: 'My App',
    meta: [
      { hid: 'Discover our versatile tool for managing SD cards and ESP32 devices! Optimize your development processes, efficiently secure data, and maximize the performance of your ESP32 projects. Stay in control with our user-friendly and powerful tool!', name: 'bitdastra Webflasher', content: 'Discover our versatile tool for managing SD cards and ESP32 devices! Optimize your development processes, efficiently secure data, and maximize the performance of your ESP32 projects. Stay in control with our user-friendly and powerful tool!' },
      // other meta tags...
    ],
    // other properties...
  },
  // other properties...
  devtools: { enabled: true },
  routeRules: {
    // prerender index route by default
    '/': { prerender: true },
  },
  ssr: false,
  css: ['~/assets/css/main.css'],
  modules: [
    '@pinia/nuxt',
    '@vite-pwa/nuxt'
  ],
  pwa: {
    /* PWA options */
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    plugins: [
      nodePolyfills(),
    ],
    server: {
      proxy: {
        "^/api/.*": {
          target:
            "https://api.meshtastic.org/",
          changeOrigin: true,
          followRedirects: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
          secure: false,
          headers: {
            Accept: "application/octet-stream",
            Origin: 'https://flash.meshtastic.org',
            Referer: 'https://flash.meshtastic.org/'
          },
        }
      }
    }
  },
});
