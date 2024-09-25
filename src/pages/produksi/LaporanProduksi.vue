<template>
  <div class="bg-image-wave px-16">
    <BaseProductCard card-title="Laporan Produksi" :card-content="cardContent" />
  </div>
</template>

<script setup lang="ts">
import BaseProductCard from '@/components/BaseProductCard.vue'

const cardContent = [
  {
    title: 'Tanam',
    content: 'Laporan dari Persiapan Lahan, Penanaman Benih, hingga Panen untuk Memantau Produktivitas Petani',
    pathName: 'Laporan Lengkap Tanam',
  },
  {
    title: 'Minyak Nilam',
    content: 'Laporan dari Pengolahan Bahan Mentah hingga Hasil Akhir untuk Evaluasi dan Monitoring',
    pathName: 'Laporan Lengkap Produksi',
  },
]
</script>
