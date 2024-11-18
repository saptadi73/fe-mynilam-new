<template>
  <div class="p-10 bg-primary-light">
    <section class="mb-5">
      <h1 class="font-semibold text-center text-2xl mb-3 font-cera">Stok Barang</h1>
      <BaseTableClient :data="inventoryQuant.data.value" :columns="columns1" :search="false" />
    </section>
    <section class="mb-5">
      <h1 class="font-semibold text-center text-2xl mb-3 font-cera">Stok Barang Keluar</h1>
      <BaseTableClient :data="stockMoves.data.value || []" :columns="columns2" :search="false" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { createColumnHelper } from '@tanstack/vue-table'
import { useInventoryQuant, useStockMoves } from '@/api/useInventory'
import BaseTableClient from '@/components/BaseTableClient.vue'
import type { InventoryQuant, StockMoves, StockMovesParams } from '@/types/inventory'

interface Props {
  selectedProductId: number
}

const props = defineProps<Props>()

const route = useRoute()
const id = route.params.id

const params = ref({ employee_id: Number(id) || null })
const inventoryQuant = useInventoryQuant(params)

const stockMovesParams = ref<StockMovesParams>({ employee_id: Number(id), product_id: props.selectedProductId })
const stockMoves = useStockMoves(stockMovesParams)

const columnHelper = createColumnHelper<InventoryQuant>()
const columnHelper2 = createColumnHelper<StockMoves>()

const columns1 = [
  columnHelper.display({
    header: 'No',
    cell: (info) => info.row.index + 1,
  }),
  columnHelper.accessor('product_id', {
    cell: (info) => info.getValue()[1],
    header: 'Produk',
  }),
  columnHelper.accessor('quantity_available', {
    cell: (info) => info.getValue(),
    header: 'Tersedia',
  }),
  columnHelper.accessor('quantity_sold', {
    cell: (info) => info.getValue(),
    header: 'Terjual',
  }),
  columnHelper.accessor('availability_status', {
    cell: (info) => info.getValue(),
    header: 'Status Ketersediaan',
  }),
  columnHelper.display({
    cell: (info) => info.getValue(),
    header: 'Lokasi',
  }),
  columnHelper.accessor('employee_id', {
    cell: (info) => info.getValue()[1],
    header: 'Pemilik',
  }),
]

const columns2 = [
  columnHelper2.display({
    header: 'No',
    cell: (info) => info.row.index + 1,
  }),
  columnHelper2.accessor('product_id', {
    cell: (info) => info.getValue()[1],
    header: 'Produk',
  }),
  columnHelper2.accessor('quantity', {
    cell: (info) => info.getValue(),
    header: 'Jumlah',
  }),
  columnHelper2.accessor('location_id', {
    cell: (info) => info.getValue()[1],
    header: 'Lokasi Awal',
  }),
  columnHelper2.accessor('location_dest_id', {
    cell: (info) => info.getValue()[1],
    header: 'Lokasi Tujuan',
  }),
  columnHelper2.accessor('date', {
    cell: (info) => info.getValue(),
    header: 'Tanggal',
  }),
  columnHelper2.accessor('state', {
    cell: (info) => info.getValue(),
    header: 'Status',
  }),
]
</script>
