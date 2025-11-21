import { $fetch } from "ofetch";

const config = useRuntimeConfig();

export const http = $fetch.create({
    baseURL: config.public.apiBaseUrlPlaceholder,
    retry: 3,
    timeout: 5000,
})