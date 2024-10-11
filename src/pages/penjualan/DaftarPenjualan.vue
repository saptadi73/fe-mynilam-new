<template>
  <div class="bg-image-wave2 px-5 md:px-16 pb-4">
    <BaseHeaderTitle title="Daftar Penjualan Minyak Nilam" />
    <div class="bg-[#F6FDFF] p-4 rounded-3xl border border-[#015438]">
      <div class="flex flex-col lg:flex-row gap-y-2 lg:gap-y-0 lg:gap-x-5 justify-between">
        <div class="flex flex-col lg:flex-row gap-y-2 lg:gap-y-0 lg:gap-x-2">
          <BaseSearchBar placeholder="Cari nama"></BaseSearchBar>
          <BaseButton>Cari</BaseButton>
          <BaseInputSelect name="kabupaten" :options="options" placeholder="Pilih Kabupaten"></BaseInputSelect>
          <BaseInputSelect name="jenis" :options="optionsJenis" placeholder="Pilih Jenis"></BaseInputSelect>
        </div>
        <BaseButton variant="success" icon-position="left">
          <BaseIcon name="download" />
          Unduh
        </BaseButton>
      </div>
      <hr class="border border-[#015438] mt-3 -ml-4 -mr-4" />
      <div class="grid grid-cols-12 gap-4 mt-2">
        <BaseCardAdd @click="showModal" card-title="Produk" class="col-span-12 md:col-span-6 lg:col-span-3" />
        <BaseCard
          v-for="(data, index) in daftarNilam"
          :key="index"
          :card-code="data.kode"
          class="col-span-12 md:col-span-6 lg:col-span-3"
        >
          <template #card-content>
            <div class="flex justify-center pt-2">
              <img class="w-full rounded-xl" src="@/assets/images/produk.jpg" alt="Aset Image" />
            </div>

            <div class="grid grid-cols-12 gap-x-1 pt-2">
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Nama Penjual</h1>
                <p class="font-bold text-sm">{{ data.nama_penjual }}</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Jenis</h1>
                <p class="font-bold text-sm">{{ data.jenis }}</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Nama Pembeli</h1>
                <p class="font-bold text-sm">{{ data.nama_pembeli }}</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Jumlah</h1>
                <p class="font-bold text-sm">{{ data.jumlah }} kg</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Kota/Kabupaten</h1>
                <p class="font-bold text-sm">{{ data.kota }}</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Harga/kg</h1>
                <p class="font-bold text-sm">Rp {{ data.harga }}</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Barcode</h1>
                <p @click="showModalQr(index)" class="font-bold text-sm cursor-pointer">Lihat Barcode</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Status</h1>
                <p class="font-bold text-sm">{{ data.status }}</p>
              </div>
            </div>
          </template>
        </BaseCard>
      </div>

      <BaseModal :show-modal="modal" @set-modal="handleModal">
        <template #modal-content>
          <div class="px-4 md:p-8">
            <form @submit.prevent="onSubmit" class="space-y-4">
              <div class="flex justify-center">
                <div class="flex flex-col">
                  <div v-if="productImage" class="relative relative-container flex justify-center items-center">
                    <img class="product-image" :src="productImage" alt="Aset Image" />

                    <svg
                      @click="handleDeleteProductImage"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="icon-delete hidden absolute w-8 h-8 cursor-pointer z-10"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </div>

                  <div v-else @click="triggerUploadProductImage" class="cursor-pointer">
                    <div class="flex justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="text-primary-border w-32 h-32"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>

                    <h1 class="font-cera font-bold text-xl text-primary-border">Tambah Gambar</h1>
                  </div>
                </div>

                <!-- Hidden product image input -->
                <input
                  type="file"
                  name="file"
                  ref="refProductImage"
                  accept=".jpg, .jpeg, .png"
                  @change="handleFileChange"
                  class="hidden"
                />
              </div>

              <hr class="-ml-8 -mr-8 border border-[#015438]" />

              <div class="grid grid-cols-12 gap-x-5">
                <div class="col-span-6 space-y-4">
                  <BaseInputFloat label="Nama Penjual" name="nama_penjual" type="text" />
                  <BaseInputFloat label="Nama Pembeli" name="nama_pembeli" type="text" />
                  <BaseInputSelect :options="options" name="kota" placeholder="Kota/Kabupaten" :floating-label="true" />
                  <BaseInputSelect :options="optionsStatus" name="status" placeholder="Status" :floating-label="true" />
                </div>

                <div class="col-span-6 space-y-4">
                  <BaseInputSelect :options="optionsJenis" name="jenis" placeholder="Jenis" :floating-label="true" />
                  <div class="grid grid-cols-12 gap-x-2">
                    <BaseInputFloat label="Jumlah" name="jumlah" type="text" class="col-span-7" />
                    <BaseInputSelect
                      :options="optionsSatuan"
                      name="satuan"
                      placeholder="Satuan"
                      :floating-label="true"
                      class="col-span-5"
                    />
                  </div>
                  <BaseInputFloat label="Harga/kg" name="harga" type="text" />
                  <BaseInputFloat label="Sub total" name="sub_total" type="text" />
                </div>
              </div>

              <div class="flex justify-center gap-x-4 mx-8">
                <BaseButton type="submit" class="w-full font-bold">Simpan</BaseButton>
                <BaseButton @click="closeModal" variant="success" class="w-full font-bold">Kembali</BaseButton>
              </div>
            </form>
          </div>
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
import BaseInputFloat from '@/components/BaseInputFloat.vue'

