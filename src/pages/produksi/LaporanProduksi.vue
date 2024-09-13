<template>
  <div class="bg-image-wave">
    <BaseHeaderTitle title="Laporan Lengkap Produksi" />
    <BaseTableClient :data="data" :columns="columns" :page-size="5" class="bg-white" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseTableClient from '../../components/BaseTableClient.vue'
import { createColumnHelper } from '@tanstack/vue-table'
import BaseHeaderTitle from '@/components/BaseHeaderTitle.vue'

interface Produksi {
  no?: number
  kodeTanam: string
  nama: string
  alamat: string
  mulaiProduksi: string
  akhirProduksi: string
  estimasi: number
  satuan: string
  lokasi: string
  status: string
}

const defaultData: Produksi[] = [
  {
    kodeTanam: 'ABCDFEFF',
    nama: 'Agus Mulyono',
    alamat: 'Timang Rasa Gajah',
    mulaiProduksi: '21/03/2024',
    akhirProduksi: '21/08/2024',
    estimasi: 1000,
    satuan: 'kg',
    lokasi: '4.089802131, 6.49686450',
    status: 'On Progress',
  },
  {
    kodeTanam: 'TMN94AAA',
    nama: 'Agus Mulyono',
    alamat: 'Timang Rasa Gajah',
    mulaiProduksi: '21/03/2024',
    akhirProduksi: '21/08/2024',
    estimasi: 1000,
    satuan: 'kg',
    lokasi: '4.089802131, 6.49686450',
    status: 'On Progress',
  },
  {
    kodeTanam: 'TMN94AAA',
    nama: 'Agus Mulyono',
    alamat: 'Timang Rasa Gajah',
    mulaiProduksi: '21/03/2024',
    akhirProduksi: '21/08/2024',
    estimasi: 1000,
    satuan: 'kg',
    lokasi: '4.089802131, 6.49686450',
    status: 'On Progress',
  },
  {
    kodeTanam: 'TMN94AAA',
    nama: 'Agus Mulyono',
    alamat: 'Timang Rasa Gajah',
    mulaiProduksi: '21/03/2024',
    akhirProduksi: '21/08/2024',
    estimasi: 1000,
    satuan: 'kg',
    lokasi: '4.089802131, 6.49686450',
    status: 'On Progress',
  },
  {
    kodeTanam: 'TMN94AAA',
    nama: 'Agus Mulyono',
    alamat: 'Timang Rasa Gajah',
    mulaiProduksi: '21/03/2024',
    akhirProduksi: '21/08/2024',
    estimasi: 1000,
    satuan: 'kg',
    lokasi: '4.089802131, 6.49686450',
    status: 'On Progress',
  },
  {
    kodeTanam: 'TMN94AAA',
    nama: 'Agus Mulyono',
    alamat: 'Timang Rasa Gajah',
    mulaiProduksi: '21/03/2024',
    akhirProduksi: '21/08/2024',
    estimasi: 1000,
    satuan: 'kg',
    lokasi: '4.089802131, 6.49686450',
    status: 'On Progress',
  },
]

const data = ref(defaultData)

const columnHelper = createColumnHelper<Produksi>()

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
  columnHelper.accessor('satuan', {
    cell: (info) => info.getValue(),
    header: 'Satuan',
  }),
  columnHelper.accessor('lokasi', {
    cell: (info) => info.getValue(),
    header: 'Lokasi',
  }),
  columnHelper.accessor('status', {
    cell: (info) => info.getValue(),
    header: 'Status',
  }),
]
</script>
