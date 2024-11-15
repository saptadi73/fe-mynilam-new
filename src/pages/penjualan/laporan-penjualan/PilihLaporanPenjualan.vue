<template>
  <div class="bg-image-wave px-16">
    <BaseProductCard card-title="Pilih Laporan" :card-content="cardContent" />
  </div>
</template>

<script setup lang="ts">
import BaseProductCard from '@/components/BaseProductCard.vue'

const cardContent = [
  {
    title: 'Petani',
    content:
      'Menampilkan data penjualan petani, rincian ke agen/koperasi, serta analisis tren dari tanam hingga distribusi.',
    pathName: 'Daftar Petani Penjualan',
  },
  {
    title: 'Agen/Koperasi',
    content:
      ' Menampilkan data penjualan, rincian distribusi, serta analisis perkembangan penjualan dari agen dan koperasi ke Ugreen.',
    pathName: 'Daftar Agen Koperasi Penjualan',
  },
]
</script>
