<template>
  <div class="bg-image-wave px-4 lg:px-16">
    <BaseHeaderTitle title="Laporan Petani" />
    <BaseTableClient
      :data="data"
      :columns="columns"
      :page-size="5"
      :custom-header="true"
      :search-value="searchValue"
      class="bg-white"
    >
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

          <BaseInputDateRange name="tanggal" placeholder-start="Tanggal mulai" placeholder-end="Tanggal akhir" />
          <BaseSearchBar v-model="searchValue" placeholder="Cari kode produksi" class="w-full lg:w-52 2xl:w-60" />
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
  namaPetani: string
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
    namaPetani: 'Bagas Adi Rukmana',
    agen: 'QPTY77',
    ugreen: '',
    green: '98D5672',
    jumlah: '800',
    satuan: 'kg',
    tanggal: '27/08/2024',
  },
  {
    kodeProduksi: 'F64ABD5',
    namaPetani: 'Bagas Adi Rukmana',
    agen: '2A3B78C',
    ugreen: '436BD21',
    green: '98D5672',
    jumlah: '800',
    satuan: 'kg',
    tanggal: '11/08/2024',
  },
  {
    kodeProduksi: 'F64ABD5',
    namaPetani: 'Bagas Adi Rukmana',
    agen: '2A3B78C',
    ugreen: '436BD21',
    green: '98D5672',
    jumlah: '800',
    satuan: 'kg',
    tanggal: '01/06/2024',
  },
  {
    kodeProduksi: 'F64ABD5',
    namaPetani: 'Bagas Adi Rukmana',
    agen: '2A3B78C',
    ugreen: '436BD21',
    green: '98D5672',
    jumlah: '800',
    satuan: 'kg',
    tanggal: '20/08/2024',
  },
  {
    kodeProduksi: 'F64ABD5',
    namaPetani: 'Bagas Adi Rukmana',
    agen: '2A3B78C',
    ugreen: '436BD21',
    green: '98D5672',
    jumlah: '800',
    satuan: 'kg',
    tanggal: '10/08/2024',
  },
  {
    kodeProduksi: 'F64ABD5',
    namaPetani: 'Bagas Adi Rukmana',
    agen: '2A3B78C',
    ugreen: '436BD21',
    green: '98D5672',
    jumlah: '800',
    satuan: 'kg',
    tanggal: '01/05/2024',
  },
]

const data = ref(defaultData)
const searchValue = ref('')

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
  columnHelper.accessor('namaPetani', {
    cell: (info) => info.getValue(),
    header: 'Nama Petani',
  }),
  columnHelper.accessor('agen', {
    cell: (info) => info.getValue(),
    header: 'Agen',
  }),
  columnHelper.accessor('ugreen', {
    cell: (info) => info.getValue(),
    header: 'Ugreen',
  }),
  columnHelper.accessor('tanggal', {
    cell: (info) => info.getValue(),
    header: 'Tanggal',
  }),
]
</script>
