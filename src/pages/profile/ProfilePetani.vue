<template>
  <div class="bg-image-wave relative px-5 lg:px-16 py-10">
    <div class="bg-white min-h-screen opacity-90 shadow-md rounded-lg font-cera">
      <img
        class="bg-cover object-cover rounded-t-lg h-60 w-full"
        src="@/assets/images/profile/profile-rectangle-bg.png"
        alt="Background Profile"
      />

      <div v-if="!isLoading" class="absolute w-48 h-48 top-24 left-1/4 md:left-36 bg-white rounded-full p-1 mt-20 z-20">
        <img
          v-if="dataPetani.image === null"
          src="@/assets/images/profile/petani-default.png"
          class="w-full object-cover rounded-xl p-4"
          alt="Petani Image"
        />
        <img v-else :src="dataPetani.image" class="w-full h-full rounded-full object-cover" alt="Profile" />
      </div>

      <ButtonEditProfile @click="showModal" />

      <div class="text-3xl font-bold px-5 lg:px-20 mt-28">
        <p v-if="!isLoading">{{ dataPetani.name }}</p>
        <BaseSkeletonText v-else class="w-48 h-6" />
      </div>

      <div class="grid grid-cols-12 px-5 lg:px-20 pt-5 pb-20">
        <div class="col-span-12 lg:col-span-6">
          <div class="grid grid-cols-12 gap-y-2">
            <div class="col-span-4 font-bold">Alamat</div>
            <div class="col-span-8 font-bold flex items-center">
              : &nbsp; <span v-if="!isLoading">{{ dataPetani.street }}</span>
              <BaseSkeletonText v-else class="w-40 h-4" />
            </div>

            <div class="col-span-4 font-bold">Desa/Kelurahan</div>
            <div class="col-span-8 font-bold flex items-center">
              : &nbsp; <span v-if="!isLoading">{{ dataPetani.kelurahan }}</span>
              <BaseSkeletonText v-else class="w-40 h-4" />
            </div>

            <div class="col-span-4 font-bold">Kecamatan</div>
            <div class="col-span-8 font-bold flex items-center">
              : &nbsp; <span v-if="!isLoading">{{ dataPetani.kecamatan }}</span>
              <BaseSkeletonText v-else class="w-40 h-4" />
            </div>

            <div class="col-span-4 font-bold">Kota/Kabupaten</div>
            <div class="col-span-8 font-bold flex items-center">
              : &nbsp; <span v-if="!isLoading">{{ dataPetani.kabupaten ?? '-' }}</span>
              <BaseSkeletonText v-else class="w-40 h-4" />
            </div>

            <div class="col-span-4 font-bold">Provinsi</div>
            <div class="col-span-8 font-bold flex items-center">
              : &nbsp; <span v-if="!isLoading">{{ dataPetani.provinsi ?? '-' }}</span>
              <BaseSkeletonText v-else class="w-40 h-4" />
            </div>

            <div class="col-span-4 font-bold">Anggota Keluarga</div>
            <div class="col-span-8 font-bold flex items-center">
              : &nbsp; <span v-if="!isLoading">{{ dataPetani.family_members }} Orang</span>
              <BaseSkeletonText v-else class="w-40 h-4" />
            </div>

            <div class="col-span-4 font-bold">Total Asset</div>
            <div class="col-span-8 font-bold text-primary-2 flex items-center">
              : &nbsp;
              <RouterLink v-if="!isLoading" :to="{ name: 'Daftar Aset Petani' }"
                >{{ dataPetani.total_area_ha }} ha</RouterLink
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
            <div class="col-span-8 font-bold flex items-center">
              : &nbsp; <span v-if="!isLoading">{{ dataPetani.organization_status }}</span>
              <BaseSkeletonText v-else class="w-40 h-4" />
            </div>

            <div class="col-span-4 font-bold">Pendidikan</div>
            <div class="col-span-8 font-bold flex items-center">
              : &nbsp; <span v-if="!isLoading">{{ dataPetani.pendidikan ?? '-' }}</span>
              <BaseSkeletonText v-else class="w-40 h-4" />
            </div>

            <div class="col-span-4 font-bold">Surat Kontrak</div>
            <div class="col-span-8 font-bold flex items-center">
              : &nbsp; <span v-if="!isLoading">-</span>
              <BaseSkeletonText v-else class="w-40 h-4" />
            </div>

            <div class="col-span-4 font-bold">Jenis Mitra</div>
            <div class="col-span-8 font-bold flex items-center">
              : &nbsp; <span v-if="!isLoading">{{ dataPetani.ilo_associate }}</span>
              <BaseSkeletonText v-else class="w-40 h-4" />
            </div>

            <div class="col-span-4 font-bold">Email</div>
            <div class="col-span-8 font-bold flex items-center">
              : &nbsp; <span v-if="!isLoading">{{ dataPetani.email }}</span>
              <BaseSkeletonText v-else class="w-40 h-4" />
            </div>

            <div class="col-span-4 font-bold">Total Panen</div>
            <div class="col-span-8 font-bold text-primary-2" :class="isLoading ? 'flex items-center' : ''">
              <span v-if="isLoading"> : &nbsp;</span>
              <template v-if="!isLoading">
                <p>
                  : &nbsp;
                  <RouterLink :to="{ name: 'Daftar Tanam Nilam Petani' }">
                    {{ Math.round(dataPetani.total_oil_quantity) }} kg ({{
                      dataPetani.in_progress_oil_percentage_quantity
                    }}% target panen)</RouterLink
                  >
                </p>

                <ProgressBar :progress="`${dataPetani.in_progress_percentage_quantity}%`" />
              </template>
              <BaseSkeletonText v-else class="w-40 h-4" />
            </div>

            <div class="col-span-4 font-bold">Total Produksi</div>
            <div class="col-span-8 font-bold text-primary-2" :class="isLoading ? 'flex items-center' : ''">
              <span v-if="isLoading"> : &nbsp;</span>
              <template v-if="!isLoading">
                <p>
                  : &nbsp;
                  <RouterLink :to="{ name: 'Daftar Produksi Nilam Petani' }">
                    {{ dataPetani.production_capacity }} kg ({{ dataPetani.in_progress_percentage_quantity }}% target
                    produksi)</RouterLink
                  >
                </p>
                <ProgressBar :progress="`${dataPetani.in_progress_percentage_quantity}%`" />
              </template>
              <BaseSkeletonText v-else class="w-40 h-4" />
            </div>

            <div class="col-span-4 font-bold">Tanam (sekarang)</div>
            <div class="col-span-8 font-bold text-primary-2 flex items-center">
              : &nbsp;
              <template v-if="!isLoading">
                <p>
                  <RouterLink :to="{ name: 'Daftar Tanam Nilam Petani Progress' }">
                    {{ dataPetani.total_planting_quantity }} kg target panen</RouterLink
                  >
                </p>
              </template>
              <BaseSkeletonText v-else class="w-40 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <ModalProfile :modal="modal" @set-modal="handleModal">
      <template #body-form>
        <div class="p-4 md:p-12">
          <form @submit.prevent="onSubmit" class="space-y-4">
            <BaseInputFloat label="Nama" name="nama" type="text" />
            <BaseInputFloat label="Alamat" name="alamat" type="text" />
            <BaseInputFloat label="Desa/Kelurahan" name="desa" type="text" />
            <BaseInputFloat label="Kecamatan" name="kecamatan" type="text" />
            <BaseInputSelect
              name="kota"
              :options="kabupatenList.data.value"
              label-key="name"
              value-key="id"
              placeholder="Kota/Kabupaten"
              :floating-label="true"
            />
            <BaseInputSelect :options="[]" name="provinsi" placeholder="Provinsi" :floating-label="true" />
            <BaseInputFloat label="Anggota Keluarga" name="anggotaKeluarga" type="number" />
            <BaseInputSelect :options="optionsStatus" name="status" placeholder="Status" :floating-label="true" />
            <BaseInputFloat label="Pendidikan" name="pendidikan" type="text" />
            <BaseInputFile
              name="suratKontrak"
              label="Surat Kontrak"
              file-type=".pdf"
              @file-selected="handleFileSuratKontrak"
            ></BaseInputFile>
            <BaseInputSelect
              :options="optionsJenisMitra"
              name="jenisMitra"
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
import ButtonEditProfile from './components/ButtonEditProfile.vue'
import ProgressBar from './components/ProgressBar.vue'
import ModalProfile from './components/ModalProfile.vue'
import BaseInputFloat from '@/components/BaseInputFloat.vue'
import BaseInputSelect from '@/components/BaseInputSelect.vue'
import BaseInputFile from '@/components/BaseInputFile.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseSkeletonText from '@/components/BaseSkeletonText.vue'
import { onMounted, reactive, ref } from 'vue'
import { useForm } from 'vee-validate'
import { object, string, number, mixed } from 'yup'
import { useRoute } from 'vue-router'
import { useHttp } from '@/api/useHttp'
import { useKabupaten } from '@/api/useLocalization'
import type { PetaniProfile } from '@/types/partner'

