<template>
  <table v-if="!petaniList.isLoading.value" class="w-full text-sm text-left text-gray-700">
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
      <tr v-for="(item, index) in tableData" :key="item.id" class="border-b-2 border-primary-border">
        <td class="py-4 text-center">{{ item.specific_code }}</td>
        <td class="py-4 text-center">MNL-001</td>
        <td class="py-4 text-center">
          <BaseInputSelect
            class="border-none w-40 text-center"
            :name="'penjual' + index"
            :options="petaniList.data.value"
            placeholder="Penjual"
            label-key="name"
            value-key="id"
            :initial-value="item.source_actor?.[0]"
          />
        </td>
        <td class="py-4 text-center">Petani</td>
        <td class="py-4 text-center">{{ item.destination_actor[1] }}</td>
        <td class="py-4 text-center">{{ item.destination_actor_associate_code === 'agent' ? 'Agen' : 'Koperasi' }}</td>
        <td class="py-4 text-center">Minyak Nilam</td>
        <td class="py-4 text-center">
          <BaseInputFloat
            :name="'kuantitas' + index"
            class="w-12 mx-auto"
            :initial-value="item.quantity"
            input-class="text-center"
          />
        </td>
        <td class="py-4 text-center">{{ item.product_uom_id[1] }}</td>
        <td class="py-4 text-center px-4">
          <BaseInputFloat
            :name="'harga' + index"
            class="w-24 mx-auto"
            :initial-value="item.price"
            input-class="text-center"
          />
        </td>
        <td class="py-4 text-center">{{ new Intl.NumberFormat('de-DE').format(item.value) }}</td>
      </tr>
      <tr class="border-b-2 border-primary-border hover:bg-gray-100" @click="handleTambahData">
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
import { usePetaniList } from '@/api/usePartner'
import BaseIcon from '@/components/BaseIcon.vue'
import BaseInputSelect from '@/components/BaseInputSelect.vue'
import type { OwnershipLineId } from '@/types/transaction'
import BaseInputFloat from '@/components/BaseInputFloat.vue'

interface Props {
  data: OwnershipLineId[]
}
const props = defineProps<Props>()

const petaniList = usePetaniList()

const tableData = ref([...props.data])

const handleTambahData = () => {
  tableData.value.push({
    id: 0,
    specific_code: '-',
    source_actor_associate_code: 'farmers',
    kabupaten_id: [5, 'Aceh Selatan'],
    reference_code: [52],
    production_harvesting_id: [37, 'HASIL-FA046-MN-30000-002'],
    production_code: 'HASIL-FA046-MN-30000-002',
    destination_actor_associate_code: props.data[0].destination_actor_associate_code,
    destination_actor: props.data[0].destination_actor,
    product_id: [2, 'Minyak'],
    quantity: 0,
    product_uom_id: [12, 'kg'],
    price: 0,
    value: 0,
  })
}
</script>
