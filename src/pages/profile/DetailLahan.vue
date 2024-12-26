<template>
  <div class="bg-image-wave relative px-5 lg:px-16 pb-4">
    <BaseHeaderTitle />
    <div class="bg-white opacity-90 shadow-md rounded-lg font-cera">
      <img
        class="bg-cover object-cover rounded-t-lg h-40 w-full"
        :src="lahanDetail.data.value?.[0].asset_image_url"
        alt="Foto Lahan"
      />

      <div class="text-xl text-primary font-semibold flex justify-center py-3">
        <h1 v-if="!lahanDetail.isLoading.value" class="text-2xl">{{ lahanDetail.data.value?.[0].employee_id[1] }}</h1>
        <BaseSkeletonText v-else class="w-40 h-4" />
      </div>

      <div class="flex justify-end px-4">
        <BaseButton @click="showModal">Ubah</BaseButton>
      </div>

      <div class="grid grid-cols-12 gap-x-4 p-5">
        <div class="col-span-6 space-y-1">
          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Kode Lahan</div>
            <div class="col-span-6 flex items-center">
              <p v-if="!lahanDetail.isLoading.value">:&nbsp; {{ lahanDetail.data.value?.[0].farm_id }}</p>
              <template v-else>
                :&nbsp;
                <BaseSkeletonText class="w-full h-4" />
              </template>
            </div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Jenis</div>
            <div class="col-span-6 flex items-center">
              <p v-if="!lahanDetail.isLoading.value">:&nbsp; {{ lahanDetail.data.value?.[0].product_id[1] }}</p>
              <template v-else>
                :&nbsp;
                <BaseSkeletonText class="w-full h-4" />
              </template>
            </div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Sumber Lahan</div>
            <div class="col-span-6 capitalize flex items-center">
              <p v-if="!lahanDetail.isLoading.value">
                :&nbsp; {{ lahanDetail.data.value?.[0].employee_ilo_associate }}
              </p>
              <template v-else>
                :&nbsp;
                <BaseSkeletonText class="w-full h-4" />
              </template>
            </div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Status Kepemilikan</div>
            <div class="col-span-6 flex items-center">
              <p v-if="!lahanDetail.isLoading.value">:&nbsp; {{ lahanDetail.data.value?.[0].ownership_status }}</p>
              <template v-else>
                :&nbsp;
                <BaseSkeletonText class="w-full h-4" />
              </template>
            </div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Kode Petani</div>
            <div class="col-span-6 flex items-center">
              <p v-if="!lahanDetail.isLoading.value">
                :&nbsp; {{ lahanDetail.data.value?.[0].employee_ilo_associate_code }}
              </p>
              <template v-else>
                :&nbsp;
                <BaseSkeletonText class="w-full h-4" />
              </template>
            </div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Koordinat</div>
            <div class="col-span-6 flex items-center">
              <p v-if="!lahanDetail.isLoading.value">:&nbsp; {{ lahanDetail.data.value?.[0].coordinates }}</p>
              <template v-else>
                :&nbsp;
                <BaseSkeletonText class="w-full h-4" />
              </template>
            </div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Luas Lahan</div>
            <div class="col-span-6 flex items-center">
              <p v-if="!lahanDetail.isLoading.value">
                :&nbsp; {{ lahanDetail.data.value?.[0].area_ha }} {{ lahanDetail.data.value?.[0].area_uom[1] }}
              </p>
              <template v-else>
                :&nbsp;
                <BaseSkeletonText class="w-full h-4" />
              </template>
            </div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Rata-rata Hasil (kg/m2)</div>
            <div class="col-span-6 flex items-center">
              <p v-if="!lahanDetail.isLoading.value">:&nbsp; 2</p>
              <template v-else>
                :&nbsp;
                <BaseSkeletonText class="w-full h-4" />
              </template>
            </div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Perkiraan Produksi</div>
            <div class="col-span-6 flex items-center">
              <p v-if="!lahanDetail.isLoading.value">
                :&nbsp; {{ lahanDetail.data.value?.[0].production_capacity }} kg
              </p>
              <template v-else>
                :&nbsp;
                <BaseSkeletonText class="w-full h-4" />
              </template>
            </div>
          </div>
        </div>

        <div class="col-span-6 space-y-1">
          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Alamat</div>
            <div class="col-span-6 capitalize flex items-center">
              <p v-if="!lahanDetail.isLoading.value">:&nbsp; {{ lahanDetail.data.value?.[0].address }}</p>
              <template v-else>
                :&nbsp;
                <BaseSkeletonText class="w-full h-4" />
              </template>
            </div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Provinsi</div>
            <div class="col-span-6 flex items-center">
              <p v-if="!lahanDetail.isLoading.value">:&nbsp; {{ lahanDetail.data.value?.[0].state_id[1] }}</p>
              <template v-else>
                :&nbsp;
                <BaseSkeletonText class="w-full h-4" />
              </template>
            </div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Kabupaten/Kota</div>
            <div class="col-span-6 flex items-center">
              <p v-if="!lahanDetail.isLoading.value">:&nbsp; {{ lahanDetail.data.value?.[0].kabupaten_id[1] }}</p>
              <template v-else>
                :&nbsp;
                <BaseSkeletonText class="w-full h-4" />
              </template>
            </div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Status Penanaman</div>
            <div class="col-span-6 capitalize flex items-center">
              <p v-if="!lahanDetail.isLoading.value">:&nbsp; {{ lahanDetail.data.value?.[0].planting_status }}</p>
              <template v-else>
                :&nbsp;
                <BaseSkeletonText class="w-full h-4" />
              </template>
            </div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Status Panen</div>
            <div class="col-span-6 capitalize flex items-center">
              <p v-if="!lahanDetail.isLoading.value">:&nbsp; {{ lahanDetail.data.value?.[0].harvesting_status }}</p>
              <template v-else>
                :&nbsp;
                <BaseSkeletonText class="w-full h-4" />
              </template>
            </div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Peta Lahan</div>
            <div class="col-span-6 flex items-center">
              <p
                v-if="!lahanDetail.isLoading.value"
                @click="showLahanMap(lahanDetail.data.value?.[0].shp_file)"
                class="cursor-pointer text-blue-500"
              >
                :&nbsp; {{ lahanDetail.data.value?.[0].shp_filename }}
              </p>
              <template v-else>
                :&nbsp;
                <BaseSkeletonText class="w-full h-4" />
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>

    <BaseModal :show-modal="modal" @set-modal="handleModal">
      <template #modal-content>
        <div class="px-4 md:p-8">
          <form @submit.prevent="onSubmit" class="space-y-4">
            <div class="flex justify-center">
              <div class="relative relative-container flex justify-center items-center w-full" v-if="lahanPhoto">
                <img :src="lahanPhoto" alt="Foto Lahan" class="profile-image object-cover w-full h-72" />

                <svg
                  @click="handleDeleteLahanPhoto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="icon-delete hidden absolute w-8 h-8 cursor-pointer"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </div>

              <div v-else class="flex flex-col">
                <div class="flex justify-center cursor-pointer" @click="triggerLahanPhotoInput">
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

                <h1 class="font-cera font-bold text-xl text-primary-border">Tambah Foto Lahan</h1>
                <input
                  type="file"
                  ref="lahanPhotoInput"
                  accept=".jpg, .jpeg, .png"
                  class="hidden"
                  @change="handleFileChange"
                />
              </div>
            </div>

            <hr class="-ml-8 -mr-8 border border-[#015438]" />

            <div class="grid grid-cols-12 gap-x-5">
              <div class="col-span-6 space-y-4">
                <BaseInputSelect
                  :options="lovPetani.data.value"
                  name="employee_id"
                  label-key="name"
                  value-key="id"
                  placeholder="Nama Pemilik"
                  :floating-label="true"
                />
                <BaseInputFloat label="Lokasi GPS" name="coordinates" type="text" />

                <BaseInputSelect
                  :options="kabupatenList.data.value"
                  name="kabupaten_id"
                  label-key="name"
                  value-key="id"
                  placeholder="Kabupaten"
                  :floating-label="true"
                  :disabled="true"
                />
                <BaseInputSelect
                  :options="optionsStatusLahan"
                  name="harvesting_status"
                  placeholder="Status Tanam"
                  :floating-label="true"
                />
                <BaseInputFile
                  label="Input SHP (.zip)"
                  name="shp_file"
                  file-type=".zip"
                  @file-selected="handleFileSelected"
                />
              </div>

              <div class="col-span-6 space-y-4">
                <div class="grid grid-cols-12 gap-x-2">
                  <BaseInputFloat class="col-span-7" name="area_ha" label="Luas Lahan" type="number" />
                  <BaseInputSelect
                    class="col-span-5"
                    :options="lovUOM.data.value"
                    name="area_uom"
                    label-key="name"
                    value-key="id"
                    placeholder="Satuan"
                    :floating-label="true"
                  />
                </div>
                <BaseInputSelect
                  :options="optionsStatusKepemilikan"
                  name="ownership_status"
                  placeholder="Status Kepemilikan"
                  :floating-label="true"
                />
                <BaseInputSelect
                  :options="optionsStatusLahan"
                  name="planting_status"
                  placeholder="Status Lahan"
                  :floating-label="true"
                />
                <BaseInputSelect
                  :options="lovProduct.data.value"
                  name="product_id"
                  label-key="name"
                  value-key="id"
                  placeholder="Jenis Produk"
                  :floating-label="true"
                />
                <BaseInputFloat label="Alamat" name="address" type="text" />
              </div>
            </div>

            <div class="flex justify-center gap-x-4 mx-8">
              <BaseButton type="submit" class="w-full font-bold">Simpan</BaseButton>
              <BaseButton @click="closeModal" variant="success" class="w-full font-bold">Kembali</BaseButton>
            </div>
          </form>
        </div>
      </template>
    </BaseModal>

    <BaseModal :show-modal="modalMap" @set-modal="handleModalMap" class="!max-w-5xl">
      <template #modal-content>
        <DetailLahanMap :geo-json="geoJson" />
      </template>
    </BaseModal>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue'
