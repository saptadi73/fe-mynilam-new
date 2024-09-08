<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
// https://flowbite.com/docs/getting-started/vue/#data-attributes
import { initCarousels, initModals, initTabs } from 'flowbite'
import { onMounted } from 'vue'

onMounted(() => {
  initCarousels()
  initModals()
  initTabs()
})
</script>
