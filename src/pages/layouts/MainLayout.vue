<template>
  <TheNavbar />
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import TheNavbar from '../../components/TheNavbar.vue'
</script>