import { useQRCode } from '@vueuse/integrations/useQRCode'
import { reactive, ref } from 'vue'
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import type { ProdukNilamType } from '@/types/produk'

let modal = ref<Boolean>(false)
let modalQr = ref<Boolean>(false)
let qrcode = ref<string>('')

const showModal = () => {
  modal.value = true
}
const closeModal = () => {
  modal.value = false
}
const handleModal = (value: boolean) => {
  modal.value = value
}

const showModalQr = (index: number) => {
  const data = daftarNilam[index]
  qrcode = useQRCode(data.kode)
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

const { handleSubmit } = useForm<ProdukNilamType>({
  validationSchema: yup.object({
    nama_penjual: yup.string().required().label('Nama Penjual'),
    jenis: yup.string().required().label('Jenis'),
    nama_pembeli: yup.string().required().label('Nama Pembeli'),
    jumlah: yup.number().required().label('Jumlah'),
    kota: yup.string().required().label('Kota/Kabupaten'),
    harga: yup.string().required().label('Harga/kg'),
    status: yup.string().required().label('Status'),
    sub_total: yup.number().required().label('Sub total'),
  }),
})

const getLabelByValue = (optionsArray: { label: string; value: any }[], value: string | null) => {
  const option = optionsArray.find((opt) => opt.value === value)
  return option ? option.label : ''
}

const onSubmit = handleSubmit((values) => {
  values.jenis = getLabelByValue(optionsJenis.value, values.jenis)
  values.kota = getLabelByValue(options.value, values.kota)
  values.status = getLabelByValue(optionsStatus.value, values.status)
  values.kode = 'AGN3K9PT'

  daftarNilam.push(values)
  closeModal()
})

const daftarNilam = reactive([
  {
    kode: 'AGN3K9PT',
    nama_penjual: 'Agus Prayitno',
    jenis: 'Koperasi',
    nama_pembeli: 'Bhineka Nilam',
    jumlah: 100,
    kota: 'Aceh Selatan',
    harga: '1.250.000',
    status: 'Menunggu',
  },
  {
    kode: 'AGN3K9PX',
    nama_penjual: 'Budi Santoso',
    jenis: 'Koperasi',
    nama_pembeli: 'Nilam Jaya',
    jumlah: 100,
    kota: 'Aceh Selatan',
    harga: '1.250.000',
    status: 'Menunggu',
  },
])

const options = ref([
  {
    label: 'Aceh Selatan',
    value: 1,
  },
  {
    label: 'Aceh Utara',
    value: 2,
  },
  {
    label: 'Aceh Tengah',
    value: 3,
  },
])

const optionsSatuan = ref([{ label: 'Kg', value: 1 }])

const optionsJenis = ref([
  {
    label: 'Agen',
    value: 1,
  },
  {
    label: 'Koperasi',
    value: 2,
  },
])

const optionsStatus = ref([
  {
    label: 'Tersedia',
    value: 1,
  },
  {
    label: 'Menunggu',
    value: 2,
  },
])

const refProductImage = ref<HTMLInputElement | null>(null)
const productImage = ref<string | null>(null)

const triggerUploadProductImage = () => {
  refProductImage.value?.click()
}

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  if (file) {
    // Handle the file upload or processing here
    const fileURL = URL.createObjectURL(file)
    productImage.value = fileURL
  }
}

const handleDeleteProductImage = () => {
  productImage.value = null
}
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
