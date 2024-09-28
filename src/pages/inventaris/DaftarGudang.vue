<template>
  <div class="bg-image-wave px-16">
    <BaseHeaderTitle title="Gudang" />
    <div class="bg-[#F6FDFF] rounded-xl shadow-lg p-8 grid grid-cols-12 gap-x-12">
      <div class="col-span-4">
        <RouterLink :to="{ name: 'Agen' }">
          <div
            class="mitra-card bg-[#DEFCEC] hover:bg-slate-200 transition-transform hover:scale-105 duration-300 ease-in-out rounded-2xl cursor-pointer pb-20"
          >
            <img src="@/assets/images/mitra-agen.png" alt="Mitra Agen" />
            <h1 class="text-3xl text-primary font-cera font-bold text-center">Agen</h1>
          </div>
        </RouterLink>
      </div>
      <div class="col-span-4">
        <div
          class="mitra-card bg-[#DEFCEC] hover:bg-slate-200 transition-transform hover:scale-105 duration-300 ease-in-out rounded-2xl cursor-pointer pb-20"
        >
          <img src="@/assets/images/mitra-koperasi.png" alt="Mitra Koperasi" />
          <h1 class="text-3xl text-primary font-cera font-bold text-center">Koperasi</h1>
        </div>
      </div>
      <div class="col-span-4">
        <RouterLink :to="{ name: 'Ugreen' }">
          <div
            class="mitra-card bg-[#DEFCEC] hover:bg-slate-200 transition-transform hover:scale-105 duration-300 ease-in-out rounded-2xl cursor-pointer pb-20"
          >
            <img src="@/assets/images/mitra-ugreen.png" alt="Mitra Ugreen" />
            <h1 class="text-3xl text-primary font-cera font-bold text-center">UGreen</h1>
          </div>
        </RouterLink>
      </div>
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
