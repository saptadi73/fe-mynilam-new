<template>
  <TheNavbar />
  <div class="pt-[88px]">
    <router-view></router-view>
  </div>
  <TheFooter />
</template>

<script setup lang="ts">
import TheFooter from '@/components/TheFooter.vue'
import TheNavbar from '../../components/TheNavbar.vue'
</script>
