import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        '@pinia/nuxt',
        '@nuxt/image',
        'nuxt-headlessui',
        '@nuxtjs/i18n',
    ],
    css: ['~/assets/styles/main.css'],
    vite: {
        plugins: [
            tailwindcss(),
        ],
    },
    i18n: {
        vueI18n: 'i18n.config.js',
        locales: [
            { code: 'fa', iso: 'fa-IR', name: 'فارسی' }
        ],
        defaultLocale: 'fa',
        strategy: 'no_prefix',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'locale',
            alwaysRedirect: false,
            fallbackLocale: 'fa'
        },
    },
    headlessui: {
        prefix: 'HL'
    },

    runtimeConfig: {
        public: {
            apiBase: 'https://api.com/api',
        }
    },
})