<template>
    <div>
        <nav>
            <div class="container mx-auto">
                <ul class="flex" style="list-style: none;">
                    <li v-for="menuItem in menu" :key="menuItem.url" class="me-4">
                        <nuxt-link :to="menuItem.url">{{ menuItem.label }}</nuxt-link>
                    </li>
                </ul>
            </div>
        </nav>
        <slot />
        <nav>
            <div class="container mx-auto">
                <ul class="flex" style="list-style: none;">
                    <li v-for="menuItem in footer" :key="menuItem.url" class="me-4">
                        <nuxt-link :to="menuItem.url">{{ menuItem.label }}</nuxt-link>
                    </li>
            </ul>
            </div>
        </nav>
        <SpeedInsights />
    </div>
</template>

<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue';

const { menu, footer } = useLayout()
</script>