<template>
  <div class="bg-image-wave">
    <BaseHeaderTitle title="Daftar Produksi Petani" />
    <div class="bg-[#F6FDFF] rounded-3xl shadow-lg px-8 py-4 grid grid-cols-12 gap-x-8">
      <div class="col-span-6">
        <h1 class="font-bold text-primary text-2xl text-center mb-4">Tanam</h1>
        <img src="../../assets/images/laporan-petani.png" alt="Laporan Petani Image" />
        <p class="font-cera text-primary text-center mt-2">
          Melihat Proses Tanam Nilam Secara Menyeluruh, Mulai dari Penanaman Benih hingga Waktu Panen
        </p>
        <RouterLink :to="{ name: 'Laporan Lengkap Produksi' }">
          <BaseButton variant="dark" class="w-full mt-4">Tampilkan</BaseButton>
        </RouterLink>
      </div>
      <div class="col-span-6">
        <h1 class="font-bold text-primary text-2xl text-center mb-4">Minyak Nilam</h1>
        <img src="../../assets/images/laporan-agen.png" alt="Laporan Agen Image" />
        <p class="font-cera text-primary text-center mt-2">
          Menampilkan Proses Produksi Minyak Nilam dari Awal hingga Selesai, Termasuk Pengolahan dan Hasil Akhir.
        </p>
        <RouterLink :to="{ name: 'Laporan Lengkap Produksi' }">
          <BaseButton variant="dark" class="w-full mt-4">Tampilkan</BaseButton>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue'
import BaseHeaderTitle from '@/components/BaseHeaderTitle.vue'
</script>
