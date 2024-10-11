<template>
  <div class="bg-image-wave2 px-5 md:px-16 pb-4">
    <BaseHeaderTitle title="Agen/Koperasi" />
    <div class="bg-[#F6FDFF] p-4 rounded-3xl border border-[#015438]">
      <div class="flex flex-col lg:flex-row gap-y-2 lg:gap-y-0 lg:gap-x-5 justify-start">
        <div class="flex flex-col lg:flex-row gap-y-2 lg:gap-y-0 lg:gap-x-2">
          <BaseSearchBar placeholder="Cari nama"></BaseSearchBar>
          <BaseButton>Cari</BaseButton>
        </div>
        <BaseInputSelect name="kabupaten" :options="options" placeholder="Pilih kabupaten"></BaseInputSelect>
        <BaseInputSelect name="jenis mitra" :options="options2" placeholder="Pilih jenis mitra"></BaseInputSelect>
      </div>
      <hr class="border border-[#015438] mt-3 -ml-4 -mr-4" />
      <div class="grid grid-cols-12 gap-4 mt-2">
        <BaseCardAdd @click="showModal" card-title="Agen" class="col-span-12 md:col-span-6 lg:col-span-3" />
        <BaseCard
          v-for="(card, cardIndex) in cardAgen"
          :key="cardIndex"
          card-path="profile/profile-agen"
          :card-code="card.code"
          class="col-span-12 md:col-span-6 lg:col-span-3"
        >
          <template #card-content>
            <div class="flex justify-center pt-2 h-1/3">
              <img src="@/assets/images/petani-1.jpg" class="w-full object-cover rounded-xl" alt="Petani Image" />
            </div>

            <div class="grid grid-cols-12 gap-x-1 pt-2">
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Nama Petani</h1>
                <p class="font-bold text-sm">{{ card.petaniName }}</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Alamat</h1>
                <p class="font-bold text-sm">{{ card.alamat }}</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Desa/Kelurahan</h1>
                <p class="font-bold text-sm">{{ card.desa }}</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Kecamatan</h1>
                <p class="font-bold text-sm">{{ card.kecamatan }}</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Kota/Kabupaten</h1>
                <p class="font-bold text-sm">{{ card.kota }}</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Provinsi</h1>
                <p class="font-bold text-sm">{{ card.provinsi }}</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Anggota Keluarga</h1>
                <p class="font-bold text-sm">{{ card.anggotaKeluarga }} Orang</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Jenis Mitra</h1>
                <p class="font-bold text-sm">{{ card.jenisMitra }}</p>
              </div>
            </div>
          </template>
        </BaseCard>
      </div>
    </div>

    <ModalProfile :modal="modal" @set-modal="handleModal">
      <template #body-form>
        <div class="p-4 md:p-12">
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <BaseInputFloat label="Nama" name="name" type="text" />
            <BaseInputFloat label="Alamat" name="alamat" type="text" />
            <BaseInputSelect :options="[]" name="desa" placeholder="Desa/Kelurahan" :floating-label="true" />
            <BaseInputSelect :options="[]" name="kecamatan" placeholder="Kecamatan" :floating-label="true" />
            <BaseInputSelect :options="[]" name="kota" placeholder="Kota/Kabupaten" :floating-label="true" />
            <BaseInputSelect :options="[]" name="provinsi" placeholder="Provinsi" :floating-label="true" />
            <BaseInputFloat label="Anggota Keluarga" name="anggota" type="text" />
            <BaseInputSelect :options="optionsStatus" name="status" placeholder="Status" :floating-label="true" />
            <BaseInputFloat label="Pendidikan" name="pendidikan" type="text" />
            <BaseInputFloat label="Koperasi/Agen" name="agen" type="text" />
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
import { reactive, ref } from 'vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseCard from '@/components/BaseCard.vue'
import BaseSearchBar from '@/components/BaseSearchBar.vue'
import BaseInputSelect from '@/components/BaseInputSelect.vue'
import BaseHeaderTitle from '@/components/BaseHeaderTitle.vue'
import BaseCardAdd from '@/components/BaseCardAdd.vue'
import BaseInputFloat from '@/components/BaseInputFloat.vue'
import ModalProfile from './components/ModalProfile.vue'

