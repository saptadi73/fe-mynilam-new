<template>
  <TheNavbar />
  <div class="pt-[76px]">
    <router-view></router-view>
  </div>
  <TheFooter />
</template>

<script setup lang="ts">
import TheFooter from '@/components/TheFooter.vue'
import TheNavbar from '../../components/TheNavbar.vue'
</script>
