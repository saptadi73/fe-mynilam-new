<template>
  <div class="bg-image-wave container">
    <BaseHeaderTitle :title="'Laporan ' + name" />
    <BaseTableClient
      :data="transactionDetails.data.value"
      :columns="columns"
      :custom-header="true"
      :search-value="searchValue"
      :is-loading="transactionDetails.isLoading.value"
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
import { useRoute } from 'vue-router'
import BaseTableClient from '@/components/BaseTableClient.vue'
import { createColumnHelper } from '@tanstack/vue-table'
import BaseHeaderTitle from '@/components/BaseHeaderTitle.vue'
import BaseInputDateRange from '@/components/BaseInputDateRange.vue'
import BaseSearchBar from '@/components/BaseSearchBar.vue'
import { useTransactionDetails } from '@/api/useTransaction'
import type { TransactionDetails, TransactionDetailsParams } from '@/types/transaction'

const route = useRoute()
const { id, name } = route.params

const params = ref<TransactionDetailsParams>({ id_petani: Number(id) || undefined })
const transactionDetails = useTransactionDetails(params)

const searchValue = ref('')

const columnHelper = createColumnHelper<TransactionDetails>()

const columns = [
  columnHelper.display({
    cell: (info) => info.row.index + 1,
    header: 'No',
  }),
  columnHelper.accessor('date_order', {
    cell: (info) => info.getValue(),
    header: 'Tanggal Penjualan',
  }),
  columnHelper.accessor('specific_code', {
    cell: (info) => info.getValue(),
    header: 'Kode Penjualan',
  }),
  columnHelper.accessor('destination_actor', {
    cell: (info) => info.getValue()[1],
    header: 'Pembeli',
  }),
  columnHelper.accessor('destination_actor', {
    cell: '-',
    header: 'Jenis',
  }),
  columnHelper.accessor('destination_actor', {
    cell: '-',
    header: 'Kota/Kabupaten',
  }),
  columnHelper.accessor('quantity', {
    cell: (info) => info.getValue(),
    header: 'Total',
  }),
  columnHelper.accessor('product_uom_id', {
    cell: (info) => info.getValue()[1],
    header: 'Satuan',
  }),
  columnHelper.accessor('price', {
    cell: (info) => info.getValue(),
    header: 'Harga/kg',
  }),
  columnHelper.accessor('value', {
    cell: (info) => info.getValue(),
    header: 'Total Harga',
  }),
  columnHelper.accessor('ownership_code_id', {
    cell: (info) => info.getValue()[1],
    header: 'Kode Referensi',
  }),
  columnHelper.accessor('destination_actor', {
    cell: '-',
    header: 'Status',
  }),
]
</script>
