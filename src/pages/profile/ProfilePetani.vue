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
        v-if="!petaniProfile.isLoading.value"
        class="absolute w-48 h-48 top-40 left-1/4 md:left-36 bg-white rounded-full p-1 mt-20 z-20"
      >
        <img
          v-if="!petaniProfile.data.value?.image_1920_url"
          src="@/assets/images/profile/petani-default.png"
          class="w-full object-cover rounded-xl p-4"
          alt="Petani Image"
        />
        <img
          v-else
          :src="petaniProfile.data.value?.image_1920_url"
          class="w-full h-full rounded-full object-cover"
          alt="Profile"
        />
      </div>

      <ButtonEditProfile @click="showModal" />

      <div class="text-3xl font-bold px-5 lg:px-20 mt-28">
        <p v-if="!petaniProfile.isLoading.value">{{ petaniProfile.data.value?.name }}</p>
        <BaseSkeletonText v-else class="w-48 h-6" />
      </div>

      <div class="grid grid-cols-12 px-5 lg:px-20 pt-5 pb-20">
        <div class="col-span-12 lg:col-span-6">
          <div class="grid grid-cols-12 gap-y-2">
            <div class="col-span-4 font-bold">Alamat</div>
            <div class="col-span-8 font-bold flex items-center">
              : &nbsp; <span v-if="!petaniProfile.isLoading.value">{{ petaniProfile.data.value?.street }}</span>
              <BaseSkeletonText v-else class="w-40 h-4" />
            </div>

            <div class="col-span-4 font-bold">Desa/Kelurahan</div>
            <div class="col-span-8 font-bold flex items-center">
              : &nbsp; <span v-if="!petaniProfile.isLoading.value">{{ petaniProfile.data.value?.kelurahan }}</span>
              <BaseSkeletonText v-else class="w-40 h-4" />
            </div>

            <div class="col-span-4 font-bold">Kecamatan</div>
            <div class="col-span-8 font-bold flex items-center">
              : &nbsp; <span v-if="!petaniProfile.isLoading.value">{{ petaniProfile.data.value?.kecamatan }}</span>
              <BaseSkeletonText v-else class="w-40 h-4" />
            </div>

            <div class="col-span-4 font-bold">Kota/Kabupaten</div>
            <div class="col-span-8 font-bold flex items-center">
              : &nbsp;
              <span v-if="!petaniProfile.isLoading.value">{{ petaniProfile.data.value?.kabupaten_id[1] ?? '-' }}</span>
              <BaseSkeletonText v-else class="w-40 h-4" />
            </div>

            <div class="col-span-4 font-bold">Provinsi</div>
            <div class="col-span-8 font-bold flex items-center">
              : &nbsp;
              <span v-if="!petaniProfile.isLoading.value">{{ petaniProfile.data.value?.state_id[1] ?? '-' }}</span>
              <BaseSkeletonText v-else class="w-40 h-4" />
            </div>

            <div class="col-span-4 font-bold">Anggota Keluarga</div>
            <div class="col-span-8 font-bold flex items-center">
              : &nbsp;
              <span v-if="!petaniProfile.isLoading.value">{{ petaniProfile.data.value?.family_members }} Orang</span>
              <BaseSkeletonText v-else class="w-40 h-4" />
            </div>

            <div class="col-span-4 font-bold">Total Lahan</div>
            <div class="col-span-8 font-bold text-primary-2 flex items-center">
              : &nbsp;
              <RouterLink
                v-if="!petaniProfile.isLoading.value"
                :to="{ name: 'Daftar Lahan Petani', params: { name: petaniProfile.data.value?.name } }"
                >{{ petaniProfile.data.value?.total_area_ha }} ha</RouterLink
              >
              <BaseSkeletonText v-else class="w-40 h-4" />
            </div>

            <div class="col-span-4 font-bold">Total Penjualan</div>
            <div class="col-span-8 font-bold text-primary-2 flex items-center">
              : &nbsp;
              <RouterLink
                v-if="!petaniProfile.isLoading.value"
                :to="{ name: 'Laporan Penjualan Petani', params: { name: petaniProfile.data.value?.name } }"
                >{{ formatRupiah(petaniProfile.data.value?.total_transaction_value ?? 0) }}</RouterLink
              >
              <BaseSkeletonText v-else class="w-40 h-4" />
            </div>

            <div class="col-span-4 font-bold text-primary-2">
              <RouterLink :to="{ name: 'Product Traceability' }">Product Traceability</RouterLink>
            </div>
            <div class="col-span-8 font-bold"></div>
          </div>
        </div>
        <div class="col-span-12 lg:col-span-6">
          <div class="grid grid-cols-12 gap-y-2">
            <div class="col-span-4 font-bold">Status</div>
            <div class="col-span-8 font-bold capitalize flex items-center">
              : &nbsp;
              <span v-if="!petaniProfile.isLoading.value">{{ petaniProfile.data.value?.organization_status }}</span>
              <BaseSkeletonText v-else class="w-40 h-4" />
            </div>

            <div class="col-span-4 font-bold">Pendidikan</div>
            <div class="col-span-8 font-bold flex items-center">
              : &nbsp;
              <span v-if="!petaniProfile.isLoading.value">{{
                petaniProfile.data.value?.education_level_id ? petaniProfile.data.value?.education_level_id[1] : '-'
              }}</span>
              <BaseSkeletonText v-else class="w-40 h-4" />
            </div>

            <div class="col-span-4 font-bold">Surat Kontrak</div>
            <div class="col-span-8 font-bold flex items-center">
              : &nbsp;
              <a
                :href="petaniProfile.data.value?.contract_url"
                target="_blank"
                v-if="!petaniProfile.isLoading.value"
                class="text-primary-2 cursor-pointer"
                >{{ petaniProfile.data.value?.contract_file_name }}</a
              >
              <BaseSkeletonText v-else class="w-40 h-4" />
            </div>

            <div class="col-span-4 font-bold">Jenis Mitra</div>
            <div class="col-span-8 font-bold capitalize flex items-center">
              : &nbsp;
              <span v-if="!petaniProfile.isLoading.value">{{ petaniProfile.data.value?.ilo_associate }}</span>
              <BaseSkeletonText v-else class="w-40 h-4" />
            </div>

            <div class="col-span-4 font-bold">Email</div>
            <div class="col-span-8 font-bold flex items-center">
              : &nbsp; <span v-if="!petaniProfile.isLoading.value">{{ petaniProfile.data.value?.email }}</span>
              <BaseSkeletonText v-else class="w-40 h-4" />
            </div>

            <div class="col-span-4 font-bold">Total Panen</div>
            <div
              class="col-span-8 font-bold text-primary-2"
              :class="petaniProfile.isLoading.value ? 'flex items-center' : ''"
            >
              <span v-if="petaniProfile.isLoading.value"> : &nbsp;</span>
              <template v-if="!petaniProfile.isLoading.value && petaniProfile.data.value">
                <p>
                  : &nbsp;
                  <RouterLink :to="{ name: 'Daftar Tanam Nilam Petani', params: { id: petaniProfile.data.value?.id } }">
                    {{ petaniProfile.data.value.total_planting_quantity }} kg
                    <!-- ({{
                      roundNumber(petaniProfile.data.value?.in_progress_percentage_quantity)
                    }}% target panen) -->
                  </RouterLink>
                </p>

                <!-- <ProgressBar :progress="`${roundNumber(petaniProfile.data.value?.in_progress_percentage_quantity)}%`" /> -->
              </template>
              <BaseSkeletonText v-else class="w-40 h-4" />
            </div>

            <div class="col-span-4 font-bold">Total Produksi</div>
            <div
              class="col-span-8 font-bold text-primary-2"
              :class="petaniProfile.isLoading.value ? 'flex items-center' : ''"
            >
              <span v-if="petaniProfile.isLoading.value"> : &nbsp;</span>
              <template v-if="!petaniProfile.isLoading.value">
                <p>
                  : &nbsp;
                  <RouterLink
                    :to="{ name: 'Daftar Produksi Nilam Petani', params: { id: petaniProfile.data.value?.id } }"
                  >
                    {{ petaniProfile.data.value?.total_oil_quantity }} kg ({{
                      roundNumber(petaniProfile.data.value?.in_progress_oil_percentage_quantity ?? 0)
                    }}% target produksi)</RouterLink
                  >
                </p>
                <ProgressBar
                  :progress="`${roundNumber(petaniProfile.data.value?.in_progress_oil_percentage_quantity ?? 0)}%`"
                />
              </template>
              <BaseSkeletonText v-else class="w-40 h-4" />
            </div>

            <div class="col-span-4 font-bold">Tanam (sekarang)</div>
            <div
              class="col-span-8 font-bold text-primary-2"
              :class="petaniProfile.isLoading.value ? 'flex items-center' : ''"
            >
              <span v-if="petaniProfile.isLoading.value"> : &nbsp;</span>
              <template v-if="!petaniProfile.isLoading.value">
                <p>
                  : &nbsp;
                  <RouterLink
                    :to="{
                      name: 'Daftar Tanam Nilam Petani Progress',
                      params: { id: petaniProfile.data.value?.id },
                    }"
                  >
                    {{ petaniProfile.data.value?.in_progress_planting_quantity }} kg target tanam</RouterLink
                  >

                  <ProgressBar
                    :progress="`${roundNumber(petaniProfile.data.value?.in_progress_percentage_quantity ?? 0)}%`"
                  />
                </p>
              </template>
              <BaseSkeletonText v-else class="w-40 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <ModalProfile
      :modal="modal"
      @set-modal="handleModal"
      :profile-photo="profilePhoto"
      @file-uploaded="handleFileUpload"
      @delete-photo="handleDeleteUserPhoto"
    >
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
import BaseHeaderTitle from '@/components/BaseHeaderTitle.vue'
import ButtonEditProfile from './components/ButtonEditProfile.vue'
import ProgressBar from './components/ProgressBar.vue'
import ModalProfile from './components/ModalProfile.vue'
import BaseInputFloat from '@/components/BaseInputFloat.vue'
import BaseInputSelect from '@/components/BaseInputSelect.vue'
import BaseInputFile from '@/components/BaseInputFile.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseSkeletonText from '@/components/BaseSkeletonText.vue'
import { ref } from 'vue'
import { useForm } from 'vee-validate'
import { object, string, number } from 'yup'
import { useRoute } from 'vue-router'
import { useKabupaten, useProvinsi } from '@/api/useLocalization'
import { usePetaniProfile, usePetaniUpdate, usePetaniUploadPhoto } from '@/api/usePetani'
import type { PetaniForm, PetaniProfileParams } from '@/types/partner'
import { formatRupiah } from '@/utils/useFormatRupiah'
import { optionsJenisMitra, optionsPendidikan, optionsStatus } from '@/constants/options'
import { push } from 'notivue'

