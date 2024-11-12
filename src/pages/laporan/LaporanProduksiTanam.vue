<template>
  <div class="bg-image-wave container">
    <BaseHeaderTitle title="Laporan Lengkap Tanam" />
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
    header: 'Kode Tanam',
  }),
  columnHelper.accessor('employee_id', {
    cell: (info) => info.getValue()[1],
    header: 'Nama Petani',
  }),
  columnHelper.accessor('kabupaten_id', {
    cell: (info) => info.getValue(),
    header: 'Luas Lahan',
  }),
  columnHelper.accessor('kabupaten_id', {
    cell: (info) => info.getValue(),
    header: 'Satuan',
  }),
  columnHelper.accessor('address', {
    cell: (info) => info.getValue(),
    header: 'Alamat',
  }),
  columnHelper.accessor('kabupaten_id', {
    cell: (info) => info.getValue(),
    header: 'Desa/Kelurahan',
  }),
  columnHelper.accessor('date_started', {
    cell: (info) => info.getValue(),
    header: 'Mulai Produksi',
  }),
  columnHelper.accessor('date_harvested', {
    cell: (info) => info.getValue(),
    header: 'Akhir Produksi',
  }),
  columnHelper.accessor('final_quantity', {
    cell: (info) => info.getValue(),
    header: 'Estimasi Panen',
  }),
  columnHelper.accessor('uom', {
    cell: (info) => info.getValue()[1],
    header: 'Satuan',
  }),
  columnHelper.accessor('coordinates', {
    cell: (info) => info.getValue(),
    header: 'Lokasi',
  }),
  columnHelper.accessor('state', {
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
