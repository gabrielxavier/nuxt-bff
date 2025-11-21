const runtimeConfig = useRuntimeConfig()

export const apiService = $fetch.create({
    baseURL: runtimeConfig.public.apiBaseUrlPlaceholder,
    retry: 3,
    timeout: 5000
})