const route = useRoute()
const kabupatenList = useKabupaten()

let dataPetani = reactive<PetaniProfile>({
  id: 0,
  name: '',
  image: '',
  email: '',
  street: '',
  kelurahan: '',
  kecamatan: '',
  kabupaten: '',
  provinsi: '',
  family_members: 0,
  total_area_ha: 0,
  organization_status: '',
  pendidikan: '',
  ilo_associate: '',
  production_capacity: 0,
  total_oil_quantity: 0,
  total_planting_quantity: 0,
  in_progress_oil_percentage_quantity: 0,
  in_progress_percentage_quantity: 0,
})
const isLoading = ref<boolean>(false)

const getPetani = async () => {
  isLoading.value = true
  const response = await useHttp('/partner/petani/details', {
    user_id: route.params.id,
  })
  const data = await response.data

  dataPetani = {
    ...data,
    image: data.image_1920_url !== false ? data.image_1920_url : null,
    kabupaten: data.kabupaten_id !== false ? data.kabupaten_id[1] : null,
    provinsi: data.state_id !== false ? data.state_id[1] : null,
    pendidikan: data.education_level_id !== false ? data.education_level_id[1] : null,
    production_capacity: data.assets !== false ? data.assets[0].production_capacity : null,
  }

  isLoading.value = false
}

