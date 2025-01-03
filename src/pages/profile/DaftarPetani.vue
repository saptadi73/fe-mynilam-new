<template>
  <div class="bg-image-wave2 px-5 md:px-16 pb-4">
    <BaseHeaderTitle :title="`Petani ${route.params.daerah}`" />
    <div class="bg-[#F6FDFF] p-4 rounded-3xl border border-[#015438]">
      <div class="flex flex-col md:flex-row gap-y-2 md:gap-y-0 md:gap-x-5 justify-start">
        <div class="flex flex-col md:flex-row gap-y-2 md:gap-y-0 md:gap-x-2">
          <BaseSearchBar v-model="search" placeholder="Cari nama"></BaseSearchBar>
          <BaseButton @click="handleParamValue">Cari</BaseButton>
        </div>
      </div>
      <hr class="border border-[#015438] mt-3 -ml-4 -mr-4" />
      <div class="grid grid-cols-12 gap-y-4 md:gap-y-4 md:gap-x-4 mt-2">
        <BaseCardAdd @click="showModal" card-title="Petani" class="col-span-12 md:col-span-6 lg:col-span-3" />
        <BaseSkeletonCard
          v-if="petaniList.isLoading.value"
          v-for="n in 3"
          :key="n"
          class="col-span-12 md:col-span-6 lg:col-span-3"
        />
        <template v-else>
          <div class="col-span-9 self-center text-center text-gray-600" v-if="petaniList.data.value === null">
            Tidak ada data untuk ditampilkan
          </div>

          <BaseCard
            v-else
            v-for="(card, cardIndex) in petaniList.data.value"
            :key="cardIndex"
            card-path="profile/profile-petani"
            :card-id="card.id"
            :card-code="card.name"
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
                <img v-else :src="card.image_1920_url" class="w-full object-cover rounded-xl" alt="Petani Image" />
              </div>

              <div class="grid grid-cols-12 gap-x-1 pt-2">
                <div class="col-span-6 pt-2">
                  <h1 class="text-sm">Kode</h1>
                  <p class="font-bold text-sm">{{ card.ilo_associate_code }}</p>
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
                  <h1 class="text-sm">Anggota Keluarga</h1>
                  <p class="font-bold text-sm">{{ card.family_members }} Orang</p>
                </div>
                <div class="col-span-6 pt-2">
                  <h1 class="text-sm">Surat Kontrak</h1>
                  <p class="font-bold text-sm">
                    <a :href="card.contract_url" target="_blank" class="text-primary-2 cursor-pointer" @click.stop>{{
                      card.contract_file_name
                    }}</a>
                  </p>
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
            <BaseInputFloat label="Nama*" name="name" type="text" />
            <BaseInputFloat label="Alamat*" name="street" type="text" />
            <BaseInputFloat label="Desa/Kelurahan*" name="kelurahan" type="text" />
            <BaseInputFloat label="Kecamatan*" name="kecamatan" type="text" />
            <BaseInputSelect
              name="kabupaten_id"
              :options="kabupatenList.data.value"
              label-key="name"
              value-key="id"
              placeholder="Kota/Kabupaten*"
              :floating-label="true"
            />
            <BaseInputSelect
              :options="provinsi.data.value"
              label-key="name"
              value-key="id"
              name="state_id"
              placeholder="Provinsi"
              :floating-label="true"
              :disabled="true"
            />
            <BaseInputFloat label="Anggota Keluarga*" name="family_members" type="number" />
            <BaseInputSelect
              :options="optionsStatus"
              name="organization_statue"
              placeholder="Status*"
              :floating-label="true"
            />
            <BaseInputSelect
              :options="optionsPendidikan"
              name="education_level_id"
              placeholder="Pendidikan*"
              :floating-label="true"
            />
            <BaseInputFile
              name="suratKontrak"
              label="Surat Kontrak*"
              file-type=".pdf"
              @file-selected="handleFileSuratKontrak"
            ></BaseInputFile>
            <BaseInputSelect
              :options="optionsJenisMitra"
              name="ilo_associate"
              placeholder="Jenis Mitra"
              :floating-label="true"
              :disabled="true"
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
import BaseInputFile from '@/components/BaseInputFile.vue'
import ModalProfile from './components/ModalProfile.vue'
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useKabupaten, useProvinsi } from '@/api/useLocalization'
import { usePetaniCreate, usePetaniList, usePetaniUploadContract, usePetaniUploadPhoto } from '@/api/usePetani'
import { PetaniForm, PetaniListParams } from '@/types/partner'
import { useForm } from 'vee-validate'
import { number, object, string } from 'yup'
import { push } from 'notivue'
import { optionsJenisMitra, optionsPendidikan, optionsStatus } from '@/constants/options'

const route = useRoute()
const { daerah } = route.params
const search = ref<string>('')

const kabupatenList = useKabupaten()
const provinsi = useProvinsi()

const params = ref<PetaniListParams>({})
const petaniList = usePetaniList(params)

const createPetani = usePetaniCreate()
const uploadPhoto = usePetaniUploadPhoto()
const uploadContract = usePetaniUploadContract()

const handleParamValue = async () => {
  const selectedKabupaten = kabupatenList.data.value?.find((item) => item.name === daerah)

  if (selectedKabupaten) {
    params.value = {
      kabupaten_id: selectedKabupaten?.id,
      name: search.value || undefined,
    }
  }
}

watch(kabupatenList.data, handleParamValue)

onMounted(() => {
  handleParamValue()
})

const { handleSubmit, resetForm } = useForm<PetaniForm>({
  validationSchema: object({
    name: string().required().label('Nama'),
    street: string().required().label('Alamat'),
    kelurahan: string().required().label('Desa/Kelurahan'),
    kecamatan: string().required().label('Kecamatan'),
    kabupaten_id: number().required().label('Kota/Kabupaten'),
    state_id: number().required().label('Provinsi'),
    family_members: number().required().label('Anggota Keluarga'),
    organization_statue: string().required().label('Status'),
    education_level_id: number().required().label('Pendidikan'),
    ilo_associate: string().required().label('Jenis Mitra'),
    email: string().label('Email'),
  }),
})
const file = ref()
const contractFile = ref()
let modal = ref<Boolean>(false)

const showModal = () => {
  if (provinsi.data.value) {
    resetForm({
      values: {
        kabupaten_id: kabupatenList.data.value?.find((item) => item.name === daerah)?.id,
        state_id: provinsi.data.value[0].id,
        ilo_associate: 'farmers',
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

const onSubmit = handleSubmit(async (values) => {
  try {
    values.country_id = 100
    const data: any = await createPetani.mutateAsync(values)

    if (file.value) {
      await uploadFile(data.data.partner_id)
    }

    if (contractFile.value) {
      await uploadContractFile(data.data.partner_id)
    }

    petaniList.refetch()
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
    console.error('Error uploading profile photo:', error)
  }
}

const uploadContractFile = async (id: number) => {
  try {
    const formData = new FormData()
    formData.append('partner_id', id.toString())
    formData.append('contract', contractFile.value)

    await uploadContract.mutateAsync(formData)
  } catch (error) {
    console.error('Error uploading contract file:', error)
  }
}

function handleFileSuratKontrak(file: File) {
  contractFile.value = file
}

const handlePhotoUpload = (uploadedPhoto: any) => {
  file.value = uploadedPhoto
}
</script>
