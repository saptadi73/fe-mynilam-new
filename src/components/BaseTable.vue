<template>
  <div class="border-2 rounded-2xl border-gray-200 bg-white">
    <!-- table header -->
    <section class="p-4 flex items-center justify-between text-sm text-gray-800">
      <!-- search bar -->
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
      <div class="flex">
        <div>Tampilkan {{ table.getState().pagination.pageSize }} dari {{ '{totaldata}' }}</div>
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
    <section class="flex justify-center p-4 text-primary text-xs font-semibold">
      <div class="flex items-center space-x-3 bg-primary-light py-2 px-10 border-2 border-[#B0CAC1] rounded-full">
        <button
          type="button"
          :disabled="!table.getCanPreviousPage()"
          @click="$emit('previousPage')"
          class="flex items-center space-x-2"
          :class="{ 'opacity-50': !table.getCanPreviousPage() }"
        >
          <BaseIcon name="arrow-right" class="rotate-180" /> <span>Halaman Sebelumnya</span>
        </button>
        <div class="flex items-center space-x-2 px-3">
          <template v-for="page in pagination" :key="page">
            <!-- active page -->
            <button v-if="page.includes('*')" class="w-6 h-6 rounded-full bg-[#1BAE6080] border-2 border-[#01543833]">
              {{ page.replace(/\*/g, '') }}
            </button>
            <!-- pagination dots -->
            <span v-else-if="page === '...'" class="font-semibold">...</span>
            <!-- normal page -->
            <button v-else class="w-6 h-6 rounded-full" @click="$emit('setPageIndex', Number(page) - 1)">
              {{ page }}
            </button>
          </template>
        </div>
        <button
          type="button"
          :disabled="!table.getCanNextPage()"
          @click="$emit('nextPage')"
          class="flex items-center space-x-2"
          :class="{ 'opacity-50': !table.getCanNextPage() }"
        >
          <span>Halaman Selanjutnya</span> <BaseIcon name="arrow-right" />
        </button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { FlexRender, type Header } from '@tanstack/vue-table'
import BaseIcon from '../components/BaseIcon.vue'
import { computed } from 'vue'

interface Props {
  table: any
  pageSize?: number
}

const props = withDefaults(defineProps<Props>(), {
  pageSize: 5,
})

const pagination = computed(() => {
  let current = props.table.getState().pagination.pageIndex + 1
  let last = props.table.getPageCount()
  let delta = 3

  if (last === 1) return ['1']

  const left = current - delta
  const right = current + delta + 1
  const range = []

  for (let i = 1; i <= last; i++) {
    if (i == 1 || i == last || (i >= left && i < right)) {
      if (i === left && i > 2) {
        range.push('...')
      }

      if (i === current) {
        range.push('*' + i + '*')
      } else {
        range.push(i.toString())
      }

      if (i === right - 1 && i < last - 1) {
        range.push('...')
      }
    }
  }

  return range
})

const handleClickSort = (header: Header<{}, unknown>, $event: MouseEvent) => {
  // disable sorting for action column
  if (header.column.id !== 'action') {
    header.column.getToggleSortingHandler()?.($event)
  }
}
</script>
