<template>
  <router-view></router-view>
  <VueQueryDevtools v-if="isDevelopment" />
</template>

<script setup lang="ts">
// https://flowbite.com/docs/getting-started/vue/#data-attributes
import { initModals, initTabs } from 'flowbite'
import { onMounted } from 'vue'
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'

const isDevelopment = import.meta.env.VITE_ENV === 'dev'

onMounted(() => {
  initModals()
  initTabs()
})
</script>
