<template>
  <div class="bg-image-wave2 px-5 md:px-16 pb-4">
    <BaseHeaderTitle title="Daftar Penjualan Minyak Nilam" />
    <div class="bg-[#F6FDFF] p-4 rounded-3xl border-2 border-primary-border">
      <div class="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-5 items-center justify-between">
        <div class="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4">
          <div class="flex space-x-2">
            <BaseSearchBar placeholder="Cari kode produk" class="w-full lg:w-52" v-model="searchValue" />
            <BaseButton>Cari</BaseButton>
          </div>
          <BaseInputSelect
            class="w-full lg:w-52"
            name="kabupaten"
            label-key="name"
            value-key="id"
            :options="kabupaten.data.value"
            placeholder="Pilih Kabupaten"
            @change="setDaftarPenjualanParams"
          />
          <BaseInputSelect
            class="w-full lg:w-48"
            name="jenis"
            :options="optionsJenis"
            placeholder="Pilih Jenis"
            @change="setDaftarPenjualanParams"
          />
          <BaseButton variant="success" icon-position="left">
            <BaseIcon name="scan" />
            Scan
          </BaseButton>
        </div>
        <!-- <div class="flex items-center space-x-2">
          <div>Tampilkan</div>
          <select class="border-primary-border bg-primary-light rounded-lg p-1 pl-2.5">
            <option value="10">10</option>
          </select>
          <div>dari {{ daftarPenjualan.data.value?.length }}</div>
        </div> -->
      </div>
      <hr class="border border-primary-border mt-3 -ml-4 -mr-4" />
      <div v-if="daftarPenjualan.isLoading.value" class="grid place-items-center h-96">Loading...</div>
      <div v-else class="grid grid-cols-12 gap-4 mt-2">
        <BaseCardAdd @click="showModal" card-title="Produk" class="col-span-12 md:col-span-6 lg:col-span-3" />
        <BaseCard
          v-for="(data, index) in daftarPenjualan.data.value"
          :key="index"
          :card-code="data.name"
          class="col-span-12 md:col-span-6 lg:col-span-3"
          @click="handleCardClick(data)"
        >
          <template #card-content>
            <div class="flex justify-center pt-2">
              <img class="w-full rounded-xl" src="@/assets/images/penjualan/produk.jpg" alt="Aset Image" />
            </div>

            <div class="grid grid-cols-12 gap-x-1 pt-2">
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Nama Pembeli</h1>
                <p class="font-bold text-sm">{{ data.destination_actor[1] }}</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Jenis</h1>
                <p class="font-bold text-sm">Belum</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Kota/Kabupaten</h1>
                <p class="font-bold text-sm">{{ data.kabupaten_id[1] }}</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Jumlah</h1>
                <p class="font-bold text-sm">{{ data.quantity }} kg</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Status</h1>
                <p class="font-bold text-sm">{{ data.state }}</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Barcode</h1>
                <p @click="showModalQr(data.name)" class="font-bold text-sm cursor-pointer">Lihat Barcode</p>
              </div>
            </div>
          </template>
        </BaseCard>
      </div>

      <BaseModal :show-modal="modal" @set-modal="handleModal" class="max-w-2xl">
        <template #modal-content>
          <FormTambahDaftarProduk :data="selectedData" @close-modal="closeModal" />
        </template>
      </BaseModal>

      <BaseModal :show-modal="modalQr" @set-modal="handleModalQr">
        <template #modal-content>
          <div class="flex flex-col justify-center">
            <p class="text-center text-primary text-lg font-semibold pt-8">Silahkan Scan QR Code ini</p>
            <div class="px-32 py-4">
              <img class="w-full" :src="qrcode" alt="QR Code" />
            </div>
            <div class="flex justify-center pb-4">
              <BaseButton @click="downloadQrCodeImage" class="w-52 font-semibold">Download</BaseButton>
            </div>
          </div>
        </template>
      </BaseModal>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue'
import BaseCard from '@/components/BaseCard.vue'
import BaseSearchBar from '@/components/BaseSearchBar.vue'
import BaseInputSelect from '@/components/BaseInputSelect.vue'
import BaseHeaderTitle from '@/components/BaseHeaderTitle.vue'
import BaseIcon from '@/components/BaseIcon.vue'
import BaseCardAdd from '@/components/BaseCardAdd.vue'
import BaseModal from '@/components/BaseModal.vue'
import FormTambahDaftarProduk from './components/FormTambahDaftarProduk.vue'

import { useQRCode } from '@vueuse/integrations/useQRCode'
import { ref } from 'vue'
import { useKabupaten } from '@/api/useLocalization'
import { useDaftarPenjualan } from '@/api/useTransaction'
import { useForm } from 'vee-validate'
import type { DaftarPenjualan, DaftarPenjualanParams } from '@/types/transaction'

interface Form {
  kabupaten: DaftarPenjualanParams['kabupaten_id']
  jenis: DaftarPenjualanParams['associate_type']
}

const { values } = useForm<Form>()
const searchValue = ref('')
const selectedData = ref<DaftarPenjualan>()

let modal = ref<Boolean>(false)
let modalQr = ref<Boolean>(false)
let qrcode = ref<string>('')

const kabupaten = useKabupaten()

// auto refetch on daftarPenjualanParams change
const daftarPenjualanParams = ref<DaftarPenjualanParams>({})
const daftarPenjualan = useDaftarPenjualan(daftarPenjualanParams)

const setDaftarPenjualanParams = () => {
  daftarPenjualanParams.value = {
    kabupaten_id: values.kabupaten,
    associate_type: values.jenis,
  }
}

const showModal = () => {
  modal.value = true
}
const closeModal = () => {
  modal.value = false
}
const handleModal = (value: boolean) => {
  if (!value) selectedData.value = undefined
  modal.value = value
}

const showModalQr = (code: string) => {
  qrcode = useQRCode(code)
  modalQr.value = true
}

const handleModalQr = (value: boolean) => {
  modalQr.value = value
}

const downloadQrCodeImage = () => {
  if (!qrcode.value) return

  // Mengonversi Base64 ke Blob
  const base64Data = qrcode.value.split(',')[1] // Ambil bagian Base64

  const byteCharacters = atob(base64Data)
  const byteNumbers = new Array(byteCharacters.length)
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i)
  }
  const byteArray = new Uint8Array(byteNumbers)
  const blob = new Blob([byteArray], { type: 'image/png' })

  // Membuat URL untuk Blob
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download = 'qrcode.png'

  // Mengklik link untuk memicu unduhan
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(link.href) // Bersihkan URL setelah digunakan
}

const handleCardClick = (data: DaftarPenjualan) => {
  selectedData.value = data
  showModal()
}

const optionsJenis = ref([
  { label: 'Agen', value: 'agent' },
  { label: 'Koperasi', value: 'koperasi' },
])
</script>

<style scoped>
.product-image {
  transition: opacity 0.3s ease;
}

.relative-container:hover .product-image {
  opacity: 0.6;
}

.relative-container:hover .icon-delete {
  color: white;
  display: block;
}
</style>
