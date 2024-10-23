<template>
  <div class="bg-image-wave relative px-5 lg:px-16 py-10">
    <div class="bg-white min-h-screen opacity-90 shadow-md rounded-lg font-cera">
      <img
        class="bg-cover object-cover rounded-t-lg h-60 w-full"
        src="@/assets/images/profile/profile-rectangle-bg.png"
        alt="Background Profile"
      />

      <div class="absolute top-24 left-1/4 md:left-36 bg-white rounded-full p-1.5 mt-20 z-20">
        <img src="@/assets/images/profile/profile-petani.png" alt="Profile" />
      </div>

      <ButtonEditProfile @click="showModal" />

      <div class="text-3xl font-bold px-5 lg:px-20 mt-28">Bagas Adi Rukmana</div>
      <div class="grid grid-cols-12 px-5 lg:px-20 pt-5 pb-20">
        <div class="col-span-12 lg:col-span-6">
          <div class="grid grid-cols-12 gap-y-2">
            <div class="col-span-4 font-bold">Alamat</div>
            <div class="col-span-8 font-bold">: &nbsp; {{ dataPetani.alamat }}</div>

            <div class="col-span-4 font-bold">Desa/Kelurahan</div>
            <div class="col-span-8 font-bold">: &nbsp; {{ dataPetani.desa }}</div>

            <div class="col-span-4 font-bold">Kecamatan</div>
            <div class="col-span-8 font-bold">: &nbsp; {{ dataPetani.kecamatan }}</div>

            <div class="col-span-4 font-bold">Kota/Kabupaten</div>
            <div class="col-span-8 font-bold">: &nbsp; {{ dataPetani.kota }}</div>

            <div class="col-span-4 font-bold">Provinsi</div>
            <div class="col-span-8 font-bold">: &nbsp; {{ dataPetani.provinsi }}</div>

            <div class="col-span-4 font-bold">Anggota Keluarga</div>
            <div class="col-span-8 font-bold">: &nbsp; {{ dataPetani.anggotaKeluarga }} Orang</div>

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
            <div class="col-span-8 font-bold">: &nbsp; {{ dataPetani.status }}</div>

            <div class="col-span-4 font-bold">Pendidikan</div>
            <div class="col-span-8 font-bold">: &nbsp; {{ dataPetani.pendidikan }}</div>

            <div class="col-span-4 font-bold">Surat Kontrak</div>
            <div class="col-span-8 font-bold">: &nbsp; {{ dataPetani.suratKontrak }}</div>

            <div class="col-span-4 font-bold">Jenis Mitra</div>
            <div class="col-span-8 font-bold">: &nbsp; {{ dataPetani.jenisMitra }}</div>

            <div class="col-span-4 font-bold">Email</div>
            <div class="col-span-8 font-bold">: &nbsp; {{ dataPetani.email }}</div>

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
import { reactive, ref } from 'vue'
import { useForm } from 'vee-validate'
import { object, string, number, mixed } from 'yup'

const dataPetani = reactive({
  nama: 'Bagas Adi Rukmana',
  alamat: 'Batu aji No. 10',
  desa: 'Desa Panton Bili',
  kecamatan: 'Kecamatan Timang Rasa',
  kota: 'Kabupaten Bener Meriah',
  provinsi: 'Aceh',
  anggotaKeluarga: '5',
  totalAset: '23',
  status: 'Anggota Koperasi',
  pendidikan: 'S-1 Manajemen Pertanian',
  suratKontrak: '-',
  jenisMitra: 'Koperasi',
  email: 'bagas@gmail.com',
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
