<template>
  <div class="border-2 rounded-2xl">
    <!-- table header -->
    <section class="p-4">
      <div class="bg-white">
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative mt-1">
          <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <BaseIcon name="search" class="w-4 h-4 text-gray-500" />
          </div>
          <input
            type="text"
            id="table-search"
            class="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-60"
            placeholder="Cari tahun"
          />
        </div>
      </div>
    </section>
    <!-- table content-->
    <section class="relative overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-700">
        <thead>
          <tr v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id" class="border-y-2">
            <th v-for="header in headerGroup.headers" :key="header.id" :colspan="header.colSpan" class="px-6 py-4">
              <div v-if="!header.isPlaceholder">
                <FlexRender :render="header.column.columnDef.header" :props="header.getContext()" />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in table.getRowModel().rows" :key="row.id" class="border-b-2 hover:bg-gray-100">
            <td v-for="(cell, index) in row.getVisibleCells()" :key="index" class="px-6 py-4">
              <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
    <!-- table footer -->
    <section class="flex justify-between p-4 text-gray-700">
      <div>Halaman {{ table.getState().pagination.pageIndex + 1 }} dari {{ table.getPageCount() }}</div>
      <div class="flex items-center space-x-3">
        <button type="button" :disabled="!table.getCanPreviousPage()" @click="handlePreviousPage">Sebelumnya</button>
        <button type="button" :disabled="!table.getCanNextPage()" @click="handleNextPage">Selanjutnya</button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { FlexRender, getCoreRowModel, useVueTable } from '@tanstack/vue-table'
import axios from 'axios'
import { onMounted, reactive } from 'vue'
import BaseIcon from '../components/BaseIcon.vue'

interface CustomParamKey {
  page: string
  per_page: string
}

interface Props {
  columns: any[]
  url: string
  customParamKey?: CustomParamKey
  pageSize?: number
}

const props = withDefaults(defineProps<Props>(), {
  customParamKey: () => ({ page: 'page', per_page: 'per_page' }),
  pageSize: 5,
})

const tableData = reactive({ rows: [], pageCount: 1 })
const pagination = reactive({ pageIndex: 0, pageSize: props.pageSize })

const getTableData = async () => {
  const { pageIndex, pageSize } = pagination
  const params = { [props.customParamKey.page]: pageIndex + 1, [props.customParamKey.per_page]: pageSize }
  await axios(props.url, { params }).then((res) => {
    tableData.rows = res.data.data
    tableData.pageCount = res.data.total_pages
  })
}

const handlePreviousPage = () => {
  pagination.pageIndex = pagination.pageIndex - 1
  table.previousPage()
}

const handleNextPage = () => {
  pagination.pageIndex = pagination.pageIndex + 1
  table.nextPage()
}

onMounted(() => {
  getTableData()
})

// table option
const table = useVueTable({
  get data() {
    return tableData.rows
  },
  get pageCount() {
    return tableData.pageCount
  },
  columns: props.columns,
  state: {
    get pagination() {
      return pagination
    },
  },
  getCoreRowModel: getCoreRowModel(),
  onPaginationChange: getTableData,
  manualPagination: true,
})
</script>
