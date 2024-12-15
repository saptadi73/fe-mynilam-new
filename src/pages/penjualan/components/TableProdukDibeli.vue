<template>
  <div class="flex items-center justify-between mb-3">
    <h1 class="font-semibold text-primary uppercase mb-3">Daftar Produk Dibeli</h1>
    <BaseButton v-if="showSaveBtn" @click="saveProduct">Simpan Produk Dibeli</BaseButton>
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
        <tr v-if="tableData.length" v-for="item in tableData" :key="item.id" class="border-b-2 border-primary-border">
          <td class="py-4 text-center">{{ item.specific_code || '-' }}</td>
          <td class="py-4 text-center">MNL-001</td>
          <td class="py-4 text-center">
            <BaseInputSelect
              class="border-none w-40 text-center"
              :name="'penjual' + item.id"
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
              :name="'pembeli' + item.id"
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
              :name="'statusPembeli' + item.id"
              :options="statusOptions"
              placeholder="Status Pembeli"
              :initial-value="item.destination_actor_associate_code"
            />
          </td>
          <td class="py-4 text-center">Minyak Nilam</td>
          <td class="py-4 text-center">
            <BaseInputFloat
              :name="'kuantitas' + item.id"
              class="w-12 mx-auto"
              :initial-value="item.quantity || 0"
              input-class="text-center"
            />
          </td>
          <td class="py-4 text-center">kg</td>
          <td class="py-4 text-center px-4">
            <BaseInputFloat
              :name="'harga' + item.id"
              class="w-24 mx-auto"
              :initial-value="item.price || 0"
              input-class="text-center"
            />
          </td>
          <td class="py-4 text-center">
            {{ formatCurrency(values[`kuantitas${item.id}`] * values[`harga${item.id}`] || item.value || 0) }}
          </td>
          <td class="py-6 flex items-center space-x-2 justify-center">
            <BaseIcon
              v-if="isEdit && item.qr_code_image"
              name="qr-code"
              class="size-6 text-primary cursor-pointer"
              @click="handleShowQr(item)"
            />
            <BaseIcon
              v-if="!isEdit && item.id"
              name="trash"
              class="size-6 text-red-500 cursor-pointer"
              @click="handleRemoveLine(item.id)"
            />
          </td>
        </tr>
        <tr
          v-if="!isEdit"
          class="border-b-2 border-primary-border hover:bg-gray-100"
          @click="handleTambahData(lineId++)"
        >
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
  <!-- show qr modal -->
  <BaseModal v-if="selectedLineData" :show-modal="modal" @set-modal="modal = false" class="!max-w-2xl">
    <template #modal-content>
      <div class="flex flex-col justify-center px-4 py-8">
        <h1 class="font-semibold text-center">{{ selectedLineData.specific_code }}</h1>
        <h1 class="font-semibold text-center">Penjual: {{ selectedLineData.source_actor?.[1] }}</h1>
        <div class="px-4">
          <img
            class="w-full max-w-sm mx-auto"
            :src="'data:image/jpg;base64, ' + selectedLineData.qr_code_image"
            alt="QR Code"
          />
        </div>
        <div class="flex justify-center pb-4">
          <BaseButton
            v-if="selectedLineData.qr_code_image"
            type="button"
            @click="downloadImageBase64(selectedLineData.qr_code_image, `${selectedLineData.specific_code}-QR_CODE`)"
            class="w-52 font-semibold"
          >
            Download
          </BaseButton>
        </div>
      </div>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { push } from 'notivue'
import { useForm } from 'vee-validate'
import { useAgenKoperasiList, usePetaniList } from '@/api/usePartner'
import { useCreateLine } from '@/api/useTransaction'
import BaseIcon from '@/components/BaseIcon.vue'
import BaseInputSelect from '@/components/BaseInputSelect.vue'
import BaseInputFloat from '@/components/BaseInputFloat.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseModal from '@/components/BaseModal.vue'
import type { OwnershipLineId, CreateLineParams } from '@/types/transaction'
import { downloadImageBase64 } from '@/utils/useCommonUtils'

interface Props {
  data: OwnershipLineId[] | []
  isEdit: boolean
}
const props = defineProps<Props>()
const emit = defineEmits(['save'])
const showSaveBtn = ref(false)
const modal = ref(false)
const selectedLineData = ref<OwnershipLineId>()
const lineId = ref(1)
const { values, handleSubmit } = useForm()

const petaniList = usePetaniList()
const agenKoperasiList = useAgenKoperasiList()

const tableData = ref<OwnershipLineId[]>([...props.data])

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

  tableData.value.forEach((item) => {
    const product: CreateLineParams = {
      source_actor_associate_code: 'farmers',
      source_actor: values['penjual' + item.id],
      source_location_id: 84,
      kabupaten_id: 4,
      production_harvesting_id: 47,
      production_code: 4,
      destination_actor_associate_code: values['statusPembeli' + item.id],
      destination_actor: values['pembeli' + item.id],
      destination_location_id: 84,
      product_id: 2,
      quantity: Number(values['kuantitas' + item.id]) || 0,
      product_uom_id: 12,
      price: Number(values['harga' + item.id]) || 0,
      value: Number(values['kuantitas' + item.id]) * Number(values['harga' + item.id]) || 0,
      currency_id: 13,
    }
    params.push(product)
  })

  createLine.mutate(params, {
    onSuccess: (res) => {
      const data = res.data.success_details
      emit('save', data)
      showSaveBtn.value = false
      push.success('Berhasil menyimpan daftar produk dibeli')
    },
    onError: () => {
      push.error({ message: 'Data produk dibeli masih belum lengkap' })
    },
  })
})

const handleTambahData = (id: number) => {
  tableData.value.push({
    id: id, // use as line identifier
    quantity: 0,
    price: 0,
  })
  showSaveBtn.value = true
}

const handleShowQr = (data: OwnershipLineId) => {
  selectedLineData.value = data
  modal.value = true
}

const handleRemoveLine = (index: number) => {
  tableData.value = tableData.value.filter((item) => item.id !== index)
}
</script>
