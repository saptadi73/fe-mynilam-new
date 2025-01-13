<template>
  <div class="flex justify-center w-full">
    <form @submit="onSubmit">
      <h1 class="text-primary text-2xl font-bold text-center pb-5">Minyak Nilam</h1>
      <div class="flex justify-center pb-4 border-2 border-primary translate-y-2 border-b-0 rounded-t-lg">
        <div class="flex flex-col">
          <div v-if="productImage" class="relative relative-container flex justify-center items-center">
            <img :src="productImage" />

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
      <div class="grid md:grid-cols-2 gap-5 md:gap-10 border-2 border-primary rounded-lg py-7 px-10">
        <BaseInputSelect
          name="nama"
          :options="lovPetani.data.value"
          placeholder="Nama Petani"
          :floating-label="true"
          value-key="id"
          label-key="name"
        />
        <BaseInputSelect
          name="lahan"
          :options="lovPetani.data.value"
          placeholder="Daftar Lahan"
          :floating-label="true"
          value-key="id"
          label-key="name"
        />
        <BaseInputFloat type="text" label="Koordinat Lokasi" name="koordinat" />
        <BaseInputFloat type="text" label="Alamat Produksi" name="alamat" />
        <BaseInputFloat type="text" label="Kuantitas Tanam" name="kuantitasTanam" />
        <BaseInputSelect name="satuanTanam" :options="satuanOptions" placeholder="Satuan" :floating-label="true" />
        <BaseInputFloat type="text" label="Kuantitas Akhir" name="kuantitasAkhir" />
        <BaseInputSelect name="satuanAkhir" :options="satuanOptions" placeholder="Satuan" :floating-label="true" />
        <BaseInputDate label="Mulai Produksi" name="mulaiProduksi" />
        <BaseInputDate label="Akhir Produksi" name="akhirProduksi" />
        <BaseInputSelect name="metode" :options="satuanOptions" placeholder="Metode Ekstraksi" :floating-label="true" />
        <BaseInputFloat type="number" label="Persentase Akhir" name="persentaseAkhir" />
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
import { ref } from 'vue'
import { string, object } from 'yup'
import { push } from 'notivue'
import { satuanOptions } from '@/constants/options'
import type { CreateHarvestingParams } from '@/types/production'
import type { UseQueryReturnType } from '@tanstack/vue-query'
import type { Petani } from '@/types/partner'

interface Props {
  lovPetani: UseQueryReturnType<Petani[], Error>
}

interface FormMinyakNilam {
  nama: string
  lokasi: string
  mulaiProduksi: string
  akhirProduksi: string
  estimasi: number
  satuan: number
  alamat: string
  statusProduksi: string
  presentasiTanam: string
}

defineProps<Props>()

const createHarvesting = useCreateHarvesting()

const { handleSubmit } = useForm<FormMinyakNilam>({
  validationSchema: object({
    nama: string().required().label('Nama'),
    lokasi: string().required().label('Lokasi'),
    mulaiProduksi: string().required().label('Mulai Produksi'),
    akhirProduksi: string().required().label('Akhir Produksi'),
    estimasi: string().required().label('Estimasti'),
    satuan: string().required().label('Satuan'),
    alamat: string().required().label('Alamat'),
    statusProduksi: string().required().label('Status Produksi'),
    presentasiTanam: string().required().label('Presentasi Tanam'),
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

const onSubmit = handleSubmit((values) => {
  // hardcode
  const params: CreateHarvestingParams = {
    name: values.nama,
    employee_id: 86,
    produce_product: 5,
    uom: values.satuan,
    state: values.statusProduksi,
    asset_id: 789,
    kabupaten_id: 12,
    batch_code: 'BATCH-001',
    weather_conditions: 'dry',
    environment_conditions: 'optimal',
    final_product: 2,
    actual_final_quantity: 500,
    percentage_final_quantity: 2.5,
    completion_percentage: 80,
    yield_percentage: 15,
    date_started: values.mulaiProduksi,
    date_harvested: values.akhirProduksi,
  }
  createHarvesting.mutate(params, {
    onSuccess: () => {
      push.success('Berhasil membuat daftar produksi baru')
    },
    onError: () => {
      push.error('Gagal membuat daftar produksi')
    },
  })
})
</script>
