<template>
  <div class="bg-image-wave px-16">
    <BaseHeaderTitle title="Laporan Lengkap Tanam" />
    <BaseTableClient :data="data" :columns="columns" :page-size="5" class="bg-white" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseTableClient from '../../components/BaseTableClient.vue'
import { createColumnHelper } from '@tanstack/vue-table'
import BaseHeaderTitle from '@/components/BaseHeaderTitle.vue'

interface LaporanTanam {
  no?: number
  kodeTanam: string
  nama: string
  alamat: string
  satuan: string
  mulaiProduksi: string
  akhirProduksi: string
  estimasi: number
  luasLahan: number
}

const defaultData: LaporanTanam[] = [
  {
    kodeTanam: 'ABCDFEFF',
    nama: 'Agus Mulyono',
    alamat: 'Timang Rasa Gajah',
    mulaiProduksi: '21/03/2024',
    akhirProduksi: '21/08/2024',
    estimasi: 1000,
    satuan: 'M',
    luasLahan: 1000,
  },
  {
    kodeTanam: 'ABCDFEFF',
    nama: 'Agus Mulyono',
    alamat: 'Timang Rasa Gajah',
    mulaiProduksi: '21/03/2024',
    akhirProduksi: '21/08/2024',
    estimasi: 1000,
    satuan: 'M',
    luasLahan: 1000,
  },
  {
    kodeTanam: 'ABCDFEFF',
    nama: 'Agus Mulyono',
    alamat: 'Timang Rasa Gajah',
    mulaiProduksi: '21/03/2024',
    akhirProduksi: '21/08/2024',
    estimasi: 1000,
    satuan: 'M',
    luasLahan: 1000,
  },
  {
    kodeTanam: 'ABCDFEFF',
    nama: 'Agus Mulyono',
    alamat: 'Timang Rasa Gajah',
    mulaiProduksi: '21/03/2024',
    akhirProduksi: '21/08/2024',
    estimasi: 1000,
    satuan: 'M',
    luasLahan: 1000,
  },
  {
    kodeTanam: 'ABCDFEFF',
    nama: 'Agus Mulyono',
    alamat: 'Timang Rasa Gajah',
    mulaiProduksi: '21/03/2024',
    akhirProduksi: '21/08/2024',
    estimasi: 1000,
    satuan: 'M',
    luasLahan: 1000,
  },
  {
    kodeTanam: 'ABCDFEFF',
    nama: 'Agus Mulyono',
    alamat: 'Timang Rasa Gajah',
    mulaiProduksi: '21/03/2024',
    akhirProduksi: '21/08/2024',
    estimasi: 1000,
    satuan: 'M',
    luasLahan: 1000,
  },
]

const data = ref(defaultData)

const columnHelper = createColumnHelper<LaporanTanam>()

const columns = [
  columnHelper.accessor('no', {
    cell: (info) => info.row.index + 1,
    header: 'No',
  }),
  columnHelper.accessor('kodeTanam', {
    cell: (info) => info.getValue(),
    header: 'Kode Tanam',
  }),
  columnHelper.accessor('nama', {
    cell: (info) => info.getValue(),
    header: 'Nama Petani',
  }),
  columnHelper.accessor('luasLahan', {
    cell: (info) => info.getValue(),
    header: 'Luas Lahan',
  }),
  columnHelper.accessor('satuan', {
    cell: (info) => info.getValue(),
    header: 'Satuan',
  }),
  columnHelper.accessor('alamat', {
    cell: (info) => info.getValue(),
    header: 'Alamat',
  }),
  columnHelper.accessor('mulaiProduksi', {
    cell: (info) => info.getValue(),
    header: 'Mulai Produksi',
  }),
  columnHelper.accessor('akhirProduksi', {
    cell: (info) => info.getValue(),
    header: 'Akhir Produksi',
  }),
  columnHelper.accessor('estimasi', {
    cell: (info) => info.getValue(),
    header: 'Estimasi Produksi',
  }),
]
</script>
