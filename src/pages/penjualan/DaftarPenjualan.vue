<template>
  <div class="bg-image-wave2 px-5 md:px-16 pb-4">
    <BaseHeaderTitle title="Daftar Penjualan Minyak Nilam" />
    <div class="bg-[#F6FDFF] p-4 rounded-3xl border-2 border-primary-border">
      <div class="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-5 items-center justify-between">
        <div class="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4">
          <div class="flex space-x-2">
            <BaseSearchBar placeholder="Cari penjualan" class="w-full lg:w-52" v-model="searchValue" />
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
          <BaseButton variant="success" icon-position="left" @click="scanQrModal = true">
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
      <div v-if="listOfProduct.isLoading.value" class="grid place-items-center h-96">Loading...</div>
      <div v-else class="grid grid-cols-12 gap-4 mt-2">
        <BaseCardAdd @click="showModal" card-title="Penjualan" class="col-span-12 md:col-span-6 lg:col-span-3" />
        <BaseCard
          v-for="(data, index) in currentItems"
          :key="index"
          class="col-span-12 md:col-span-6 lg:col-span-3"
          @click="handleCardClick(data.id)"
        >
          <template #card-content>
            <div class="flex justify-center pt-2">
              <div
                class="w-full rounded-xl h-48 bg-cover bg-center"
                :style="{
                  backgroundImage: `url('${data.product_image_url || 'https://erp.mynilam.com/product/image/2'}')`,
                }"
              ></div>
            </div>

            <div class="grid grid-cols-12 gap-x-1 pt-2">
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Nama Pembeli</h1>
                <p class="font-bold text-sm">{{ data.destination_actor[1] }}</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Jenis</h1>
                <p class="font-bold text-sm capitalize">{{ data.destination_actor_associate_code }}</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Kota/Kabupaten</h1>
                <p class="font-bold text-sm">{{ data.kabupaten_id[1] }}</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Jumlah</h1>
                <p class="font-bold text-sm">{{ data.total_requested_quantity }} kg</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Status</h1>
                <p class="font-bold text-sm capitalize">{{ data.state }}</p>
              </div>
              <div @click.stop="showModalQr(data.qr_code_image)" class="col-span-6 pt-2">
                <h1 class="text-sm">Barcode</h1>
                <p class="font-bold text-sm cursor-pointer">Lihat Barcode</p>
              </div>
            </div>
          </template>
        </BaseCard>
      </div>

      <div class="mt-10 mb-5">
        <BasePaginationButton
          v-if="!listOfProduct.isLoading.value"
          :data="listOfProduct.data.value || []"
          :pageSize="12"
          @change="(data: any) => currentItems = data"
        />
      </div>

      <BaseModal :show-modal="modal" @set-modal="handleModal" class="!max-w-[80rem]">
        <template #modal-content>
          <div class="px-4 py-16">
            <FormTambahDaftarProduk
              :id="selectedProductId"
              @close-modal="closeModal"
              @add-product="modalProduk = true"
            />
          </div>
        </template>
      </BaseModal>

      <BaseModal :show-modal="modalQr" @set-modal="handleModalQr">
        <template #modal-content>
          <div class="flex flex-col justify-center">
            <p class="text-center text-primary text-lg font-semibold pt-8">Silahkan Scan QR Code ini</p>
            <div class="px-32 py-4">
              <img class="w-full" :src="'data:image/jpg;base64, ' + qrCodeImage" alt="QR Code" />
            </div>
            <div class="flex justify-center pb-4">
              <BaseButton @click="downloadQrCodeImage" class="w-52 font-semibold">Download</BaseButton>
            </div>
          </div>
        </template>
      </BaseModal>

      <BaseModal :show-modal="scanQrModal" @set-modal="scanQrModal = false" class="!max-w-2xl">
        <template #modal-content>
          <div class="p-4">
            <BaseQrScan />
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
import { ref } from 'vue'
import { useKabupaten } from '@/api/useLocalization'
import { useListOfProduct } from '@/api/useTransaction'
import { useForm } from 'vee-validate'
import type { DaftarPenjualanParams, ListOfProduct, ListOfProductParams } from '@/types/transaction'
import BaseQrScan from '@/components/BaseQrScan.vue'
import BasePaginationButton from '@/components/BasePaginationButton.vue'

interface Form {
  kabupaten: DaftarPenjualanParams['kabupaten_id']
  jenis: DaftarPenjualanParams['associate_type']
}

const { values } = useForm<Form>()
const searchValue = ref('')
const selectedProductId = ref<number>()

const modal = ref(false)
const modalProduk = ref(false)
const modalQr = ref(false)
const qrCodeImage = ref('')
// scan qr code
const scanQrModal = ref(false)

const kabupaten = useKabupaten()

// auto refetch on params change
const params = ref<ListOfProductParams>({})
const listOfProduct = useListOfProduct(params)

const currentItems = ref<ListOfProduct[]>([])

const setDaftarPenjualanParams = () => {
  params.value = {
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
  if (!value) selectedProductId.value = undefined
  modal.value = value
}

const showModalQr = (image: string) => {
  qrCodeImage.value = image
  modalQr.value = true
}

const handleModalQr = (value: boolean) => {
  modalQr.value = value
}

const downloadQrCodeImage = () => {
  if (!qrCodeImage.value) return

  // Mengonversi Base64 ke Blob
  const base64Data = qrCodeImage.value

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

const handleCardClick = (id: number) => {
  selectedProductId.value = id
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
