<template>
  <div class="p-4 md:p-8 w-full">
    <form @submit.prevent="onSubmit" v-if="!agenKoperasiList.isLoading.value && !productDetail.isLoading.value">
      <div class="flex justify-center pb-4">
        <div class="flex flex-col">
          <div v-if="productImage" class="relative relative-container flex justify-center items-center">
            <img class="product-image" :src="productImage" alt="Product Image" />

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

      <hr class="-mx-8 border border-primary-border" />

      <section class="grid lg:grid-cols-2 gap-5 my-5">
        <BaseInputSelect
          name="namaPembeli"
          label-key="name"
          value-key="id"
          :options="agenKoperasiList.data.value"
          placeholder="Pilih Pembeli"
          :floating-label="true"
        />
        <BaseInputSelect name="jenis" placeholder="Jenis" :floating-label="true" :options="optionsJenis" />
        <BaseInputSelect
          name="kota"
          label-key="name"
          value-key="id"
          :options="kabupaten.data.value"
          placeholder="Kota/Kabupaten"
          :floating-label="true"
        />
        <div class="flex items-center space-x-3">
          <BaseInputFloat label="Total" name="total" type="text" class="col-span-7" />
          <BaseInputSelect
            :options="optionsSatuan"
            name="satuan"
            placeholder="Satuan"
            :floating-label="true"
            class="col-span-5"
          />
        </div>
        <BaseInputSelect :options="optionsStatus" name="status" placeholder="Status" :floating-label="true" />
        <BaseInputFloat label="Total Harga" name="harga" type="text" />
        <BaseInputDate label="Tanggal Pemesanan Produk" name="tanggalPemesanan" />
        <BaseInputDate label="Tanggal Terima Produk" name="tanggalTerima" />
      </section>

      <div v-if="productDetail.data.value" class="my-10">
        <h1 class="font-semibold text-primary uppercase mb-3">Daftar Produk Dibeli</h1>
        <div class="overflow-x-auto">
          <TableProdukDibeli :data="productDetail.data.value[0].ownership_line_ids" />
        </div>
      </div>

      <section class="flex justify-center space-x-4 mx-8">
        <BaseButton type="submit" class="w-full font-bold">Tambah</BaseButton>
        <BaseButton @click="emit('close-modal')" variant="success" class="w-full font-bold">Kembali</BaseButton>
      </section>
    </form>
    <div v-else class="text-center">Loading...</div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useForm } from 'vee-validate'
import { number, object, string } from 'yup'
import { useKabupaten } from '@/api/useLocalization'
import BaseButton from '@/components/BaseButton.vue'
import BaseInputSelect from '@/components/BaseInputSelect.vue'
import BaseInputFloat from '@/components/BaseInputFloat.vue'
import type { ProdukNilamType } from '@/types/produk'
import BaseInputDate from '@/components/BaseInputDate.vue'
import TableProdukDibeli from './TableProdukDibeli.vue'
import { useAgenKoperasiList } from '@/api/usePartner'
import { useProductDetail } from '@/api/useTransaction'
import { formatDateInput } from '@/utils/useFormatDate'

interface Props {
  id?: number
}

const emit = defineEmits()
const props = defineProps<Props>()

const params = ref({ id_transaksi: props.id })
const productDetail = useProductDetail(params)

const kabupaten = useKabupaten()
const agenKoperasiList = useAgenKoperasiList()

const { handleSubmit, setValues, resetForm } = useForm<ProdukNilamType>({
  validationSchema: object({
    namaPembeli: number().required().label('Nama Pembeli'),
    jenis: string().required().label('Jenis'),
    total: number().required().label('Total'),
    kota: number().required().label('Kota/Kabupaten'),
    harga: number().required().label('Harga/kg'),
    status: string().required().label('Status'),
  }),
})

const onSubmit = handleSubmit((_values) => {
  resetForm()
  emit('close-modal')
})

const optionsSatuan = [{ label: 'Kg', value: 'kg' }]

const optionsStatus = [
  { label: 'Tersedia', value: 1 },
  { label: 'Menunggu', value: 2 },
]

const optionsJenis = [
  { label: 'Agen', value: 'agent' },
  { label: 'Koperasi', value: 'koperasi' },
  { label: 'Ugreen', value: 'ugreen' },
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

watch(productDetail.data, (data) => {
  // prettier-ignore
  if (data) {
    const { destination_actor, destination_actor_associate_code, state, date_order, date_receive, total_price, kabupaten_id, total_requested_quantity, product_uom_id, } = data[0]
    setValues({
      namaPembeli: destination_actor[0],
      jenis: destination_actor_associate_code,
      kota: kabupaten_id[0],
      total: total_requested_quantity,
      satuan: product_uom_id[1],
      status: state,
      harga: total_price,
      tanggalPemesanan: formatDateInput(date_order),
      tanggalTerima: formatDateInput(date_receive)
    })
  }
})
</script>
