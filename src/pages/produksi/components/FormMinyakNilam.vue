<template>
  <div class="flex justify-center w-full">
    <form @submit="onSubmit">
      <h1 class="text-primary text-2xl font-bold text-center pb-5">Minyak Nilam</h1>
      <div class="flex justify-center pb-4 border-2 border-primary translate-y-2 border-b-0 rounded-t-lg">
        <div class="flex flex-col">
          <div v-if="productImage" class="relative relative-container flex justify-center items-center">
            <img :src="productImage" class="max-w-2xl" />

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
      <div class="grid md:grid-cols-2 gap-5 md:gap-10 border-2 border-primary rounded-lg py-7 px-10 max-w-3xl">
        <BaseInputSelect
          name="employee_id"
          :options="lovPetani.data.value"
          placeholder="Nama Petani"
          :floating-label="true"
          value-key="id"
          label-key="name"
        />
        <BaseInputSelect
          name="asset_id"
          :options="lovLahan.data.value"
          placeholder="Daftar Lahan"
          :floating-label="true"
          value-key="id"
          label-key="name"
        />
        <BaseInputFloat type="text" label="Koordinat Lokasi" name="coordinates" :readonly="true" />
        <BaseInputFloat type="text" label="Alamat Produksi" name="address" :readonly="true" />
        <BaseInputSelect
          name="produce_product"
          :options="produkOptions"
          placeholder="Produk Tanam"
          :floating-label="true"
        />
        <BaseInputSelect
          name="weather_conditions"
          :options="weatherOptions"
          placeholder="Kondisi Cuaca"
          :floating-label="true"
        />
        <BaseInputFloat type="text" label="Kuantitas Tanam" name="planting_produce_quantity" />
        <BaseInputSelect name="uom" :options="satuanOptions" placeholder="Satuan" :floating-label="true" />
        <BaseInputFloat type="text" label="Kuantitas Akhir" name="final_quantity" />
        <BaseInputSelect name="uom" :options="satuanOptions" placeholder="Satuan" :floating-label="true" />
        <BaseInputDate label="Mulai Produksi" name="date_started" />
        <BaseInputDate label="Akhir Produksi" name="date_harvested" />
        <BaseInputSelect
          name="extraction_method"
          :options="metodeEkstraksiOptions"
          placeholder="Metode Ekstraksi"
          :floating-label="true"
        />
        <BaseInputFloat type="number" label="Persentase Akhir" name="percentage_final_quantity" />
        <!-- <div class="invisible my-2.5">Hidden</div> -->
      </div>
      <BaseButton class="w-full mt-5 py-2 font-semibold !rounded-full">Simpan Data</BaseButton>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useCreateHarvesting } from '@/api/useProduction'
import BaseButton from '@/components/BaseButton.vue'
import BaseInputDate from '@/components/BaseInputDate.vue'
import BaseInputFloat from '@/components/BaseInputFloat.vue'
import BaseInputSelect from '@/components/BaseInputSelect.vue'
import { useForm } from 'vee-validate'
import { ref, watch } from 'vue'
import { string, object, number } from 'yup'
import { push } from 'notivue'
import { metodeEkstraksiOptions, satuanOptions, weatherOptions } from '@/constants/options'
import { useLovLahan } from '@/api/useLov'
import type { CreateHarvestingParams } from '@/types/production'
import type { UseQueryReturnType } from '@tanstack/vue-query'
import type { Petani } from '@/types/partner'
import { formatDateRequest } from '@/utils/useFormatDate'

interface Props {
  lovPetani: UseQueryReturnType<Petani[], Error>
  kabupatenId: number
}

defineProps<Props>()

const createHarvesting = useCreateHarvesting()
// query
const params = ref({})
const lovLahan = useLovLahan(params)

const { handleSubmit, values, setValues, resetForm } = useForm<CreateHarvestingParams>({
  validationSchema: object({
    employee_id: number().required().label('Nama'),
    asset_id: number().required().label('Lahan'),
    coordinates: string().required().label('Koordinat'),
    address: string().required().label('Alamat'),
    produce_product: number().required().label('Produk'),
    weather_conditions: string().required().label('Cuaca'),
    planting_produce_quantity: number().required().label('Kuantitas Tanam'),
    uom: string().required().label('Satuan'),
    final_quantity: number().required().label('Kuantitas Akhir'),
    date_started: string().required().label('Mulai Produksi'),
    date_harvested: string().required().label('Akhir Produksi'),
    extraction_method: string().required().label('Metode Ekstraksi'),
    percentage_final_quantity: number().required().label('Persentase'),
  }),
  initialValues: {},
})

const refProductImage = ref<HTMLInputElement | null>(null)
const productImage = ref<string | null>(null)

const handleDeleteProductImage = () => {
  productImage.value = null
}

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

const produkOptions = [
  { label: 'Tanaman Nilam', value: 1 },
  { label: 'Minyak Nilam', value: 2 },
]

watch(
  () => values.employee_id,
  (val) => {
    params.value = { id_petani: val }
  }
)

watch(
  () => values.asset_id,
  (val) => {
    if (lovLahan.data.value) {
      const lahan = lovLahan.data.value.find((item) => item.id === val)
      setValues({ coordinates: lahan?.coordinates, address: lahan?.address })
    }
  }
)

const onSubmit = handleSubmit((values) => {
  // format date request
  values.date_started = formatDateRequest(values.date_started)
  values.date_harvested = formatDateRequest(values.date_harvested)
  // mutation
  createHarvesting.mutate(values, {
    onSuccess: () => {
      push.success('Berhasil membuat daftar produksi baru')
      resetForm()
    },
    onError: () => {
      push.error('Gagal membuat daftar produksi')
    },
  })
})
</script>
