<template>
  <div class="bg-image-wave container">
    <BaseHeaderTitle title="Laporan Lengkap Tanam" />
    <BaseTableClient
      :data="harvestingList.data.value || []"
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
          <BaseSearchBar v-model="searchValue" placeholder="Cari..." class="w-full lg:w-52 2xl:w-60" />
          <BaseInputDateRange
            name="tanggal"
            placeholder-start="Tanggal mulai"
            placeholder-end="Tanggal akhir"
            @change="handleDateChange"
          />
          <BaseInputSelect
            name="kabupaten"
            placeholder="Pilih kabupaten"
            label-key="name"
            value-key="id"
            :options="kabupaten.data.value"
            class="w-full lg:w-52 2xl:w-64"
            @change="handleDaerahChange"
          />
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
import BaseInputSelect from '@/components/BaseInputSelect.vue'
import { usePlantingList } from '@/api/useProduction'
import { useKabupaten } from '@/api/useLocalization'
import type { NilamDetailType, HarvestingParams } from '@/types/production'

const params = ref<HarvestingParams>({})
const harvestingList = usePlantingList(params)
const kabupaten = useKabupaten()
const searchValue = ref('')

const handleDateChange = (value: string[]) => {
  params.value.start_date = value[0]
  params.value.end_date = value[1]
}

const handleDaerahChange = (value: number) => {
  params.value.kabupaten_id = value
}

const columnHelper = createColumnHelper<NilamDetailType>()

const columns = [
  columnHelper.display({
    header: 'No',
    cell: (info) => info.row.index + 1,
  }),
  columnHelper.accessor('production_identifier', {
    cell: (info) => info.getValue(),
    header: 'Kode Tanam',
  }),
  columnHelper.accessor('employee_id', {
    cell: (info) => info.getValue()[1],
    header: 'Nama Petani',
  }),
  columnHelper.accessor('area', {
    cell: (info) => info.getValue(),
    header: 'Luas Lahan',
  }),
  columnHelper.accessor('address', {
    cell: (info) => info.getValue(),
    header: 'Alamat',
  }),
  columnHelper.accessor('date_planned_start', {
    cell: (info) => info.getValue(),
    header: 'Mulai Produksi',
  }),
  columnHelper.accessor('date_planned_finish', {
    cell: (info) => info.getValue(),
    header: 'Akhir Produksi',
  }),
  columnHelper.accessor('quantity', {
    cell: (info) => info.getValue(),
    header: 'Estimasi Panen',
  }),
  columnHelper.accessor('actual_quantity', {
    cell: (info) => info.getValue(),
    header: 'Hasil Panen',
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
]
</script>
