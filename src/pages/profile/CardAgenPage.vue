<template>
  <div class="bg-image-wave2 pb-4">
    <BaseHeaderTitle title="Agen/Koperasi" />
    <div class="bg-[#F6FDFF] p-4 rounded-3xl border border-[#015438]">
      <div class="flex flex-row gap-x-5 justify-start">
        <div class="flex flex-row gap-x-2">
          <BaseSearchBar placeholder="Cari nama"></BaseSearchBar>
          <BaseButton>Cari</BaseButton>
        </div>
        <BaseInputSelect name="kabupaten" :options="options" placeholder="Pilih kabupaten"></BaseInputSelect>
        <BaseInputSelect name="jenis mitra" :options="options2" placeholder="Pilih jenis mitra"></BaseInputSelect>
      </div>
      <hr class="border border-[#015438] mt-3 -ml-4 -mr-4" />
      <div class="grid grid-cols-12 gap-4 mt-2">
        <BaseCardAdd card-title="Agen" class="col-span-3" />
        <BaseCard
          v-for="(card, cardIndex) in cardAgen"
          :key="cardIndex"
          card-path="profile/profile-agen"
          :card-code="card.code"
          class="col-span-3"
        >
          <template #card-content>
            <div class="flex justify-center pt-2">
              <img class="rounded-xl" src="@/assets/images/petani-image.png" alt="Petani Image" />
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
