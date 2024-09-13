<template>
  <div class="flex items-center justify-between space-x-3 bg-primary py-4 px-10">
    <!-- logo -->
    <div class="font-cera text-white text-3xl"><span class="text-primary-3">MYNIL</span>AM</div>
    <!-- navbar menu -->
    <ul class="hidden lg:flex items-center text-primary bg-primary-light rounded-full py-1.5 px-1">
      <li v-for="menu in menuList" class="cursor-pointer">
        <router-link :to="menu.path" class="px-5 py-1 rounded-full transition duration-500">
          {{ menu.name }}
        </router-link>
      </li>
    </ul>
    <!-- user profile menu -->
    <div class="relative">
      <div class="max-w-[190px] cursor-pointer" @click="showPopUp = !showPopUp">
        <div
          class="hidden lg:flex items-center space-x-2 text-white bg-primary-3 hover:bg-[#20D173] p-1.5 rounded-full"
        >
          <img src="https://placehold.co/100" class="w-8 h-8 rounded-full border-2 border-white" />
          <div class="line-clamp-1">Bagas Adi Rukma</div>
        </div>
      </div>
      <!-- pop up -->
      <div v-if="showPopUp" class="absolute z-50 top-[50px] -left-12 bg-primary-3 rounded-b-md">
        <div class="flex items-center space-x-2 text-white bg-primary-3 p-3 rounded-full cursor-default">
          <img src="https://placehold.co/100" class="w-7 h-7 rounded-full border-2 border-white" />
          <div class="font-semibold">Bagas Adi Rukma</div>
        </div>
        <div class="text-center text-white text-sm font-semibold">
          <div class="py-2 cursor-pointer hover:bg-[#20D173]">View Profile</div>
          <div class="py-2 cursor-pointer rounded-b-md hover:bg-[#20D173]">Log Out</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const menuList = ref([
  { name: 'Beranda', path: '/' },
  { name: 'Profile', path: '/profile' },
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Inventaris', path: '/inventaris/laporan-petani' },
  { name: 'Produksi', path: '/produksi/laporan-produksi' },
  { name: 'Penjualan', path: '/penjualan/daftar-penjualan' },
  { name: 'Laporan', path: '/laporan' },
])

const showPopUp = ref(false)
</script>

<style scoped>
.router-link-exact-active {
  @apply bg-primary text-white;
}
</style>