import BaseHeaderTitle from '@/components/BaseHeaderTitle.vue'
import BaseSkeletonText from '@/components/BaseSkeletonText.vue'
import BaseModal from '@/components/BaseModal.vue'
import BaseInputSelect from '@/components/BaseInputSelect.vue'
import BaseInputFloat from '@/components/BaseInputFloat.vue'
import BaseInputFile from '@/components/BaseInputFile.vue'
import DetailLahanMap from './DetailLahanMap.vue'
import { useLahanDetail, useLahanUpdate, useLahanUploadPhoto, useLahanUploadShp } from '@/api/useAset'
import { LahanDetailParams, LahanForm, PetaniListParams } from '@/types/partner'
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { useForm } from 'vee-validate'
import { number, object, string } from 'yup'
import { useKabupaten } from '@/api/useLocalization'
import { usePetaniOptionsList } from '@/api/usePetani'
import { useLovProduct, useLovUOM } from '@/api/useLov'
import { optionsStatusKepemilikan, optionsStatusLahan } from '@/constants/options'
import { push } from 'notivue'

const route = useRoute()

const kabupatenList = useKabupaten()
const paramsPetani = ref<PetaniListParams>({})
const lovPetani = usePetaniOptionsList(paramsPetani)
const lovUOM = useLovUOM()
const lovProduct = useLovProduct()

