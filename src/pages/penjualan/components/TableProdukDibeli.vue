<template>
  <table class="w-full text-sm text-left text-gray-700">
    <thead>
      <tr class="border-y-2 border-primary-border">
        <th colspan="1" class="px-6 py-4 text-center font-normal cursor-pointer whitespace-nowrap">
          <div class="flex items-center justify-center space-x-1.5">
            <span>Kode Transaksi</span>
          </div>
        </th>
        <th colspan="1" class="px-6 py-4 text-center font-normal cursor-pointer whitespace-nowrap">
          <div class="flex items-center justify-center space-x-1.5">
            <span>Kode Barang</span>
          </div>
        </th>
        <th colspan="1" class="px-6 py-4 text-center font-normal cursor-pointer whitespace-nowrap">
          <div class="flex items-center justify-center space-x-1.5">
            <span>Penjual</span>
          </div>
        </th>
        <th colspan="1" class="px-6 py-4 text-center font-normal cursor-pointer whitespace-nowrap">
          <div class="flex items-center justify-center space-x-1.5">
            <span>Status</span>
          </div>
        </th>
        <th colspan="1" class="px-6 py-4 text-center font-normal cursor-pointer whitespace-nowrap">
          <div class="flex items-center justify-center space-x-1.5">
            <span>Pembeli</span>
          </div>
        </th>
        <th colspan="1" class="px-6 py-4 text-center font-normal cursor-pointer whitespace-nowrap">
          <div class="flex items-center justify-center space-x-1.5">
            <span>Status</span>
          </div>
        </th>
        <th colspan="1" class="px-6 py-4 text-center font-normal cursor-pointer whitespace-nowrap">
          <div class="flex items-center justify-center space-x-1.5">
            <span>Produk</span>
          </div>
        </th>
        <th colspan="1" class="px-6 py-4 text-center font-normal cursor-pointer whitespace-nowrap">
          <div class="flex items-center justify-center space-x-1.5">
            <span>Kuantitas</span>
          </div>
        </th>
        <th colspan="1" class="px-6 py-4 text-center font-normal cursor-pointer whitespace-nowrap">
          <div class="flex items-center justify-center space-x-1.5">
            <span>Satuan</span>
          </div>
        </th>
        <th colspan="1" class="px-6 py-4 text-center font-normal cursor-pointer whitespace-nowrap">
          <div class="flex items-center justify-center space-x-1.5">
            <span>Harga</span>
          </div>
        </th>
        <th colspan="1" class="px-6 py-4 text-center font-normal cursor-pointer whitespace-nowrap">
          <div class="flex items-center justify-center space-x-1.5">
            <span>Total</span>
          </div>
        </th>
        <th colspan="1" class="px-6 py-4 text-center font-normal cursor-pointer whitespace-nowrap">
          <div class="flex items-center justify-center space-x-1.5">
            <span>Action</span>
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="i in count" :key="i" class="border-b-2 border-primary-border">
        <td class="py-4 text-center">FA0101-010-01</td>
        <td class="py-4 text-center">MNL-001</td>
        <td class="py-4 text-center">
          <BaseInputSelect
            class="border-none w-40 text-center"
            name="penjual"
            :options="penjualList"
            placeholder="Penjual"
            label-key="name"
            value-key="id"
          />
        </td>
        <td class="py-4 text-center">Petani</td>
        <td class="py-4 text-center">Nilam Jaya</td>
        <td class="py-4 text-center">Koperasi</td>
        <td class="py-4 text-center">Minyak Nilam</td>
        <td class="py-4 text-center">
          <input
            type="text"
            class="w-10 border-b border-b-primary-2 border-x-0 border-t-0 p-0 text-center focus:outline-none"
            value="0"
          />
        </td>
        <td class="py-4 text-center">kg</td>
        <td class="py-4 text-center">
          <input
            type="text"
            class="w-10 border-b border-b-primary-2 border-x-0 border-t-0 p-0 text-center focus:outline-none"
            value="0"
          />
        </td>
        <td class="py-4 text-center">1.000.000</td>
      </tr>
      <tr @click="count++" class="border-b-2 border-primary-border hover:bg-gray-100">
        <td colspan="12" class="bg-primary-light py-4 cursor-pointer">
          <div class="flex items-center space-x-2 justify-center text-primary-border">
            <span class="font-semibold">Tambah data</span>
            <BaseIcon name="plus" class="size-4" />
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseIcon from '@/components/BaseIcon.vue'
import BaseInputSelect from '@/components/BaseInputSelect.vue'

const count = ref(0)

const penjualList = [
  { id: 1, name: 'Bagas Adi' },
  { id: 2, name: 'Budi Susanto' },
]
</script>
