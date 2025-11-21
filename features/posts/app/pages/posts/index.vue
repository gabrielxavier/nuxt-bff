<template>
  <div>
    <div class="container mx-auto">
      <h1 class="text-3xl font-bold">Posts</h1>
      <ul>
        <li v-for="post in posts" class="mb-4">
          <nuxt-link :href="`/posts/${post.id}`">
            <h2 class="font-bold">{{ post.title  }}</h2>
            <p>{{ post.body  }}</p>
            </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Post } from "@/../server/features/posts/post";

const { data: posts } = await useFetch<Post[]>("/api/posts");
</script>
