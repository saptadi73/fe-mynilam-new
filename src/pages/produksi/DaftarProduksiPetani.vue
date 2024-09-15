<template>
  <div class="bg-image-wave">
    <BaseProductCard card-title="Daftar Produksi Petani" :card-content="cardContent" />
  </div>
</template>

<script setup lang="ts">
import BaseProductCard from '@/components/BaseProductCard.vue'

const cardContent = [
  {
    title: 'Petani',
    content: 'Melihat Proses Tanam Nilam Secara Menyeluruh, Mulai dari Penanaman Benih hingga Waktu Panen',
    pathName: 'Laporan Lengkap Produksi',
  },
  {
    title: 'Minyak Nilam',
    content: ' Menampilkan Proses Produksi Minyak Nilam dari Awal hingga Selesai, Termasuk Pengolahan dan Hasil Akhir.',
    pathName: 'Laporan Lengkap Produksi',
  },
]
</script>
