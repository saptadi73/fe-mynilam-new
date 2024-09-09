<template>
  <div class="flex items-center justify-between bg-primary py-4 px-8">
    <div class="font-cera text-white text-2xl"><span class="text-primary-3">MYNIL</span>AM</div>
    <ul class="hidden lg:flex items-center text-primary bg-white rounded-full py-1.5 px-4">
      <li v-for="menu in menuList" class="cursor-pointer">
        <router-link :to="menu.path" class="px-5 py-1 rounded-full transition duration-500">
          {{ menu.name }}
        </router-link>
      </li>
    </ul>
    <div class="hidden lg:block text-white bg-primary-3 py-2 px-6 rounded-full">John Doe</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const menuList = ref([
  { name: 'Beranda', path: '/' },
  { name: 'Profile', path: '/profile' },
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Inventaris', path: '/inventaris' },
  { name: 'Produksi', path: '/produksi' },
  { name: 'Penjualan', path: '/penjualan/daftar-penjualan' },
  { name: 'Laporan', path: '/laporan' },
])
</script>

<style scoped>
.router-link-exact-active {
  @apply bg-primary text-white;
}
</style>
