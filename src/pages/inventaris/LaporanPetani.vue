<template>
  <div class="p-8 bg-primary-light">
    <BaseTableClient :data="data" :columns="columns" :page-size="5" :custom-header="true" class="bg-white">
      <template #header>
        <div class="p-4">
          <BaseInputSelect :options="options" v-model="dropdownSelect" />
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
const dropdownSelect = ref('')

const options = ref([
  {
    label: 'Aceh Selatan',
    value: 1,
  },
  {
    label: 'Aceh Utara',
    value: 2,
  },
  {
    label: 'Aceh Tengah',
    value: 3,
  },
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
