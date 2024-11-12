<template>
  <div class="bg-image-wave px-16">
    <BaseProductCard card-title="Daftar Produksi Petani" :card-content="cardContent" />
  </div>
</template>

<script setup lang="ts">
import BaseProductCard from '@/components/BaseProductCard.vue'

const cardContent = [
  {
    title: 'Tanam',
    content: 'Laporan daftar tanaman nilam yang telah melalui tahap penanaman dan siap untuk dipanen',
    pathName: 'Laporan Produksi Tanam',
  },
  {
    title: 'Minyak Nilam',
    content: 'Laporan Proses Produksi Minyak Nilam dari Awal hingga Selesai, Termasuk Pengolahan dan Hasil Akhir.',
    pathName: 'Laporan Produksi Minyak',
  },
]
</script>
