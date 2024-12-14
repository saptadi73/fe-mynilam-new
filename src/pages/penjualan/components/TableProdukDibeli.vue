<template>
  <div class="flex items-center justify-between mb-3">
    <h1 class="font-semibold text-primary uppercase mb-3">Daftar Produk Dibeli</h1>
    <!-- only show on create trx -->
    <BaseButton v-if="!props.data.length" @click="saveProduct">Simpan Produk Dibeli</BaseButton>
  </div>
  <div class="overflow-x-auto">
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
        <tr
          v-if="tableData.length"
          v-for="(item, index) in tableData"
          :key="item.id"
          class="border-b-2 border-primary-border"
        >
          <td class="py-4 text-center">{{ item.specific_code || '-' }}</td>
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
          <td class="py-4 text-center">
            <BaseInputSelect
              class="border-none w-40 text-center"
              :name="'pembeli' + index"
              :options="agenKoperasiList.data.value"
              placeholder="Pembeli"
              label-key="name"
              value-key="id"
              :initial-value="item.destination_actor?.[0]"
            />
          </td>
          <td class="py-4 text-center">
            <BaseInputSelect
              class="border-none w-40 text-center"
              :name="'statusPembeli' + index"
              :options="statusOptions"
              placeholder="Status Pembeli"
              :initial-value="item.destination_actor_associate_code?.[1]"
            />
          </td>
          <td class="py-4 text-center">Minyak Nilam</td>
          <td class="py-4 text-center">
            <BaseInputFloat
              :name="'kuantitas' + index"
              class="w-12 mx-auto"
              :initial-value="item.quantity || 0"
              input-class="text-center"
            />
          </td>
          <td class="py-4 text-center">kg</td>
          <td class="py-4 text-center px-4">
            <BaseInputFloat
              :name="'harga' + index"
              class="w-24 mx-auto"
              :initial-value="item.price || 0"
              input-class="text-center"
            />
          </td>
          <td class="py-4 text-center">
            {{ formatCurrency(values[`kuantitas${index}`] * values[`harga${index}`] || item.value || 0) }}
          </td>
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
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { push } from 'notivue'
import { useForm } from 'vee-validate'
import { useAgenKoperasiList, usePetaniList } from '@/api/usePartner'
import { useCreateLine } from '@/api/useTransaction'
import BaseIcon from '@/components/BaseIcon.vue'
import BaseInputSelect from '@/components/BaseInputSelect.vue'
import type { OwnershipLineId, CreateLineParams } from '@/types/transaction'
import BaseInputFloat from '@/components/BaseInputFloat.vue'
import BaseButton from '@/components/BaseButton.vue'

interface Props {
  data: OwnershipLineId[] | []
}
const props = defineProps<Props>()
const emit = defineEmits()
const { values, handleSubmit } = useForm()

const petaniList = usePetaniList()
const agenKoperasiList = useAgenKoperasiList()

const tableData = ref([...props.data])

// mutation
const createLine = useCreateLine()

const statusOptions = [
  { label: 'Koperasi', value: 'koperasi' },
  { label: 'Agen', value: 'agent' },
]

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('de-DE').format(value)
}

const saveProduct = handleSubmit((values) => {
  if (tableData.value.length <= 0) return push.error({ message: 'Tambah produk dibeli terlebih dahulu' })

  const params: CreateLineParams[] = []

  for (let i = 0; i < tableData.value.length; i++) {
    const product: CreateLineParams = {
      source_actor_associate_code: 'farmers',
      source_actor: values['penjual' + i],
      source_location_id: 84,
      kabupaten_id: 4,
      production_harvesting_id: 47,
      production_code: 4,
      destination_actor_associate_code: values['statusPembeli' + i],
      destination_actor: values['pembeli' + i],
      destination_location_id: 84,
      product_id: 2,
      quantity: Number(values['kuantitas' + i]) || 0,
      product_uom_id: 12,
      price: Number(values['harga' + i]) || 0,
      value: Number(values['kuantitas' + i]) * Number(values['harga' + i]) || 0,
      currency_id: 13,
    }
    params.push(product)
  }

  createLine.mutate(params, {
    onSuccess: (res) => {
      const data = res.data.success_ids
      emit('save', data)
    },
    onError: () => {
      push.error({ message: 'Data produk dibeli masih belum lengkap' })
    },
  })
})

const handleTambahData = () => {
  tableData.value.push({
    quantity: 0,
    price: 0,
  })
}
</script>
