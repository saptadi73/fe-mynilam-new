<template>
  <TheNavbar />
  <div class="p-4">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import TheNavbar from '../../components/TheNavbar.vue'
</script>
