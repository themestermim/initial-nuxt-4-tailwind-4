import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    modules: [
        '@pinia/nuxt',
        '@nuxt/image',
        'nuxt-headlessui',
        '@nuxtjs/i18n',
    ],
    css: ['./app/assets/styles/main.css'],
    vite: {
        plugins: [
            tailwindcss(),
        ],
    },
    i18n: {
        vueI18n: './i18n.config.js',
        locales: [
            { code: 'fa', iso: 'fa-IR', name: 'فارسی' }
        ],
        defaultLocale: 'fa',
        strategy: 'no_prefix',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'locale',
            alwaysRedirect: true,
            fallbackLocale: 'fa'
        },
    },
    headlessui: {
        prefix: 'HL'
    },

    ssr: true,
    runtimeConfig: {
        public: {
            apiBase: 'https://api.com/api',
        }
    },
})