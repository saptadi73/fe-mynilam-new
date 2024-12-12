<template>
  <div class="bg-image-wave2 px-5 md:px-16 pb-4">
    <BaseHeaderTitle title="Agen/Koperasi" />
    <div class="bg-[#F6FDFF] p-4 rounded-3xl border border-[#015438]">
      <div class="flex flex-col lg:flex-row gap-y-2 lg:gap-y-0 lg:gap-x-5 justify-start">
        <div class="flex flex-col lg:flex-row gap-y-2 lg:gap-y-0 lg:gap-x-2">
          <BaseSearchBar v-model="search" placeholder="Cari nama"></BaseSearchBar>
          <BaseButton @click="setDaftarAgenParams">Cari</BaseButton>
        </div>
        <BaseInputSelect
          name="kabupaten"
          label-key="name"
          value-key="id"
          :options="kabupaten.data.value"
          placeholder="Pilih kabupaten"
          @change="setDaftarAgenParams"
        ></BaseInputSelect>
        <BaseInputSelect
          name="jenis"
          :options="optionsJenisMitra"
          placeholder="Pilih jenis mitra"
          @change="setDaftarAgenParams"
        ></BaseInputSelect>
      </div>
      <hr class="border border-[#015438] mt-3 -ml-4 -mr-4" />
      <div class="grid grid-cols-12 gap-4 mt-2">
        <BaseCardAdd @click="showModal" card-title="Agen" class="col-span-12 md:col-span-6 lg:col-span-3" />
        <BaseSkeletonCard
          v-if="agenList.isLoading.value"
          v-for="n in 3"
          :key="n"
          class="col-span-12 md:col-span-6 lg:col-span-3"
        />
        <template v-else>
          <div class="col-span-9 self-center text-center text-gray-600" v-if="agenList.data.value === null">
            Tidak ada data untuk ditampilkan
          </div>

          <BaseCard
            v-else
            v-for="(card, cardIndex) in agenList.data.value"
            :key="cardIndex"
            card-path="profile/profile-agen"
            :card-id="card.id"
            :card-code="card.ilo_associate_code"
            class="col-span-12 md:col-span-6 lg:col-span-3"
          >
            <template #card-content>
              <div class="flex justify-center pt-2 h-1/3">
                <img
                  v-if="!card.image_1920_url"
                  src="@/assets/images/profile/petani-default.png"
                  class="w-full object-cover rounded-xl"
                  alt="Petani Image"
                />
                <img v-else :src="card.image_1920_url" class="w-full object-cover rounded-xl" alt="Agen Image" />
              </div>

              <div class="grid grid-cols-12 gap-x-1 pt-2">
                <div class="col-span-6 pt-2">
                  <h1 class="text-sm">Nama</h1>
                  <p class="font-bold text-sm">{{ card.name }}</p>
                </div>
                <div class="col-span-6 pt-2">
                  <h1 class="text-sm">Alamat</h1>
                  <p class="font-bold text-sm">{{ card.street }}</p>
                </div>
                <div class="col-span-6 pt-2">
                  <h1 class="text-sm">Desa/Kelurahan</h1>
                  <p class="font-bold text-sm">{{ card.kelurahan ?? '-' }}</p>
                </div>
                <div class="col-span-6 pt-2">
                  <h1 class="text-sm">Kecamatan</h1>
                  <p class="font-bold text-sm">{{ card.kecamatan ?? '-' }}</p>
                </div>
                <div class="col-span-6 pt-2">
                  <h1 class="text-sm">Kota/Kabupaten</h1>
                  <p class="font-bold text-sm">{{ card.kabupaten_id[1] ?? '-' }}</p>
                </div>
                <div class="col-span-6 pt-2">
                  <h1 class="text-sm">Provinsi</h1>
                  <p class="font-bold text-sm">{{ card.state_id[1] ?? '-' }}</p>
                </div>
                <div class="col-span-6 pt-2">
                  <h1 class="text-sm">Jenis</h1>
                  <p class="font-bold text-sm capitalize">{{ card.ilo_associate }}</p>
                </div>
                <div class="col-span-6 pt-2">
                  <h1 class="text-sm">No Telepon</h1>
                  <p class="font-bold text-sm">-</p>
                </div>
              </div>
            </template>
          </BaseCard>
        </template>
      </div>
    </div>

    <ModalProfile :modal="modal" @set-modal="handleModal" @file-uploaded="handlePhotoUpload">
      <template #body-form>
        <div class="p-4 md:p-12">
          <form @submit.prevent="onSubmit" class="space-y-4">
            <BaseInputFloat label="Nama Agen/Koperasi" name="name" type="text" />
            <BaseInputFloat label="Alamat" name="street" type="text" />
            <BaseInputFloat label="Desa/Kelurahan" name="kelurahan" type="text" />
            <BaseInputFloat label="Kecamatan" name="kecamatan" type="text" />
            <BaseInputSelect
              name="kabupaten_id"
              :options="kabupaten.data.value"
              label-key="name"
              value-key="id"
              placeholder="Kota/Kabupaten"
              :floating-label="true"
            />
            <BaseInputSelect
              :options="provinsi.data.value"
              name="state_id"
              label-key="name"
              value-key="id"
              placeholder="Provinsi"
              :floating-label="true"
              :disabled="true"
            />
            <BaseInputSelect
              :options="optionsJenisMitra"
              name="ilo_associate"
              placeholder="Jenis Mitra"
              :floating-label="true"
            />
            <BaseInputFloat label="Email" name="email" type="email" />

            <div class="flex justify-center gap-x-4 mx-8">
              <BaseButton type="submit" class="w-full font-bold">Simpan</BaseButton>
              <BaseButton @click="closeModal" variant="success" class="w-full font-bold">Kembali</BaseButton>
            </div>
          </form>
        </div>
      </template>
    </ModalProfile>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue'
