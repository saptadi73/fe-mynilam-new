<template>
  <nav class="fixed w-full z-20 bg-primary block my-auto p-4 lg:px-10">
    <div class="flex items-center justify-between space-x-3">
      <button
        data-collapse-toggle="navbar-sticky"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-primary-light rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-primary-border"
        aria-controls="navbar-sticky"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <!-- logo -->
      <div class="font-cera text-white text-3xl"><span class="text-primary-3">MYNIL</span>AM</div>
      <!-- navbar menu -->
      <ul class="hidden lg:flex items-center text-primary bg-primary-light rounded-full py-1.5 px-1">
        <li v-for="(menu, i) in menuList" :key="i" class="cursor-pointer">
          <router-link :to="menu.path" class="px-5 py-1 rounded-full transition duration-500">
            {{ menu.name }}
          </router-link>
        </li>
      </ul>
      <!-- user profile menu -->
      <div class="xl:relative">
        <div class="max-w-[190px] cursor-pointer" @click="showPopUp = !showPopUp">
          <div class="flex items-center space-x-2 text-white bg-primary-3 hover:bg-[#20D173] p-1.5 rounded-full">
            <img src="https://placehold.co/100" class="w-8 h-8 rounded-full border-2 border-white" />
            <div class="text-ellipsis whitespace-nowrap overflow-x-hidden hidden xl:block">Bagas Adi Rukma</div>
          </div>
        </div>
        <!-- pop up -->
        <div
          v-if="showPopUp"
          class="absolute z-50 right-4 top-[65px] xl:top-[50px] xl:-left-12 bg-primary-3 rounded-b-md"
        >
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
    <!-- mobile drawer menu -->
    <div id="navbar-sticky" class="hidden mt-3 bg-primary-light text-primary p-2 rounded-3xl">
      <ul>
        <li v-for="(menu, i) in menuList" :key="i">
          <router-link :to="menu.path" class="block py-2 px-4 rounded-full font-semibold">
            {{ menu.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const menuList = ref([
  { name: 'Beranda', path: '/' },
  { name: 'Profile', path: '/profile' },
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Inventaris', path: '/inventaris/laporan-pergerakan-barang' },
  { name: 'Produksi', path: '/produksi' },
  { name: 'Penjualan', path: '/penjualan/daftar-mitra' },
  { name: 'Laporan', path: '/laporan' },
])

const showPopUp = ref(false)
</script>

<style scoped>
.router-link-exact-active {
  @apply bg-primary text-white;
}
</style>
