<template>
  <div class="container mx-auto">
    <div class="flex flex-col items-center">
      <div class="flex justify-between items-center w-full py-2">
        <div>
          <BaseButton @click="$router.back()" icon-position="left">
            <BaseIcon name="arrow-left" />
            Kembali
          </BaseButton>
        </div>
        <h1 class="text-center font-bold text-3xl py-4">Petani</h1>
        <div></div>
      </div>
    </div>
    <div class="bg-[#F6FDFF] p-4 rounded-3xl border border-[#015438]">
      <div>
        <BaseButton>Cari</BaseButton>
      </div>
      <hr class="border border-[#015438] mt-3 -ml-4 -mr-4" />
      <div class="grid grid-cols-12 gap-4 mt-2">
        <BaseCard v-for="(card, cardIndex) in cardPetani" :key="cardIndex" :card-code="card.code" class="col-span-3">
          <template #card-content>
            <div class="flex justify-center pt-2">
              <img class="rounded-xl" src="../assets/images/petani-image.png" alt="Petani Image" />
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
                <h1 class="text-sm">Surat Kontrak</h1>
                <p class="font-bold text-sm">{{ card.suratKontrak }}</p>
              </div>
            </div>
          </template>
        </BaseCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import BaseButton from '../components/BaseButton.vue'
import BaseCard from '../components/BaseCard.vue'
import BaseIcon from '../components/BaseIcon.vue'

const cardPetani = reactive([
  {
    code: 'TNM94A2X',
    petaniName: 'Agus Prayitno',
    alamat: 'Batu Aji No.11',
    desa: 'Panton Bili',
    kecamatan: 'Labuhan Haji Timur',
    kota: 'Aceh Selatan',
    provinsi: 'Aceh',
    anggotaKeluarga: '4',
    suratKontrak: '-',
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
    suratKontrak: '-',
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
    suratKontrak: '-',
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
    suratKontrak: '-',
  },
])
</script>