import BaseCard from '@/components/BaseCard.vue'
import BaseSearchBar from '@/components/BaseSearchBar.vue'
import BaseInputSelect from '@/components/BaseInputSelect.vue'
import BaseHeaderTitle from '@/components/BaseHeaderTitle.vue'
import BaseCardAdd from '@/components/BaseCardAdd.vue'
import BaseSkeletonCard from '@/components/BaseSkeletonCard.vue'
import BaseInputFloat from '@/components/BaseInputFloat.vue'
import ModalProfile from './components/ModalProfile.vue'
import { ref } from 'vue'
import { useForm } from 'vee-validate'
import { useKabupaten, useProvinsi } from '@/api/useLocalization'
import { useAgenCreate, useAgenList, useAgenUploadPhoto } from '@/api/useAgen'
import type { AgenForm, DaftarAgenParams } from '@/types/partner'
import { number, object, string } from 'yup'
import { useRoute } from 'vue-router'
import { push } from 'notivue'

const route = useRoute()
const { daerah } = route.params
const kabupaten = useKabupaten()
const provinsi = useProvinsi()

interface Form {
  kabupaten: DaftarAgenParams['kabupaten_id']
  jenis: DaftarAgenParams['associate_type']
}

const { values: paramsValues } = useForm<Form>()
const search = ref<string>('')

const daftarAgenParams = ref<DaftarAgenParams>({})
const agenList = useAgenList(daftarAgenParams)

const createAgen = useAgenCreate()
const uploadPhoto = useAgenUploadPhoto()

const setDaftarAgenParams = () => {
  daftarAgenParams.value = {
    kabupaten_id: paramsValues.kabupaten,
    associate_type: paramsValues.jenis,
    name: search.value,
  }
}

const { handleSubmit: handleSubmitAgen, resetForm: resetFormAgen } = useForm<AgenForm>({
  validationSchema: object({
    name: string().required().label('Nama'),
    street: string().required().label('Alamat'),
    kelurahan: string().required().label('Desa/Kelurahan'),
    kecamatan: string().required().label('Kecamatan'),
    kabupaten_id: number().required().label('Kota/Kabupaten'),
    state_id: number().required().label('Provinsi'),
    ilo_associate: string().required().label('Jenis Mitra'),
    email: string().label('Email'),
  }),
})
const file = ref()

let modal = ref<boolean>(false)

const showModal = () => {
  if (provinsi.data.value) {
    resetFormAgen({
      values: {
        kabupaten_id: kabupaten.data.value?.find((item) => item.name === daerah)?.id,
        state_id: provinsi.data.value[0].id,
      },
    })
  }

  modal.value = true
}

const closeModal = () => {
  modal.value = false
}

const handleModal = (value: boolean) => {
  modal.value = value
}

const onSubmit = handleSubmitAgen(async (values: AgenForm) => {
  try {
    values.country_id = 100
    values.education_level_id = 1

    const data: any = await createAgen.mutateAsync(values)

    if (file.value) {
      await uploadFile(data.data.partner_id)
    }

    agenList.refetch()
    closeModal()
    push.success({ message: data.description })
  } catch (error) {
    console.error('Error submitting form:', error)
  }
})

const uploadFile = async (id: number) => {
  try {
    const formData = new FormData()
    formData.append('partner_id', id.toString())
    formData.append('photo', file.value)

    await uploadPhoto.mutateAsync(formData)
  } catch (error) {
    console.error('Error uploading agen photo:', error)
  }
}

const handlePhotoUpload = (uploadedPhoto: any) => {
  file.value = uploadedPhoto
}

const optionsJenisMitra = ref([
  { label: 'Koperasi', value: 'koperasi' },
  { label: 'Agen', value: 'agent' },
])
</script>
