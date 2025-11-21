<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const { loadLayout } = useLayout()

await loadLayout()
</script>