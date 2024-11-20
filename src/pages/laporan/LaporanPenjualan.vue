<template>
  <div class="bg-image-wave container">
    <BaseHeaderTitle title="Laporan Transaksi Penjualan" />
    <BaseTableClient
      :data="daftarPenjualan.data.value || []"
      :columns="columns"
      :custom-header="true"
      :search-value="searchValue"
      :is-loading="daftarPenjualan.isLoading.value"
      class="bg-white"
    >
      <template #header>
        <div
          class="p-4 lg:flex items-center lg:space-x-3 space-y-4 lg:space-y-0 overflow-x-auto overflow-y-visible z-10"
        >
          <BaseSearchBar v-model="searchValue" placeholder="Cari nama pembeli" class="w-full lg:w-52 2xl:w-60" />
          <BaseInputDateRange
            name="tanggal"
            placeholder-start="Tanggal mulai"
            placeholder-end="Tanggal akhir"
            @change="handleDateChange"
          />
          <BaseInputSelect
            name="daerah"
            label-key="name"
            value-key="id"
            placeholder="Pilih daerah"
            :options="kabupaten.data.value"
            class="w-full lg:w-44 2xl:w-52"
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
import { useDaftarPenjualan } from '@/api/useTransaction'
import { useKabupaten } from '@/api/useLocalization'
import type { DaftarPenjualan, DaftarPenjualanParams } from '@/types/transaction'

const daftarPenjualanParams = ref<DaftarPenjualanParams>({})
const daftarPenjualan = useDaftarPenjualan(daftarPenjualanParams)
const kabupaten = useKabupaten()

const searchValue = ref('')

const columnHelper = createColumnHelper<DaftarPenjualan>()

const columns = [
  columnHelper.display({
    header: 'No',
    cell: (info) => info.row.index + 1,
  }),
  columnHelper.accessor('transaction_number', {
    cell: (info) => info.getValue()[1],
    header: 'No Transaksi',
  }),
  columnHelper.accessor('source_actor', {
    cell: (info) => info.getValue()[1],
    header: 'Penjual',
  }),
  columnHelper.accessor('source_actor_associate_code', {
    cell: (info) => info.getValue(),
    header: 'Status',
  }),
  columnHelper.accessor('kabupaten_id', {
    cell: (info) => info.getValue()[1],
    header: 'Kota/Kabupaten',
  }),
  columnHelper.accessor('destination_actor', {
    cell: (info) => info.getValue()[1],
    header: 'Pembeli',
  }),
  columnHelper.accessor('destination_actor_associate_code', {
    cell: (info) => info.getValue(),
    header: 'Status',
  }),
  columnHelper.accessor('price', {
    cell: (info) => info.getValue(),
    header: 'Harga/kg',
  }),
  columnHelper.accessor('quantity', {
    cell: (info) => info.getValue(),
    header: 'Jumlah',
  }),
  columnHelper.accessor('product_uom_id', {
    cell: (info) => info.getValue()[1],
    header: 'Satuan',
  }),
  columnHelper.accessor('date_order', {
    cell: (info) => info.getValue(),
    header: 'Tanggal',
  }),
  columnHelper.accessor('state', {
    cell: (info) => info.getValue(),
    header: 'Status Pembayaran',
  }),
]

const handleDaerahChange = (value: number) => {
  daftarPenjualanParams.value.kabupaten_id = value
}

const handleDateChange = (value: string[]) => {
  daftarPenjualanParams.value.start_date = value[0]
  daftarPenjualanParams.value.end_date = value[1]
}
</script>
