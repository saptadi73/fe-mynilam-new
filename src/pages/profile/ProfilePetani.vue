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
            <div class="col-span-8 font-bold text-primary-2">
              : &nbsp;
              <RouterLink :to="{ name: 'Daftar Aset Petani' }">{{ dataPetani.totalAset }} ha</RouterLink>
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
              : &nbsp; <span v-if="!isLoading">{{ dataPetani.education_level_id ?? '-' }}</span>
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
            <div class="col-span-8 font-bold text-primary-2">
              <p>
                :
                <RouterLink :to="{ name: 'Daftar Tanam Nilam Petani' }">&nbsp; 65.000 kg (35% target panen)</RouterLink>
              </p>
              <ProgressBar progress="35%" />
            </div>

            <div class="col-span-4 font-bold">Total Produksi</div>
            <div class="col-span-8 font-bold text-primary-2">
              <p>
                :
                <RouterLink :to="{ name: 'Daftar Produksi Nilam Petani' }"
                  >&nbsp; 523 kg (80% target produksi)</RouterLink
                >
              </p>
              <ProgressBar progress="80% " />
            </div>

            <div class="col-span-4 font-bold">Tanam (sekarang)</div>
            <div class="col-span-8 font-bold text-primary-2">
              <p>
                :
                <RouterLink :to="{ name: 'Daftar Tanam Nilam Petani Progress' }"
                  >&nbsp; 5 ha (500 kg target panen)</RouterLink
                >
              </p>
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
            <BaseInputSelect :options="[]" name="desa" placeholder="Desa/Kelurahan" :floating-label="true" />
            <BaseInputSelect :options="[]" name="kecamatan" placeholder="Kecamatan" :floating-label="true" />
            <BaseInputSelect :options="[]" name="kota" placeholder="Kota/Kabupaten" :floating-label="true" />
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
import BaseButton from '@/components/BaseButton.vue'
import BaseSkeletonText from '@/components/BaseSkeletonText.vue'
import { onMounted, reactive, ref } from 'vue'
import { useForm } from 'vee-validate'
import { object, string, number, mixed } from 'yup'
import { useRoute } from 'vue-router'
import { useHttp } from '@/api/useHttp'
import type { PetaniProfile } from '@/types/petani'

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
  family_members: '',
  totalAset: '23',
  organization_status: '',
  education_level_id: '',
  ilo_associate: '',
})
const isLoading = ref<boolean>(false)

const route = useRoute()

const getPetani = async () => {
  isLoading.value = true
  const response = await useHttp('/partner/petani/details', {
    user_id: route.params.id,
  })
  const petaniData = await response.data

  dataPetani = petaniData.map(
    (petani: { image_1920: string | boolean; kabupaten_id: any | boolean; education_level_id: string | boolean }) => ({
      ...petani,
      image: petani.image_1920 !== false ? `data:image/png;base64,${petani.image_1920}` : null,
      kabupaten: petani.kabupaten_id !== false ? petani.kabupaten_id[1] : null,
      education_level_id: petani.education_level_id !== false ? petani.education_level_id : null,
    })
  )[0]

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
