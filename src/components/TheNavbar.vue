<template>
  <nav class="fixed w-full z-50 bg-white block my-auto p-4 lg:px-10 shadow-md">
    <div class="flex items-center justify-between space-x-3">
      <button
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-primary rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-primary-border"
        @click="isMenuOpen = !isMenuOpen"
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
      <router-link to="/" active-class="no-class">
        <img class="h-14" src="../assets/images/mynilam.png" alt="Logo MyNilam" />
      </router-link>
      <!-- navbar menu -->
      <ul class="hidden lg:flex items-center text-white bg-primary-3 rounded-full py-1.5 px-1">
        <li v-for="(menu, i) in menuList" :key="i" class="cursor-pointer">
          <router-link
            :active-class="menu.path === '/' ? 'beranda-active' : 'router-link-active'"
            :to="menu.path"
            class="px-5 py-1 rounded-full transition duration-500"
          >
            {{ menu.name }}
          </router-link>
        </li>
      </ul>
      <!-- user profile menu -->
      <div class="xl:relative">
        <div class="max-w-[190px] cursor-pointer" id="profile-button" data-dropdown-toggle="profile-dropdown">
          <div class="flex items-center space-x-2 text-white bg-primary-3 hover:bg-[#20D173] p-1.5 rounded-full">
            <img
              :src="user.data.value?.[0].image_1920_url"
              class="w-8 h-8 object-cover rounded-full border-2 border-white"
            />
            <div v-if="!user.isLoading.value" class="text-ellipsis whitespace-nowrap overflow-x-hidden hidden xl:block">
              {{ user.data.value?.[0].name }}
            </div>
            <BaseSkeletonText v-else class="w-28 h-4" />
          </div>
        </div>
        <!-- pop up -->
        <div id="profile-dropdown" class="hidden bg-primary-3 rounded-b-md">
          <div class="flex items-center space-x-2 text-white bg-primary-3 p-3 rounded-full cursor-default">
            <img
              :src="user.data.value?.[0].image_1920_url"
              class="w-7 h-7 object-cover rounded-full border-2 border-white"
            />
            <div v-if="!user.isLoading.value" class="font-semibold">{{ user.data.value?.[0].name }}</div>
            <BaseSkeletonText v-else class="w-28 h-4" />
          </div>
          <div class="text-center text-white text-sm font-semibold">
            <div class="py-2 cursor-pointer hover:bg-[#20D173]">View Profile</div>
            <div class="py-2 cursor-pointer rounded-b-md hover:bg-[#20D173]" @click="handleLogout">Log Out</div>
          </div>
        </div>
      </div>
    </div>
    <!-- mobile drawer menu -->
    <div id="navbar-sticky" class="mt-3 bg-primary-light text-primary p-2 rounded-3xl" :class="{ hidden: !isMenuOpen }">
      <ul>
        <li v-for="(menu, i) in menuList" :key="i">
          <router-link
            :active-class="menu.path === '/' ? 'beranda-active' : 'router-link-active'"
            :to="menu.path"
            @click="isMenuOpen = false"
            class="block py-2 px-4 rounded-full font-semibold"
          >
            {{ menu.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useUser } from '@/api/useLogin'
import { initDropdowns } from 'flowbite'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import BaseSkeletonText from './BaseSkeletonText.vue'

const router = useRouter()
const user = useUser()

const menuList = [
  { name: 'Beranda', path: '/' },
  { name: 'Profile', path: '/profile' },
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Inventaris', path: '/inventaris' },
  { name: 'Produksi', path: '/produksi' },
  { name: 'Penjualan', path: '/penjualan' },
  { name: 'Laporan', path: '/laporan' },
]

const isMenuOpen = ref(false)

const handleLogout = () => {
  localStorage.removeItem('token')
  router.push('/login')
}

onMounted(() => {
  initDropdowns()
})
</script>

<style scoped>
.router-link-active,
.beranda-active.router-link-exact-active {
  @apply bg-primary text-white;
}
</style>
