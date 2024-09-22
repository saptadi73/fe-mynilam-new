<template>
  <form class="md:w-1/2 border-r-[2.5px] border-primary-border pr-7" @submit="onSubmit">
    <h1 class="text-primary text-2xl font-bold text-center pb-5">Tanam</h1>
    <div class="md:grid md:grid-cols-2 gap-10 border-2 border-primary rounded-lg py-7 px-10">
      <BaseInputFloat type="text" label="Nama" name="nama" />
      <BaseInputFloat type="number" label="Luas Lahan" name="luasLahan" />
      <BaseInputDate label="Mulai Produksi" name="mulaiProduksi" />
      <BaseInputDate label="Akhir Produksi" name="akhirProduksi" />
      <div class="flex space-x-4">
        <div class="w-7/12">
          <BaseInputFloat type="text" label="Estimasi Panen" name="estimasi" />
        </div>
        <div class="w-5/12">
          <BaseInputSelect name="satuan" :options="options" placeholder="Satuan" :floating-label="true" />
        </div>
      </div>
      <BaseInputFloat type="text" label="Lokasi" name="lokasi" />
      <BaseInputFloat type="text" label="Alamat" name="alamat" />
      <BaseInputSelect name="statusProduksi" :options="options" placeholder="Status Produksi" :floating-label="true" />
      <BaseInputFloat type="text" label="Presentasi Tanam" name="presentasiTanam" />
    </div>
    <BaseButton class="w-full mt-5 mb-3 py-2 font-semibold !rounded-full">Simpan Data</BaseButton>
  </form>
</template>

<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue'
import BaseInputDate from '@/components/BaseInputDate.vue'
import BaseInputFloat from '@/components/BaseInputFloat.vue'
import BaseInputSelect from '@/components/BaseInputSelect.vue'
import { useForm } from 'vee-validate'
import { ref } from 'vue'
import * as yup from 'yup'

const { handleSubmit } = useForm({
  validationSchema: yup.object({
    nama: yup.string().required().label('Nama'),
    luasLahan: yup.string().required().label('Luas Lahan'),
    mulaiProduksi: yup.string().required().label('Mulai Produksi'),
    akhirProduksi: yup.string().required().label('Akhir Produksi'),
    estimasi: yup.string().required().label('Estimasti'),
    satuan: yup.string().required().label('Satuan'),
    lokasi: yup.string().required().label('Lokasi'),
    alamat: yup.string().required().label('Alamat'),
    statusProduksi: yup.string().required().label('Status Produksi'),
    presentasiTanam: yup.string().required().label('Presentasi Tanam'),
  }),
  initialValues: {},
})

const options = ref([
  { label: 'Agus Nur Drajat', value: 1 },
  { label: 'Jayadi Idzes', value: 2 },
  { label: 'Martin Paes', value: 3 },
])

const onSubmit = handleSubmit((values) => {
  console.log(values)
})
</script>
