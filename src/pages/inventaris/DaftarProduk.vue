<template>
  <div class="bg-image-wave2 px-16">
    <BaseHeaderTitle title="Daftar Produk Minyak Nilam" />
    <div class="bg-[#F6FDFF] p-4 rounded-3xl border border-[#015438]">
      <div class="flex flex-row gap-x-5 justify-start">
        <div class="flex flex-row gap-x-2">
          <BaseSearchBar placeholder="Cari nama"></BaseSearchBar>
          <BaseButton>Cari</BaseButton>
        </div>
        <BaseInputSelect name="kabupaten" :options="options" placeholder="Pilih kabupaten"></BaseInputSelect>
        <BaseButton @click="showQrScanner" variant="success" icon-position="right">
          Scan
          <BaseIcon name="scan" />
        </BaseButton>

        <BaseModal :show-modal="qrModal" @set-modal="closeModal">
          <template #modal-content>
            <div class="bg-white rounded-xl p-8">
              <qrcode-stream
                v-if="!destroyed"
                :paused="paused"
                @detect="onDetect"
                @camera-on="onCameraOn"
                @error="onError"
              >
                <div v-if="loading" class="text-center py-20">
                  <svg
                    aria-hidden="true"
                    class="inline w-8 h-8 text-gray-200 animate-spin fill-primary"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>

                  <p class="mt-1">Sedang memuat kamera...</p>
                </div>
              </qrcode-stream>
            </div>
          </template>
        </BaseModal>
      </div>
      <hr class="border border-[#015438] mt-3 -ml-4 -mr-4" />
      <div class="grid grid-cols-12 gap-4 mt-4">
        <BaseCardAdd card-title="Produksi" class="col-span-3" />
        <BaseCard
          v-for="(card, cardIndex) in filteredProducts"
          :key="cardIndex"
          :card-code="card.kode"
          class="col-span-3"
        >
          <template #card-content>
            <div class="flex justify-center pt-2">
              <img class="rounded-xl" src="@/assets/images/nilam.jpeg" alt="Produksi Nilam Image" />
            </div>

            <div class="grid grid-cols-12 gap-x-1 pt-2">
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Nama Produk</h1>
                <p class="font-bold text-sm">{{ card.nama_produk }}</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Nama Petani</h1>
                <p class="font-bold text-sm">{{ card.nama_petani }}</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Nama Pembeli</h1>
                <p class="font-bold text-sm">{{ card.nama_pembeli }}</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Jumlah</h1>
                <p class="font-bold text-sm">{{ card.jumlah }} kg</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Harga</h1>
                <p class="font-bold text-sm">Rp {{ card.harga }}</p>
              </div>
            </div>
          </template>
        </BaseCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseHeaderTitle from '@/components/BaseHeaderTitle.vue'
import BaseSearchBar from '@/components/BaseSearchBar.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseInputSelect from '@/components/BaseInputSelect.vue'
import BaseCardAdd from '@/components/BaseCardAdd.vue'
import BaseCard from '@/components/BaseCard.vue'
import BaseIcon from '@/components/BaseIcon.vue'
import BaseModal from '@/components/BaseModal.vue'

import { nextTick, onMounted, reactive, ref } from 'vue'
import { QrcodeStream } from 'vue-qrcode-reader'

interface Product {
  id: number
  kode: string
  nama_produk: string
  nama_petani: string
  nama_pembeli: string
  jumlah: string
  harga: string
}

const qrModal = ref<boolean>(false)
const paused = ref<boolean>(false)
const destroyed = ref<boolean>(false)
const loading = ref<boolean>(false)
const filteredProducts = ref<Product[]>([])

const products = reactive<Product[]>([
  {
    id: 1,
    kode: 'PRD1X7QF',
    nama_produk: 'Minyak Nilam',
    nama_petani: 'Agus Prayitno',
    nama_pembeli: 'Siti Nurhaliza',
    jumlah: '3',
    harga: '3000000',
  },
  {
    id: 2,
    kode: 'PRD2X8QF',
    nama_produk: 'Minyak Nilam',
    nama_petani: 'Budi Santoso',
    nama_pembeli: 'Dewi Sartika',
    jumlah: '5',
    harga: '1500000',
  },
  {
    id: 3,
    kode: 'PRD3X9QF',
    nama_produk: 'Minyak Nilam',
    nama_petani: 'Citra Ananda',
    nama_pembeli: 'Joko Widodo',
    jumlah: '2',
    harga: '2500000',
  },
  {
    id: 4,
    kode: 'PRD4X0QF',
    nama_produk: 'Minyak Nilam',
    nama_petani: 'Rudi Hartono',
    nama_pembeli: 'Rina Susanti',
    jumlah: '4',
    harga: '4000000',
  },
  {
    id: 5,
    kode: 'PRD5X1QF',
    nama_produk: 'Minyak Nilam',
    nama_petani: 'Siti Aminah',
    nama_pembeli: 'Andi Setiawan',
    jumlah: '10',
    harga: '1200000',
  },
  {
    id: 6,
    kode: 'PRD6X2QF',
    nama_produk: 'Minyak Nilam',
    nama_petani: 'Yanto Prasetyo',
    nama_pembeli: 'Eka Putri',
    jumlah: '7',
    harga: '1800000',
  },
  {
    id: 7,
    kode: 'PRD7X3QF',
    nama_produk: 'Minyak Nilam',
    nama_petani: 'Lina Nuraini',
    nama_pembeli: 'Budi Santoso',
    jumlah: '20',
    harga: '5000000',
  },
  {
    id: 8,
    kode: 'PRD8X4QF',
    nama_produk: 'Minyak Nilam',
    nama_petani: 'Dewi Lestari',
    nama_pembeli: 'Fajar Ramadhan',
    jumlah: '8',
    harga: '600000',
  },
  {
    id: 9,
    kode: 'PRD9X5QF',
    nama_produk: 'Minyak Nilam',
    nama_petani: 'Sukma Wijaya',
    nama_pembeli: 'Nina Salim',
    jumlah: '5',
    harga: '7500000',
  },
  {
    id: 10,
    kode: 'PRD0X6QF',
    nama_produk: 'Minyak Nilam',
    nama_petani: 'Rudi Gunawan',
    nama_pembeli: 'Siti Marfuah',
    jumlah: '12',
    harga: '3000000',
  },
])

const filterProducts = (code: string) => {
  filteredProducts.value = products.filter((product) => product.kode === code)
}

onMounted(() => {
  filteredProducts.value = [...products]
})

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

const onCameraOn = () => {
  loading.value = false
}

const showQrScanner = async () => {
  qrModal.value = true
  destroyed.value = true
  await nextTick()
  destroyed.value = false
  loading.value = true
}

const onError = (error: any) => {
  console.log(error)
}

const onDetect = async (detectedCodes: any[]) => {
  const output = detectedCodes.map((code) => code.rawValue)

  const jsonString = output[0]
  const jsonObject = JSON.parse(jsonString)

  filterProducts(jsonObject.kode)

  paused.value = true
  await timeout(500)
  paused.value = false

  qrModal.value = false
}

const closeModal = (value: boolean) => {
  qrModal.value = value
}

const timeout = (ms: number | undefined) => {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms)
  })
}
</script>