const route = useRoute()
const kabupatenList = useKabupaten()
const provinsi = useProvinsi()

const petaniProfileParams = ref<PetaniProfileParams>({ user_id: Number(route.params.id) })
const petaniProfile = usePetaniProfile(petaniProfileParams)

const updatePetani = usePetaniUpdate(Number(route.params.id))
const updatePhotoPetani = usePetaniUploadPhoto()

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
    // suratKontrak: mixed().required().label('Surat Kontrak'),
    ilo_associate: string().required().label('Jenis Mitra'),
    email: string().label('Email'),
  }),
})
const profilePhoto = ref<string>('')

const onSubmit = handleSubmit(async (values) => {
  try {
    const data: any = await updatePetani.mutateAsync(values)

    if (file.value) {
      await uploadFile(data.data.partner_id)
    }

    petaniProfile.refetch()
    closeModal()
    push.success({ message: data.description })
  } catch (error) {
    console.error('Error updating data:', error)
  }
})

const uploadFile = async (id: number) => {
  try {
    const formData = new FormData()
    formData.append('partner_id', id.toString())
    formData.append('photo', file.value)

    await updatePhotoPetani.mutateAsync(formData)
  } catch (error) {
    console.error('Error uploading profile photo:', error)
  }
}

let modal = ref<Boolean>(false)

