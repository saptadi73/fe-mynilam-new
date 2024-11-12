<template>
  <div class="bg-image-wave container">
    <BaseHeaderTitle title="Laporan Pergerakan Barang" />
    <BaseTableClient
      :data="harvestingList.data.value"
      :columns="columns"
      :custom-header="true"
      :search-value="searchValue"
      :is-loading="harvestingList.isLoading.value"
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
import { useHarvestingList } from '@/api/useProduction'
import type { Harvesting } from '@/types/production'

const harvestingList = useHarvestingList()
const searchValue = ref('')

const columnHelper = createColumnHelper<Harvesting>()

const columns = [
  columnHelper.display({
    header: 'No',
    cell: (info) => info.row.index + 1,
  }),
  columnHelper.accessor('asset_id', {
    cell: (info) => info.getValue()[1],
    header: 'Kode Transaksi',
  }),
  columnHelper.accessor('employee_id', {
    cell: (info) => info.getValue()[1],
    header: 'Agen/Koperasi',
  }),
  columnHelper.accessor('kabupaten_id', {
    cell: (info) => info.getValue(),
    header: 'Ugreen',
  }),
  columnHelper.accessor('kabupaten_id', {
    cell: (info) => info.getValue(),
    header: 'Green',
  }),
  columnHelper.accessor('address', {
    cell: (info) => info.getValue(),
    header: 'Jumlah',
  }),
  columnHelper.accessor('kabupaten_id', {
    cell: (info) => info.getValue(),
    header: 'Satuan',
  }),
  columnHelper.accessor('date_started', {
    cell: (info) => info.getValue(),
    header: 'Status',
  }),
  columnHelper.accessor('kabupaten_id', {
    cell: (info) => info.getValue(),
    header: 'Tanggal Dibuat',
  }),
  columnHelper.accessor('kabupaten_id', {
    cell: (info) => info.getValue(),
    header: 'Tanggal Diubah',
  }),
]
</script>
