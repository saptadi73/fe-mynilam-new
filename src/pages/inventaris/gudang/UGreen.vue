<template>
  <div class="bg-image-wave px-4 lg:px-16">
    <BaseHeaderTitle title="UGreen" />
    <BaseTableClient :data="data" :columns="columns" :page-size="5" :custom-header="true" class="bg-white">
      <template #header>
        <div
          class="p-4 lg:flex items-center lg:space-x-3 space-y-4 lg:space-y-0 overflow-x-auto overflow-y-visible z-10"
        >
          <BaseSearchBar placeholder="Cari nama" class="w-full lg:w-52 2xl:w-60" />
          <BaseButton>Cari</BaseButton>
          <BaseInputDateRange name="tanggal" placeholder-start="Tanggal mulai" placeholder-end="Tanggal akhir" />
        </div>
      </template>
    </BaseTableClient>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { createColumnHelper } from '@tanstack/vue-table'
import BaseTableClient from '@/components/BaseTableClient.vue'
import BaseHeaderTitle from '@/components/BaseHeaderTitle.vue'
import BaseInputDateRange from '@/components/BaseInputDateRange.vue'
import BaseSearchBar from '@/components/BaseSearchBar.vue'
import BaseButton from '@/components/BaseButton.vue'

interface Produksi {
  no?: number
  kodeProduksi: string
  namaPenjual: string
  jumlah: string
  satuan: string
  harga: string
  tanggal: string
  status: string
}

const defaultData: Produksi[] = [
  {
    kodeProduksi: 'ABC1234',
    namaPenjual: 'Budi Santoso',
    jumlah: '800',
    satuan: 'kg',
    harga: '20000',
    tanggal: '27/08/2024',
    status: 'Masuk',
  },
  {
    kodeProduksi: 'F64ABD5',
    namaPenjual: 'Agus Saputra',
    jumlah: '800',
    satuan: 'kg',
    harga: '20000',
    tanggal: '11/08/2024',
    status: 'Masuk',
  },
  {
    kodeProduksi: 'F64ABD5',
    namaPenjual: 'Siti Aisyah',
    jumlah: '800',
    satuan: 'kg',
    harga: '20000',
    tanggal: '01/06/2024',
    status: 'Masuk',
  },
  {
    kodeProduksi: 'F64ABD5',
    namaPenjual: 'Siti Nurhaliza',
    jumlah: '800',
    satuan: 'kg',
    harga: '20000',
    tanggal: '20/08/2024',
    status: 'Masuk',
  },
  {
    kodeProduksi: 'F64ABD5',
    namaPenjual: 'Bambang Pamungkas',
    jumlah: '800',
    satuan: 'kg',
    harga: '20000',
    tanggal: '10/08/2024',
    status: 'Masuk',
  },
  {
    kodeProduksi: 'F64ABD5',
    namaPenjual: 'Vicky Prasetyo',
    jumlah: '800',
    satuan: 'kg',
    harga: '20000',
    tanggal: '01/05/2024',
    status: 'Masuk',
  },
]

const data = ref(defaultData)

const columnHelper = createColumnHelper<Produksi>()

const columns = [
  columnHelper.accessor('no', {
    cell: (info) => info.row.index + 1,
    header: 'No',
  }),
  columnHelper.accessor('kodeProduksi', {
    cell: (info) => info.getValue(),
    header: 'Kode Produksi',
  }),
  columnHelper.accessor('namaPenjual', {
    cell: (info) => info.getValue(),
    header: 'namaPenjual',
  }),
  columnHelper.accessor('jumlah', {
    cell: (info) => info.getValue(),
    header: 'Jumlah',
  }),
  columnHelper.accessor('satuan', {
    cell: (info) => info.getValue(),
    header: 'Satuan',
  }),
  columnHelper.accessor('harga', {
    cell: (info) => info.getValue(),
    header: 'Harga',
  }),
  columnHelper.accessor('tanggal', {
    cell: (info) => info.getValue(),
    header: 'Tanggal',
  }),
  columnHelper.accessor('status', {
    cell: (info) => info.getValue(),
    header: 'Status',
  }),
]
</script>
