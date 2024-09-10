<template>
  <div class="border-2 rounded-2xl border-gray-200 bg-white">
    <!-- table header -->
    <section class="p-4">
      <div class="bg-white">
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative mt-1">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <BaseIcon name="search" class="w-4 h-4 text-gray-500" />
          </div>
          <input
            type="text"
            id="table-search"
            class="block pt-2 ps-10 text-sm text-gray-900 border-2 border-gray-200 rounded-lg w-60"
            placeholder="Cari tahun"
          />
        </div>
      </div>
    </section>
    <!-- table content-->
    <section class="relative overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-700">
        <thead>
          <tr v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id" class="border-y-2 border-gray-200">
            <th
              v-for="header in headerGroup.headers"
              :key="header.id"
              :colspan="header.colSpan"
              class="px-6 py-4 text-center font-normal cursor-pointer whitespace-nowrap"
              @click="handleClickSort(header, $event)"
            >
              <div v-if="!header.isPlaceholder">
                <FlexRender :render="header.column.columnDef.header" :props="header.getContext()" />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="row in table.getRowModel().rows"
            :key="row.id"
            class="border-b-2 border-gray-200 hover:bg-gray-100"
          >
            <td v-for="(cell, index) in row.getVisibleCells()" :key="index" class="px-6 py-4 text-center">
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
        <button type="button" :disabled="!table.getCanPreviousPage()" @click="$emit('previousPage')">Sebelumnya</button>
        <button type="button" :disabled="!table.getCanNextPage()" @click="$emit('nextPage')">Selanjutnya</button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { FlexRender, Table, type Header } from '@tanstack/vue-table'
import BaseIcon from '../components/BaseIcon.vue'

interface Props {
  table: Table<any>
  pageSize?: number
}

withDefaults(defineProps<Props>(), {
  pageSize: 5,
})

const handleClickSort = (header: Header<{}, unknown>, $event: MouseEvent) => {
  // disable sorting for action column
  if (header.column.id !== 'action') {
    header.column.getToggleSortingHandler()?.($event)
  }
}
</script>
