// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: { port: 8080 },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@vite-pwa/nuxt', '@nuxtjs/tailwindcss'],
  pwa: {
    manifest: {
      name:"PWA - Audio to Text",
      description: "PWA - Audio to Text",
      short_name: "PWA - Audio to Text",
      icons: [
        {
            "src": "/android-chrome-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "/android-chrome-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
        }
      ],
      lang: "en"
    },
  }
})