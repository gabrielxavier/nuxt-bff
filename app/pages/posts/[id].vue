<template>
    <div>
    <div class="container mx-auto">
        <h1 class="text-3xl font-bold">Post</h1>
        <h2 class="font-bold">{{ post?.title }}</h2>
        <p>{{ post?.body }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Post } from "@/../server/types/post";
const route = useRoute()

const { data: post } = await useFetch<Post>(`/api/posts/${route.params.id}`);
</script>
