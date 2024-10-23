<template>
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
          <BaseInputSelect
            name="kota"
            label-key="name"
            value-key="id"
            :options="kabupaten.data.value"
            placeholder="Kota/Kabupaten"
            :floating-label="true"
          />
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
        <BaseButton @click="emit('close-modal')" variant="success" class="w-full font-bold">Kembali</BaseButton>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useForm } from 'vee-validate'
import { number, object, string } from 'yup'
import { useKabupaten } from '@/api/useLocalization'
import BaseButton from '@/components/BaseButton.vue'
import BaseInputSelect from '@/components/BaseInputSelect.vue'
import BaseInputFloat from '@/components/BaseInputFloat.vue'
import type { ProdukNilamType } from '@/types/produk'

const emit = defineEmits()

const kabupaten = useKabupaten()

const { handleSubmit } = useForm<ProdukNilamType>({
  validationSchema: object({
    nama_penjual: string().required().label('Nama Penjual'),
    jenis: number().required().label('Jenis'),
    nama_pembeli: string().required().label('Nama Pembeli'),
    jumlah: number().required().label('Jumlah'),
    kota: string().required().label('Kota/Kabupaten'),
    harga: string().required().label('Harga/kg'),
    status: string().required().label('Status'),
    sub_total: number().required().label('Sub total'),
  }),
})

const onSubmit = handleSubmit((_values) => {
  emit('close-modal')
})

const optionsSatuan = [{ label: 'Kg', value: 1 }]

const optionsStatus = [
  { label: 'Tersedia', value: 1 },
  { label: 'Menunggu', value: 2 },
]

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
