<template>
  <div class="bg-image-wave relative px-5 lg:px-16 py-10">
    <BaseHeaderTitle />
    <div class="bg-white min-h-screen opacity-90 shadow-md rounded-lg font-cera">
      <img
        class="bg-cover object-cover rounded-t-lg h-60 w-full"
        src="@/assets/images/profile/profile-rectangle-bg.png"
        alt="Background Profile"
      />

      <div
        v-if="!agenProfile.isLoading.value"
        class="absolute w-48 h-48 top-40 left-1/4 md:left-36 bg-white rounded-full p-1.5 mt-20 z-20"
      >
        <img
          v-if="!agenProfile.data.value?.[0].image_1920_url"
          src="@/assets/images/profile/petani-default.png"
          class="w-full object-cover rounded-xl p-4"
          alt="Petani Image"
        />
        <img
          v-else
          :src="agenProfile.data.value?.[0].image_1920_url"
          class="w-full h-full rounded-full object-cover"
          alt="Profile Agen Image"
        />
      </div>

      <ButtonEditProfile @click="showModal" />

      <div class="text-3xl font-bold px-5 lg:px-20 mt-28">
        <p v-if="!agenProfile.isLoading.value">{{ agenProfile.data.value?.[0].name }}</p>
        <BaseSkeletonText v-else class="w-48 h-6" />
      </div>
      <div class="grid grid-cols-12 px-5 lg:px-20 pt-5 pb-20">
        <div class="col-span-12 lg:col-span-6">
          <div class="grid grid-cols-12 gap-y-2">
            <div class="col-span-4 font-bold">Alamat</div>
            <div class="col-span-8 font-bold flex items-center">
              : &nbsp; <span v-if="!agenProfile.isLoading.value">{{ agenProfile.data.value?.[0].street }}</span>
              <BaseSkeletonText v-else class="w-40 h-4" />
            </div>

            <div class="col-span-4 font-bold">Desa/Kelurahan</div>
            <div class="col-span-8 font-bold flex items-center">
              : &nbsp;
              <span v-if="!agenProfile.isLoading.value">{{ agenProfile.data.value?.[0].kelurahan }}</span>
              <BaseSkeletonText v-else class="w-40 h-4" />
            </div>

            <div class="col-span-4 font-bold">Kecamatan</div>
            <div class="col-span-8 font-bold flex items-center">
              : &nbsp;
              <span v-if="!agenProfile.isLoading.value">{{ agenProfile.data.value?.[0].kecamatan }}</span>
              <BaseSkeletonText v-else class="w-40 h-4" />
            </div>

            <div class="col-span-4 font-bold">Kota/Kabupaten</div>
            <div class="col-span-8 font-bold flex items-center">
              : &nbsp;
              <span v-if="!agenProfile.isLoading.value">{{ agenProfile.data.value?.[0].kabupaten_id[1] }}</span>
              <BaseSkeletonText v-else class="w-40 h-4" />
            </div>

            <div class="col-span-4 font-bold">Provinsi</div>
            <div class="col-span-8 font-bold flex items-center">
              : &nbsp;
              <span v-if="!agenProfile.isLoading.value"
                >{{ agenProfile.data.value?.[0].state_id ? agenProfile.data.value?.[0].state_id[1] : '-' }}
              </span>
              <BaseSkeletonText v-else class="w-40 h-4" />
            </div>
          </div>
        </div>
        <div class="col-span-12 lg:col-span-6">
          <div class="grid grid-cols-12 gap-y-2">
            <div class="col-span-4 font-bold">Jenis Mitra</div>
            <div class="col-span-8 font-bold flex items-center capitalize">
              : &nbsp;
              <span v-if="!agenProfile.isLoading.value">{{ agenProfile.data.value?.[0].ilo_associate }}</span>
              <BaseSkeletonText v-else class="w-40 h-4" />
            </div>

            <div class="col-span-4 font-bold">Email</div>
            <div class="col-span-8 font-bold flex items-center">
              : &nbsp; <span v-if="!agenProfile.isLoading.value">{{ agenProfile.data.value?.[0].email }}</span>
              <BaseSkeletonText v-else class="w-40 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <ModalProfile :modal="modal" @set-modal="handleModal" :profile-photo="profilePhoto">
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
import BaseHeaderTitle from '@/components/BaseHeaderTitle.vue'
import ButtonEditProfile from './components/ButtonEditProfile.vue'
import BaseSkeletonText from '@/components/BaseSkeletonText.vue'
import BaseInputFloat from '@/components/BaseInputFloat.vue'
import BaseInputSelect from '@/components/BaseInputSelect.vue'
import BaseButton from '@/components/BaseButton.vue'
import ModalProfile from './components/ModalProfile.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useForm } from 'vee-validate'
import { number, object, string } from 'yup'
import { useKabupaten, useProvinsi } from '@/api/useLocalization'
import { useAgenProfile } from '@/api/useAgen'
import type { AgenProfileParams } from '@/types/partner'

const route = useRoute()
const kabupaten = useKabupaten()
const provinsi = useProvinsi()

const agenProfileParams = ref<AgenProfileParams>({ user_id: Number(route.params.id) })
const agenProfile = useAgenProfile(agenProfileParams)

const { handleSubmit, resetForm } = useForm({
  validationSchema: object({
    nama: string().required().label('Nama'),
    street: string().required().label('Alamat'),
    kelurahan: string().required().label('Desa/Kelurahan'),
    kecamatan: string().required().label('Kecamatan'),
    kabupaten_id: number().required().label('Kota/Kabupaten'),
    state_id: string().label('Provinsi'),
    ilo_associate: string().required().label('Jenis Mitra'),
    email: string().required().label('Email'),
  }),
})
const profilePhoto = ref<string>('')

const onSubmit = handleSubmit((values) => {
  console.log(values)
})

let modal = ref<boolean>(false)

const showModal = () => {
  modal.value = true

  const agenProfileData = agenProfile.data.value?.[0]

  if (agenProfileData && agenProfileData.kabupaten_id && provinsi.data.value) {
    if (agenProfileData.image_1920_url) {
      profilePhoto.value = agenProfileData.image_1920_url
    }

    const updatedAgenProfileData = {
      ...agenProfileData,
      kabupaten_id: agenProfileData.kabupaten_id[0],
      ilo_associate: optionsJenisMitra.value.find((item) => item.value == agenProfileData.ilo_associate)?.value,
      state_id: provinsi.data.value[0].id,
    }

    resetForm({
      values: updatedAgenProfileData,
    })
  }
}

const closeModal = () => {
  modal.value = false
}

const handleModal = (value: boolean) => {
  modal.value = value
}

const optionsJenisMitra = ref([
  { label: 'Koperasi', value: 'koperasi' },
  { label: 'Agen', value: 'agent' },
])
</script>