const showModal = () => {
  const petaniProfileData = petaniProfile.data.value

  if (petaniProfileData && petaniProfileData.kabupaten_id && provinsi.data.value) {
    profilePhoto.value = petaniProfileData?.image_1920_url

    const updatedPetaniProfileData = {
      name: petaniProfileData.name,
      street: petaniProfileData.street,
      kelurahan: petaniProfileData.kelurahan,
      kecamatan: petaniProfileData.kecamatan,
      kabupaten_id: petaniProfileData.kabupaten_id[0],
      state_id: provinsi.data.value[0].id,
      family_members: petaniProfileData.family_members,
      organization_statue: petaniProfileData.organization_status,
      education_level_id: Number(petaniProfileData.education_level_id[0]),
      ilo_associate: petaniProfileData.ilo_associate,
      email: petaniProfileData.email,
      country_id: 100,
    }

    resetForm({
      values: updatedPetaniProfileData,
    })

    modal.value = true
  }
}

const roundNumber = (num: number) => {
  return Math.floor(num * 100) / 100
}

const closeModal = () => {
  modal.value = false
}

const handleModal = (value: boolean) => {
  modal.value = value
}

const handleDeleteUserPhoto = () => {
  profilePhoto.value = ''
}

function handleFileSuratKontrak(file: File) {
  console.log('Selected file:', file)
}

const file = ref()
const handleFileUpload = (uploadedFile: any) => {
  file.value = uploadedFile
}
</script>
