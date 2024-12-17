<template>
  <div class="bg-image-wave2 px-5 md:px-16 pb-4">
    <BaseHeaderTitle title="Lahan" />
    <div class="bg-[#F6FDFF] p-4 rounded-3xl border border-[#015438]">
      <div class="flex flex-col lg:flex-row gap-y-2 lg:gap-y-0 lg:gap-x-5 justify-between">
        <div class="flex flex-col lg:flex-row gap-y-2 lg:gap-y-0 lg:gap-x-2">
          <BaseSearchBar v-model="search" placeholder="Cari nama"></BaseSearchBar>
          <BaseButton @click="handleParamValue">Cari</BaseButton>
        </div>
        <BaseButton variant="success" icon-position="left">
          <BaseIcon name="download" />
          Unduh
        </BaseButton>
      </div>
      <hr class="border border-[#015438] mt-3 -ml-4 -mr-4" />
      <div class="grid grid-cols-12 gap-4 mt-2">
        <BaseCardAdd @click="showModal" card-title="Lahan" class="col-span-12 md:col-span-6 lg:col-span-3" />
        <BaseSkeletonCard
          :row="3"
          :no-title="true"
          v-if="asetList.isLoading.value"
          v-for="n in 3"
          :key="n"
          class="col-span-12 md:col-span-6 lg:col-span-3"
        />
        <template v-else>
          <div class="col-span-9 self-center text-center text-gray-600" v-if="asetList.data.value === null">
            Tidak ada data untuk ditampilkan
          </div>

          <BaseCard
            v-for="(card, cardIndex) in asetList.data.value"
            :key="cardIndex"
            :card-id="card.id"
            :card-code="card.code"
            card-path="detail-lahan"
            class="col-span-12 md:col-span-6 lg:col-span-3"
          >
            <template #card-content>
              <div class="flex justify-center pt-2 h-2/5">
                <BaseNoImage v-if="!card.asset_image_url" />

                <img
                  v-else
                  class="w-full object-cover rounded-xl border border-primary-border"
                  :src="card.asset_image_url"
                  alt="Foto Lahan"
                />
              </div>

              <div class="grid grid-cols-12 gap-x-1 mt-4">
                <div class="col-span-6 pt-2">
                  <h1 class="text-sm">Nama Pemilik</h1>
                  <p class="font-bold text-sm">{{ card.employee_id[1] }}</p>
                </div>
                <div class="col-span-6 pt-2">
                  <h1 class="text-sm">Luas</h1>
                  <p class="font-bold text-sm">{{ card.area_ha }} {{ card.uom_id[1] }}</p>
                </div>
                <div class="col-span-6 pt-2">
                  <h1 class="text-sm">Lokasi GPS</h1>
                  <p class="font-bold text-sm">{{ card.coordinates }}</p>
                </div>
                <div class="col-span-6 pt-2">
                  <h1 class="text-sm">Status Kepemilikan</h1>
                  <p class="font-bold text-sm">{{ card.ownership_status }}</p>
                </div>
                <div class="col-span-6 pt-2">
                  <h1 class="text-sm">Kota/Kabupaten</h1>
                  <p class="font-bold text-sm">{{ card.kabupaten_id[1] }}</p>
                </div>
                <div class="col-span-6 pt-2">
                  <h1 class="text-sm">Status Lahan</h1>
                  <p class="font-bold text-sm capitalize">{{ card.planting_status }}</p>
                </div>
              </div>
            </template>
          </BaseCard>
        </template>
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
                </div>

                <div class="col-span-12 mt-3">
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseCard from '@/components/BaseCard.vue'
import BaseSearchBar from '@/components/BaseSearchBar.vue'
import BaseInputSelect from '@/components/BaseInputSelect.vue'
import BaseHeaderTitle from '@/components/BaseHeaderTitle.vue'
import BaseIcon from '@/components/BaseIcon.vue'
import BaseCardAdd from '@/components/BaseCardAdd.vue'
import BaseSkeletonCard from '@/components/BaseSkeletonCard.vue'
import BaseModal from '@/components/BaseModal.vue'
import BaseInputFloat from '@/components/BaseInputFloat.vue'
import BaseNoImage from '@/components/BaseNoImage.vue'
import { useRoute } from 'vue-router'
import { useKabupaten } from '@/api/useLocalization'
import { useAsetList, useLahanCreate, useLahanUploadPhoto } from '@/api/useAset'
import type { DaftarAsetParams, LahanForm, PetaniListParams } from '@/types/partner'
import { optionsStatusKepemilikan, optionsStatusLahan } from '@/constants/options'
import { usePetaniOptionsList, useUOMList } from '@/api/usePetani'
import { useLovProduct } from '@/api/useLov'
import { useForm } from 'vee-validate'
import { number, object, string } from 'yup'
import { push } from 'notivue'

const route = useRoute()
const daerah = route.params.daerah
const search = ref<string>('')

const kabupatenList = useKabupaten()
const lovProduct = useLovProduct()

const params = ref<DaftarAsetParams>({})
const asetList = useAsetList(params)

const paramsPetani = ref<PetaniListParams>({})
const lovPetani = usePetaniOptionsList(paramsPetani)
const lovUOM = useUOMList()

const createLahan = useLahanCreate()
const uploadLahanPhoto = useLahanUploadPhoto()

const handleParamValue = async () => {
  const selectedKabupaten = kabupatenList.data.value?.find((item) => item.name === daerah)

  if (selectedKabupaten) {
    params.value = {
      kabupaten_id: selectedKabupaten?.id,
      name: search.value || undefined,
    }

    paramsPetani.value = {
      kabupaten_id: selectedKabupaten?.id,
    }
  }
}

watch(kabupatenList.data, handleParamValue)

onMounted(() => {
  handleParamValue()
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
  values.uom_id = values.area_uom
  try {
    const data: any = await createLahan.mutateAsync(values)

    if (filePhoto.value) {
      await uploadFile(data.data.asset_id)
    }

    asetList.refetch()
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

let modal = ref<boolean>(false)

const showModal = () => {
  resetForm({
    values: {
      kabupaten_id: kabupatenList.data.value?.find((item) => item.name === daerah)?.id,
      state_id: 613,
    },
  })

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