const updateLahan = useLahanUpdate(Number(route.params.id))
const uploadLahanPhoto = useLahanUploadPhoto()
const uploadLahanShp = useLahanUploadShp()

const idDetail = ref<LahanDetailParams>({ asset_id: Number(route.params.id) })
const lahanDetail = useLahanDetail(idDetail)

watchEffect(() => {
  if (lahanDetail.data.value) {
    paramsPetani.value = {
      kabupaten_id: lahanDetail.data.value[0].kabupaten_id[0],
    }
  }
})

const { handleSubmit, resetForm } = useForm<LahanForm>({
  validationSchema: object({
    employee_id: number().required().label('Nama'),
    coordinates: string().required().label('Lokasi GPS'),
    address: string().required().label('Alamat'),
    ownership_status: string().required().label('Status Kepemilikan'),
    area_ha: number().required().label('Luas Lahan'),
    area_uom: number().required().label('Satuan'),
    planting_status: string().required().label('Status Lahan'),
    harvesting_status: string().required().label('Status Tanam'),
    kabupaten_id: number().required().label('Kabupaten'),
    product_id: number().required().label('Jenis Produk'),
  }),
})

const onSubmit = handleSubmit(async (values) => {
  try {
    const data: any = await updateLahan.mutateAsync(values)

    if (filePhoto.value) {
      await uploadFile(data.data.asset_id)
    }

    if (shpFile.value) {
      await uploadFileShp(data.data.asset_id)
    }

    lahanDetail.refetch()
    closeModal()
    push.success({ message: data.description })
  } catch (error) {
    console.error('Error submitting form:', error)
  }
})

