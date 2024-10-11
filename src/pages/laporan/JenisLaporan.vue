<template>
  <div class="bg-primary-light px-4 lg:px-16 pb-10">
    <BaseHeaderTitle title="Pilih Jenis Laporan" />
    <section class="bg-white p-3 border-2 border-primary-border rounded-xl grid grid-cols-4 gap-2">
      <div
        v-for="(laporan, i) in laporanList"
        :key="i"
        class="rounded-2xl border-2 border-primary-border bg-primary-light shadow-md"
      >
        <img :src="getImage(i)" class="w-full rounded-t-xl" />
        <div
          class="bg-primary-light px-3 pt-3 rounded-xl text-center text-sm border-t-2 border-primary-border -translate-y-3 font-cera"
        >
          <h1 class="font-semibold mb-3">{{ laporan }}</h1>
          <p class="mb-3">
            Menampilkan Daftar Seluruh Pengguna dari Petani, Agen, hingga Koperasi Beserta Detail Profil Mereka
          </p>
          <div class="flex items-center space-x-2 font-semibold">
            <BaseButton variant="success" class="!rounded !text-sm w-full">Lihat</BaseButton>
            <BaseButton variant="primary-light" icon-position="left" class="!rounded !text-sm w-full">
              <BaseIcon name="download" class="text-primary" />
              Unduh
            </BaseButton>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import BaseHeaderTitle from '@/components/BaseHeaderTitle.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseIcon from '@/components/BaseIcon.vue'

const laporanList = [
  'Laporan Nama Pengguna (Profil)',
  'Laporan Produksi',
  'Laporan Gudang',
  'Laporan Pergerakan Barang',
  'Laporan Produk (Inventaris)',
  'Laporan Produk (Penjualan)',
  'Laporan Mitra',
  'Laporan Penjualan',
]

const getImage = (i: number) => {
  return new URL(`/src/assets/images/laporan/jenis-laporan-${i + 1}.png`, import.meta.url).href
}
</script>