let modal = ref<Boolean>(false)

const showModal = () => {
  modal.value = true
}

const closeModal = () => {
  modal.value = false
}

const handleModal = (value: boolean) => {
  modal.value = value
}

const handleSubmit = () => {
  console.log('test')
}

const optionsStatus = ref([
  { label: 'On Progress', value: 1 },
  { label: 'Finished', value: 2 },
  { label: 'Failed', value: 3 },
])

const optionsJenisMitra = ref([
  { label: 'Koperasi', value: 1 },
  { label: 'Agen', value: 2 },
])

const cardAgen = reactive([
  {
    code: 'TNM94A2X',
    petaniName: 'Agus Prayitno',
    alamat: 'Batu Aji No.11',
    desa: 'Panton Bili',
    kecamatan: 'Labuhan Haji Timur',
    kota: 'Aceh Selatan',
    provinsi: 'Aceh',
    anggotaKeluarga: '4',
    jenisMitra: 'Koperasi',
  },
  {
    code: 'TNM94A2X',
    petaniName: 'Budi Santoso',
    alamat: 'Batu Aji No.11',
    desa: 'Panton Bili',
    kecamatan: 'Labuhan Haji Timur',
    kota: 'Aceh Selatan',
    provinsi: 'Aceh',
    anggotaKeluarga: '4',
    jenisMitra: 'Koperasi',
  },
  {
    code: 'TNM94A2X',
    petaniName: 'Rika Kusuma',
    alamat: 'Batu Aji No.11',
    desa: 'Panton Bili',
    kecamatan: 'Labuhan Haji Timur',
    kota: 'Aceh Selatan',
    provinsi: 'Aceh',
    anggotaKeluarga: '4',
    jenisMitra: 'Agen',
  },
  {
    code: 'TNM94A2X',
    petaniName: 'Rika Kusuma',
    alamat: 'Batu Aji No.11',
    desa: 'Panton Bili',
    kecamatan: 'Labuhan Haji Timur',
    kota: 'Aceh Selatan',
    provinsi: 'Aceh',
    anggotaKeluarga: '4',
    jenisMitra: 'Agen',
  },
  {
    code: 'TNM94A2X',
    petaniName: 'Rika Kusuma',
    alamat: 'Batu Aji No.11',
    desa: 'Panton Bili',
    kecamatan: 'Labuhan Haji Timur',
    kota: 'Aceh Selatan',
    provinsi: 'Aceh',
    anggotaKeluarga: '4',
    jenisMitra: 'Agen',
  },
  {
    code: 'TNM94A2X',
    petaniName: 'Rika Kusuma',
    alamat: 'Batu Aji No.11',
    desa: 'Panton Bili',
    kecamatan: 'Labuhan Haji Timur',
    kota: 'Aceh Selatan',
    provinsi: 'Aceh',
    anggotaKeluarga: '4',
    jenisMitra: 'Agen',
  },
  {
    code: 'TNM94A2X',
    petaniName: 'Rika Kusuma',
    alamat: 'Batu Aji No.11',
    desa: 'Panton Bili',
    kecamatan: 'Labuhan Haji Timur',
    kota: 'Aceh Selatan',
    provinsi: 'Aceh',
    anggotaKeluarga: '4',
    jenisMitra: 'Agen',
  },
])

const options = ref([
  {
    label: 'Aceh Selatan',
    value: 1,
  },
  {
    label: 'Aceh Utara',
    value: 2,
  },
  {
    label: 'Aceh Tengah',
    value: 3,
  },
])

const options2 = ref([
  {
    label: 'Agen',
    value: 1,
  },
  {
    label: 'Koperasi',
    value: 2,
  },
])
</script>
