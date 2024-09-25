<template>
  <TheNavbar />
  <div class="pt-[76px]">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import TheNavbar from '../../components/TheNavbar.vue'
</script>
