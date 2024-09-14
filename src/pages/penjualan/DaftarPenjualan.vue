<template>
  <div class="p-8 bg-primary-light">
    <BaseTableServer :columns="columns" :total-data="12" url="https://reqres.in/api/users" />
  </div>
</template>

<script setup lang="ts">
import { createColumnHelper } from '@tanstack/vue-table'
import BaseTableServer from '../../components/BaseTableServer.vue'

interface DaftarPenjualanTable {
  first_name: string
  email: string
}

const columnHelper = createColumnHelper<DaftarPenjualanTable>()

const columns = [
  columnHelper.accessor<'first_name', string>('first_name', {
    cell: (info) => info.getValue(),
    header: 'First Name',
  }),
  columnHelper.accessor<'email', string>('email', {
    cell: (info) => info.getValue(),
    header: 'Email',
  }),
]
</script>
