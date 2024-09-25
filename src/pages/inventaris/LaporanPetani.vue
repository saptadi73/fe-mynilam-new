<template>
  <div class="bg-image-wave px-4 lg:px-16">
    <BaseHeaderTitle title="Laporan Petani" />
    <BaseTableClient :data="data" :columns="columns" :page-size="5" :custom-header="true" class="bg-white">
      <template #header>
        <div
          class="p-4 lg:flex items-center lg:space-x-3 space-y-4 lg:space-y-0 overflow-x-auto overflow-y-visible z-10"
        >
          <BaseInputSelect
            name="daerah"
            placeholder="Pilih daerah"
            :options="daerahList"
            class="w-full lg:w-44 2xl:w-52"
          />
          <BaseInputSelect
            name="agen"
            placeholder="Pilih agen/koperasi"
            :options="agenList"
            class="w-full lg:w-44 2xl:w-52"
          />
          <BaseInputSelect
            name="petani"
            placeholder="Pilih nama petani"
            :options="petaniList"
            class="w-full lg:w-44 2xl:w-52"
          />
          <BaseInputDateRange name="tanggal" placeholder-start="Tanggal mulai" placeholder-end="Tanggal akhir" />
          <BaseSearchBar placeholder="Cari kode produksi" class="w-full lg:w-52 2xl:w-60" />
        </div>
      </template>
    </BaseTableClient>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseTableClient from '@/components/BaseTableClient.vue'
import { createColumnHelper } from '@tanstack/vue-table'
import BaseInputSelect from '@/components/BaseInputSelect.vue'
import BaseHeaderTitle from '@/components/BaseHeaderTitle.vue'
import BaseInputDateRange from '@/components/BaseInputDateRange.vue'
import BaseSearchBar from '@/components/BaseSearchBar.vue'

interface Produksi {
  no?: number
  kodeProduksi: string
  agen: string
  ugreen: string
  green: string
  jumlah: string
  satuan: string
  tanggal: string
}

const defaultData: Produksi[] = [
  {
    kodeProduksi: 'ABC1234',
    agen: 'QWERTY777',
    ugreen: 'ASDFG56',
    green: '98D5672',
    jumlah: '800',
    satuan: 'kg',
    tanggal: '27/08/2024',
  },
  {
    kodeProduksi: 'F64ABD5',
    agen: '2A3B78C',
    ugreen: '436BD21',
    green: '98D5672',
    jumlah: '800',
    satuan: 'kg',
    tanggal: '11/08/2024',
  },
  {
    kodeProduksi: 'F64ABD5',
    agen: '2A3B78C',
    ugreen: '436BD21',
    green: '98D5672',
    jumlah: '800',
    satuan: 'kg',
    tanggal: '01/06/2024',
  },
  {
    kodeProduksi: 'F64ABD5',
    agen: '2A3B78C',
    ugreen: '436BD21',
    green: '98D5672',
    jumlah: '800',
    satuan: 'kg',
    tanggal: '20/08/2024',
  },
  {
    kodeProduksi: 'F64ABD5',
    agen: '2A3B78C',
    ugreen: '436BD21',
    green: '98D5672',
    jumlah: '800',
    satuan: 'kg',
    tanggal: '10/08/2024',
  },
  {
    kodeProduksi: 'F64ABD5',
    agen: '2A3B78C',
    ugreen: '436BD21',
    green: '98D5672',
    jumlah: '800',
    satuan: 'kg',
    tanggal: '01/05/2024',
  },
]

const data = ref(defaultData)

const daerahList = ref([
  { label: 'Aceh Selatan', value: 1 },
  { label: 'Aceh Utara', value: 2 },
  { label: 'Aceh Tengah', value: 3 },
])
const agenList = ref([
  { label: 'Agen Nusantara Sakti', value: 1 },
  { label: 'Agen Indonesia Raya', value: 2 },
  { label: 'Agen Aceh', value: 3 },
])
const petaniList = ref([
  { label: 'Agus Nur Drajat', value: 1 },
  { label: 'Jayadi Idzes', value: 2 },
  { label: 'Martin Paes', value: 3 },
])

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
  columnHelper.accessor('agen', {
    cell: (info) => info.getValue(),
    header: 'Agen',
  }),
  columnHelper.accessor('ugreen', {
    cell: (info) => info.getValue(),
    header: 'Ugreen',
  }),
  columnHelper.accessor('green', {
    cell: (info) => info.getValue(),
    header: 'Green',
  }),
  columnHelper.accessor('jumlah', {
    cell: (info) => info.getValue(),
    header: 'Jumlah',
  }),
  columnHelper.accessor('satuan', {
    cell: (info) => info.getValue(),
    header: 'Satuan',
  }),
  columnHelper.accessor('tanggal', {
    cell: (info) => info.getValue(),
    header: 'Tanggal',
  }),
]
</script>
