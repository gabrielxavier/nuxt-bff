<template>
  <div>
    <div class="container mx-auto">
      <h1 class="text-3xl font-bold">Albums</h1>
      <ul>
        <li v-for="album in albums" class="mb-4">
          <h2 class="font-bold">{{ album.title  }}</h2>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Album } from "@/../server/features/albums/album";

const { data: albums } = await useFetch<Album[]>("/api/albums");
</script>
