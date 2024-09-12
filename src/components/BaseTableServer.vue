<template>
  <BaseTable
    :table="table"
    :search="search"
    :custom-header="customHeader"
    @previous-page="handlePreviousPage"
    @next-page="handleNextPage"
    @set-page-index="handleSetPageIndex"
  >
    <template #header>
      <slot name="header" />
    </template>
  </BaseTable>
</template>

<script setup lang="ts">
import { getCoreRowModel, useVueTable } from '@tanstack/vue-table'
import axios from 'axios'
import { onMounted, reactive } from 'vue'
import BaseTable from './BaseTable.vue'

interface CustomParamKey {
  page: string
  per_page: string
}

interface Props {
  columns: any[]
  url: string
  customParamKey?: CustomParamKey
  pageSize?: number
  search?: boolean
  customHeader?: boolean
}

export interface Pagination {
  pageIndex: number
  pageSize: number
}

const props = withDefaults(defineProps<Props>(), {
  customParamKey: () => ({ page: 'page', per_page: 'per_page' }),
  pageSize: 5,
  search: true,
  customHeader: false,
})

const tableData = reactive({ rows: [], pageCount: 1 })
const pagination: Pagination = reactive({ pageIndex: 0, pageSize: props.pageSize })

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

const handleSetPageIndex = (page: number) => {
  pagination.pageIndex = page
  table.setPageIndex(page)
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
