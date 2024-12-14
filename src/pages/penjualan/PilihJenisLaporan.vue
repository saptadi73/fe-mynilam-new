<template>
  <div class="bg-image-wave px-5 md:px-16">
    <BaseHeaderTitle title="Pilih Penjualan" :back-button="false" />
    <div class="bg-[#F6FDFF] rounded-xl shadow-lg p-8 grid grid-cols-12 gap-y-8 md:gap-y-0 md:gap-x-8">
      <router-link :to="{ name: 'Daftar Penjualan' }" class="col-span-12 md:col-span-4">
        <div
          class="mitra-card bg-[#DEFCEC] hover:bg-slate-200 transition-transform hover:scale-105 duration-300 ease-in-out rounded-2xl cursor-pointer pb-20"
        >
          <img src="@/assets/images/penjualan/penjualan-1.png" alt="Daftar Penjualan" class="w-full" />
          <h1 class="text-3xl text-primary font-cera font-bold text-center">Daftar Penjualan</h1>
        </div>
      </router-link>
      <router-link :to="{ name: 'Pilih Daerah Penjualan' }" class="col-span-12 md:col-span-4">
        <div
          class="mitra-card bg-[#DEFCEC] hover:bg-slate-200 transition-transform hover:scale-105 duration-300 ease-in-out rounded-2xl cursor-pointer pb-20"
        >
          <img src="@/assets/images/penjualan/penjualan-2.png" alt="Laporan Penjualan" class="w-full" />
          <h1 class="text-3xl text-primary font-cera font-bold text-center">Laporan Penjualan</h1>
        </div>
      </router-link>
      <router-link :to="{ name: 'Pilih Traceability Product' }" class="col-span-12 md:col-span-4">
        <div
          class="mitra-card bg-[#DEFCEC] hover:bg-slate-200 transition-transform hover:scale-105 duration-300 ease-in-out rounded-2xl cursor-pointer pb-20"
        >
          <img src="@/assets/images/penjualan/penjualan-3.png" alt="Traceability Product" class="w-full" />
          <h1 class="text-3xl text-primary font-cera font-bold text-center">Traceability Product</h1>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseHeaderTitle from '@/components/BaseHeaderTitle.vue'
</script>

<style scoped>
.mitra-card {
  box-shadow: 5px 5px rgba(0, 0, 0, 0.25);
}
</style>
