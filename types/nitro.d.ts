declare module 'nitro/types' {
  interface NitroApp {
    api: ReturnType<typeof $fetch.create>
  }
}