onMounted(() => {
  getPetani()
})

const { handleSubmit, setValues } = useForm({
  validationSchema: object({
    nama: string().required().label('Nama'),
    alamat: string().required().label('Alamat'),
    desa: string().required().label('Desa/Kelurahan'),
    kecamatan: string().required().label('Kecamatan'),
    kota: string().required().label('Kota/Kabupaten'),
    provinsi: string().required().label('Provinsi'),
    anggotaKeluarga: number().required().label('Anggota Keluarga'),
    status: string().required().label('Status'),
    pendidikan: string().required().label('Pendidikan'),
    suratKontrak: mixed().required().label('Surat Kontrak'),
    jenisMitra: string().required().label('Jenis Mitra'),
    email: string().required().label('Email'),
  }),
})

const onSubmit = handleSubmit((values) => {
  console.log(values)
})

let modal = ref<Boolean>(false)

const showModal = () => {
  modal.value = true
  setValues(dataPetani)
}

const closeModal = () => {
  modal.value = false
}

const handleModal = (value: boolean) => {
  modal.value = value
}

const optionsStatus = ref([
  { label: 'Anggota Koperasi', value: 1 },
  { label: 'Non Anggota', value: 2 },
])

const optionsJenisMitra = ref([
  {
    label: 'Agen',
    value: 1,
  },
  {
    label: 'Koperasi',
    value: 2,
  },
])

function handleFileSuratKontrak(file: File) {
  console.log('Selected file:', file)
}
</script>
