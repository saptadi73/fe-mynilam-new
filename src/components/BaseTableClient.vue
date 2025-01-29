<template>
  <BaseTable
    :table="table"
    :search="search"
    :custom-header="customHeader"
    :total-data="table.getCoreRowModel().rows.length"
    :is-loading="props.isLoading"
    @previous-page="handlePreviousPage"
    @next-page="handleNextPage"
    @set-page-index="(page: number) => table.setPageIndex(page)"
    @set-page-size="(pageSize: number) => table.setPageSize(pageSize)"
    @search="(val: string) => { globalFilter = val }"
  >
    <template #header>
      <slot name="header" />
    </template>
    <template v-for="(_slot, name) in $slots" v-slot:[name]="scope">
      <slot :name="name" v-bind="scope" />
    </template>
  </BaseTable>
</template>

<script setup lang="ts" generic="T">
// prettier-ignore
import { ColumnDef, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, SortingState, useVueTable } from '@tanstack/vue-table'
import { onMounted, reactive, ref } from 'vue'
import BaseTable from './BaseTable.vue'

export interface TableClientProps<T> {
  data?: T[]
  columns: ColumnDef<T, any>[]
  pageSize?: number
  search?: boolean
  showPagination?: boolean
  columnVisibility?: { [key: string]: boolean }
  customHeader?: boolean
  searchValue?: string
  isLoading?: boolean
}

defineSlots()

const props = withDefaults(defineProps<TableClientProps<T>>(), {
  pageSize: 10,
  search: true,
  data: () => [],
  showPagination: true,
  customHeader: false,
  searchValue: '',
  isLoading: false,
})

const columnVisibility = ref(props.columnVisibility)
const sorting = ref<SortingState>([])
const globalFilter = ref('')
const pagination = reactive({ pageIndex: 0, pageSize: props.pageSize })

const handlePreviousPage = () => {
  pagination.pageIndex = pagination.pageIndex - 1
  table.previousPage()
}

const handleNextPage = () => {
  pagination.pageIndex = pagination.pageIndex + 1
  table.nextPage()
}

onMounted(() => {
  table.setPageSize(props.pageSize)
})

const table = useVueTable({
  get data() {
    return props.data
  },
  columns: props.columns,
  state: {
    get columnVisibility() {
      return columnVisibility.value
    },
    get sorting() {
      return sorting.value
    },
    get globalFilter() {
      return props.searchValue || globalFilter.value
    },
  },
  // globalFilterFn: searchMultipleWords,
  getCoreRowModel: getCoreRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  onSortingChange: (updaterOrValue) => {
    sorting.value = typeof updaterOrValue === 'function' ? updaterOrValue(sorting.value) : updaterOrValue
  },
})
</script>
