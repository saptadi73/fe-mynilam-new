<template>
  <div class="bg-image-wave container">
    <BaseHeaderTitle title="Laporan Pergerakan Barang" />
    <BaseTableClient
      :data="referenceSummary.data.value"
      :columns="columns"
      :custom-header="true"
      :search-value="searchValue"
      :is-loading="referenceSummary.isLoading.value"
      class="bg-white"
    >
      <template #header>
        <div
          class="p-4 lg:flex items-center lg:space-x-3 space-y-4 lg:space-y-0 overflow-x-auto overflow-y-visible z-10"
        >
          <BaseSearchBar v-model="searchValue" placeholder="Cari nama pembeli" class="w-full lg:w-52 2xl:w-60" />
          <BaseInputDateRange name="tanggal" placeholder-start="Tanggal mulai" placeholder-end="Tanggal akhir" />
        </div>
      </template>
    </BaseTableClient>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseTableClient from '@/components/BaseTableClient.vue'
import { createColumnHelper } from '@tanstack/vue-table'
import BaseHeaderTitle from '@/components/BaseHeaderTitle.vue'
import BaseInputDateRange from '@/components/BaseInputDateRange.vue'
import BaseSearchBar from '@/components/BaseSearchBar.vue'
import { useReferenceSummary } from '@/api/useTransaction'
import type { ReferenceSummary } from '@/types/transaction'

const referenceSummary = useReferenceSummary()
const searchValue = ref('')

const columnHelper = createColumnHelper<ReferenceSummary>()

const columns = [
  columnHelper.display({
    header: 'No',
    cell: (info) => info.row.index + 1,
  }),
  columnHelper.accessor('reference_1', {
    cell: (info) => info.getValue(),
    header: 'Kode Transaksi',
  }),
  columnHelper.accessor('reference_2', {
    cell: (info) => info.getValue(),
    header: 'Agen/Koperasi',
  }),
  columnHelper.accessor('reference_3', {
    cell: (info) => info.getValue(),
    header: 'Ugreen',
  }),
  columnHelper.accessor('reference_4', {
    cell: (info) => info.getValue(),
    header: 'Green',
  }),
  columnHelper.accessor('latest_quantity', {
    cell: (info) => info.getValue(),
    header: 'Jumlah',
  }),
  columnHelper.accessor('product_uom_id', {
    cell: (info) => info.getValue()[1],
    header: 'Satuan',
  }),
  columnHelper.accessor('state', {
    cell: (info) => info.getValue(),
    header: 'Status',
  }),
  columnHelper.accessor('date_created', {
    cell: (info) => info.getValue(),
    header: 'Tanggal Dibuat',
  }),
  columnHelper.accessor('date_modified', {
    cell: (info) => info.getValue(),
    header: 'Tanggal Diubah',
  }),
]
</script>
