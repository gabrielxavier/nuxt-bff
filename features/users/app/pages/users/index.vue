<template>
  <div>
    <div class="container mx-auto">
      <h1 class="text-3xl font-bold">Users</h1>
      <ul>
        <li v-for="user in users" class="mb-4">
          <h2 class="font-bold">{{ user.name  }}</h2>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { User } from "@/../server/features/users/user";

const { data: users } = await useFetch<User[]>("/api/users");
</script>
