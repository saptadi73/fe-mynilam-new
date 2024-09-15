<template>
  <div class="bg-image-wave">
    <BaseProductCard card-title="Laporan Pergerakan Barang" :card-content="cardContent" />
  </div>
</template>

<script setup lang="ts">
import BaseProductCard from '@/components/BaseProductCard.vue'

const cardContent = [
  {
    title: 'Petani',
    content: 'Laporan dari Persiapan Lahan, Penanaman Benih, hingga Panen untuk Memantau Produktivitas Petani',
    pathName: 'Laporan Petani',
  },
  {
    title: 'Agen/Koperasi',
    content: 'Laporan dari Pengolahan Bahan Mentah hingga Hasil Akhir untuk Evaluasi dan Monitoring',
    pathName: 'Laporan Petani',
  },
]
</script>