const uploadFile = async (id: number) => {
  try {
    const formData = new FormData()
    formData.append('asset_id', id.toString())
    formData.append('photo', filePhoto.value)

    await uploadLahanPhoto.mutateAsync(formData)
  } catch (error) {
    console.error('Error uploading photo:', error)
  }
}

const uploadFileShp = async (id: number) => {
  try {
    const formData = new FormData()
    formData.append('asset_id', id.toString())
    formData.append('upload', shpFile.value)

    await uploadLahanShp.mutateAsync(formData)
  } catch (error) {
    console.error('Error uploading shp file:', error)
  }
}

const filePhoto = ref()
const lahanPhoto = ref<string | null | undefined>()
const lahanPhotoInput = ref<HTMLInputElement | null>(null)

const triggerLahanPhotoInput = () => {
  lahanPhotoInput.value?.click()
}

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]

  if (file) {
    const fileURL = URL.createObjectURL(file)
    filePhoto.value = file
    lahanPhoto.value = fileURL
  }
}

const handleDeleteLahanPhoto = () => {
  lahanPhoto.value = null
}

const shpFile = ref()
const handleFileSelected = (file: File) => {
  shpFile.value = file
}

const geoJson = ref()

const showLahanMap = (geojson: object | undefined) => {
  geoJson.value = geojson
  modalMap.value = true
}

const handleModalMap = (value: boolean) => {
  modalMap.value = value
}

let modalMap = ref<boolean>(false)

let modal = ref<boolean>(false)
const showModal = () => {
  if (lahanDetail.data.value) {
    const lahanData = lahanDetail.data.value[0]

    lahanPhoto.value = lahanData.asset_image_url

    resetForm({
      values: {
        employee_id: lahanData.employee_id[0],
        coordinates: lahanData.coordinates,
        area_ha: Number(lahanData.area_ha),
        area_uom: lahanData.area_uom[0],
        uom_id: lahanData.area_uom[0],
        ownership_status: lahanData.ownership_status,
        address: lahanData.address,
        kabupaten_id: lahanData.kabupaten_id[0],
        planting_status: lahanData.planting_status,
        harvesting_status: lahanData.harvesting_status,
        product_id: lahanData.product_id[0],
        state_id: 613,
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
</script>

<style>
.profile-image {
  transition: opacity 0.3s ease;
}

.relative-container:hover .profile-image {
  opacity: 0.6;
}

.relative-container:hover .icon-delete {
  color: white;
  display: block;
}
</style>
