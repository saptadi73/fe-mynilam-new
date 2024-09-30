<template>
  <div class="border-2 rounded-2xl border-primary-border bg-white bg-opacity-95">
    <!-- table header -->
    <section v-if="!customHeader" class="p-4 flex items-center justify-between text-sm text-gray-800">
      <!-- search bar -->
      <form v-if="search" @submit.prevent="$emit('search', searchValue)" class="bg-white flex items-center space-x-1.5">
        <BaseSearchBar v-model="searchValue" placeholder="Cari..." />
        <button type="submit" class="bg-primary text-white px-4 h-8 rounded-lg text-sm font-semibold">Cari</button>
      </form>
      <!-- show data option -->
      <div class="space-x-2">
        <span>Tampilkan</span>
        <select
          name="pageSize"
          id="pageSize"
          class="py-px px-2 bg-primary-light border-primary-border rounded show-page-size"
          @change="(e) => $emit('setPageSize', Number((e.target as HTMLInputElement).value))"
        >
          <template v-for="page in pageSizeList" :key="page">
            <option :value="page" :selected="page == table.getState().pagination.pageSize">{{ page }}</option>
          </template>
        </select>
        <span>dari {{ totalData }}</span>
      </div>
    </section>
    <!-- custom table header -->
    <slot v-else name="header" />
    <!-- desktop table content-->
    <section v-if="!isMobile" class="relative overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-700">
        <thead>
          <tr
            v-for="headerGroup in table.getHeaderGroups()"
            :key="headerGroup.id"
            class="border-y-2 border-primary-border"
          >
            <th
              v-for="header in headerGroup.headers"
              :key="header.id"
              :colspan="header.colSpan"
              class="px-6 py-4 text-center font-normal cursor-pointer whitespace-nowrap"
              @click="handleClickSort(header, $event)"
            >
              <div v-if="!header.isPlaceholder" class="flex items-center justify-center space-x-1.5">
                <span>
                  <FlexRender :render="header.column.columnDef.header" :props="header.getContext()" />
                </span>
                <div class="text-primary">
                  <BaseIcon name="chevron-right" class="w-1.5 h-1.5 -rotate-90" />
                  <BaseIcon name="chevron-right" class="w-1.5 h-1.5 rotate-90" />
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="row in table.getRowModel().rows"
            :key="row.id"
            class="border-b border-primary-border hover:bg-gray-100"
          >
            <td v-for="(cell, index) in row.getVisibleCells()" :key="index" class="px-6 py-4 text-center">
              <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
    <!-- mobile table content -->
    <section v-else class="grid md:grid-cols-2 gap-2 mx-4">
      <div
        v-for="row in table.getRowModel().rows"
        :key="row.id"
        class="border border-primary py-2 px-4 bg-white rounded-lg grid grid-cols-2 gap-2 text-sm"
      >
        <div v-for="(cell, index) in row.getVisibleCells()" :key="index">
          <h1 class="font-semibold">{{ cell.column.columnDef.header }}</h1>
          <p class="text-xs">
            <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
          </p>
        </div>
      </div>
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
          <BaseIcon name="chevron-right" class="w-3 h-3 rotate-180" />
          <span class="hidden md:block">Halaman Sebelumnya</span>
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
          <span class="hidden md:block">Halaman Selanjutnya</span> <BaseIcon name="chevron-right" class="w-3 h-3" />
        </button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { FlexRender, type Header } from '@tanstack/vue-table'
import { computed, onMounted, ref } from 'vue'
import BaseIcon from '../components/BaseIcon.vue'
import BaseSearchBar from './BaseSearchBar.vue'

interface Props {
  table: any
  pageSize?: number
  search: boolean
  customHeader?: boolean
  totalData: number
}

const props = withDefaults(defineProps<Props>(), {
  pageSize: 5,
  search: true,
  customHeader: false,
})

const searchValue = ref('')
const pageSizeList = ref<number[]>([])

const isMobile = computed(() => {
  const minWidth = 1024 // Minimum width for desktop devices
  return window.innerWidth < minWidth || screen.width < minWidth
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

const getPageSizes = () => {
  const list = [10, 20, 50, 100]
  list.push(props.pageSize) // add default pageSize to list
  const uniqueList = [...new Set(list)] // remove duplicates
  return uniqueList.sort((a, b) => a - b) // return sorted array
}

onMounted(() => {
  pageSizeList.value = getPageSizes()
})
</script>

<style scoped>
select:not([size]).show-page-size {
  padding-right: 25px;
}
</style>
