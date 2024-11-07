<template>
  <div class="bg-image-wave px-5 md:px-16">
    <BaseHeaderTitle title="Pilih Jenis Laporan" />
    <div class="bg-[#F6FDFF] rounded-xl shadow-lg p-8 grid grid-cols-12 gap-y-8 md:gap-y-0 md:gap-x-12">
      <router-link :to="{ name: 'Pilih Laporan Penjualan' }" class="col-span-12 md:col-span-4 md:col-start-3">
        <div
          class="mitra-card bg-[#DEFCEC] hover:bg-slate-200 transition-transform hover:scale-105 duration-300 ease-in-out rounded-2xl cursor-pointer pb-20"
        >
          <img src="@/assets/images/penjualan/mitra-agen.png" alt="Mitra Agen" />
          <h1 class="text-3xl text-primary font-cera font-bold text-center">Laporan Penjualan</h1>
        </div>
      </router-link>
      <router-link :to="{ name: 'Pilih Traceability Product' }" class="col-span-12 md:col-span-4 md:col-start-7">
        <div
          class="mitra-card bg-[#DEFCEC] hover:bg-slate-200 transition-transform hover:scale-105 duration-300 ease-in-out rounded-2xl cursor-pointer pb-20"
        >
          <img src="@/assets/images/penjualan/mitra-koperasi.png" alt="Mitra Koperasi" />
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
