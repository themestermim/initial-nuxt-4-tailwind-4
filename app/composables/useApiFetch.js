export const useApiFetch = (url, options = {}) => {
    const config = useRuntimeConfig()

    const method = (options.method || 'GET').toUpperCase()

    return useFetch(url, {
        baseURL: config.public.api,
        credentials: 'include',
        dedupe: 'cancel',
        method,
        query: method === 'GET' ? options.query : undefined,
        body: method !== 'GET' ? options.body : undefined,
        timeout: 15000,
        key: url,

        // onRequest({ options }) {
        //     const token = useCookie('token').value
        //     if (token) {
        //         options.headers = {
        //             ...options.headers,
        //             Authorization: `Bearer ${token}`
        //         }
        //     }
        // },

        onResponseError() {
            // { response }
            // if (response?.status === 401) {
            //     navigateTo('/login')
            // }
        },

        ...options,
    })
}