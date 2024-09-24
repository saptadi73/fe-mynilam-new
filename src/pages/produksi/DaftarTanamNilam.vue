<template>
  <div class="bg-image-wave2">
    <BaseHeaderTitle title="Daftar Tanam" />
    <div class="bg-[#F6FDFF] p-4 rounded-3xl border border-[#015438]">
      <div class="grid grid-cols-12 gap-4">
        <BaseCardAdd card-title="Nilam" class="col-span-3" />
        <BaseCard
          v-for="(card, cardIndex) in cardPetani"
          :key="cardIndex"
          card-path="profile/profile-petani"
          :card-code="card.code"
          class="col-span-3"
        >
          <template #card-content>
            <div class="flex justify-center pt-2">
              <img class="rounded-xl" src="@/assets/images/nilam.jpeg" alt="Nilam Image" />
            </div>

            <div class="grid grid-cols-12 gap-x-1 pt-2">
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Nama Petani</h1>
                <p class="font-bold text-sm">{{ card.petaniName }}</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Luas Lahan</h1>
                <p class="font-bold text-sm">{{ card.luasLahan }} m²</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Mulai Produksi</h1>
                <p class="font-bold text-sm">{{ card.mulaiProduksi }}</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Akhir Produksi</h1>
                <p class="font-bold text-sm">{{ card.akhirProduksi }}</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Estimasi Panen</h1>
                <p class="font-bold text-sm">{{ card.estimasiPanen }} kg</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Lokasi</h1>
                <p class="font-bold text-sm">{{ card.lokasi }}</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Alamat</h1>
                <p class="font-bold text-sm">{{ card.alamat }}</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Status</h1>
                <p
                  v-if="card.status == 'progress'"
                  class="bg-[#015438] text-white font-bold text-sm rounded-lg inline-block px-2.5 py-1"
                >
                  On Progress
                </p>
              </div>
            </div>
          </template>
        </BaseCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseHeaderTitle from '@/components/BaseHeaderTitle.vue'
import BaseCardAdd from '@/components/BaseCardAdd.vue'
import BaseCard from '@/components/BaseCard.vue'

import { reactive } from 'vue'

const cardPetani = reactive([
  {
    code: 'TNM94A2X',
    petaniName: 'Agus Prayitno',
    luasLahan: '1000',
    mulaiProduksi: '17 April 2024',
    akhirProduksi: '17 Agustus 2024',
    estimasiPanen: '5000',
    lokasi: '4.747883, 96.748811',
    alamat: 'Timang Rasa, Timang Gajah, Bener Meriah Regency, Aceh',
    status: 'progress',
  },
  {
    code: 'TNM94A2X',
    petaniName: 'Budi Santoso',
    luasLahan: '1000',
    mulaiProduksi: '17 April 2024',
    akhirProduksi: '17 Agustus 2024',
    estimasiPanen: '5000',
    lokasi: '4.747883, 96.748811',
    alamat: 'Timang Rasa, Timang Gajah, Bener Meriah Regency, Aceh',
    status: 'progress',
  },
  {
    code: 'TNM94A2X',
    petaniName: 'Rika Kusuma',
    luasLahan: '1000',
    mulaiProduksi: '17 April 2024',
    akhirProduksi: '17 Agustus 2024',
    estimasiPanen: '5000',
    lokasi: '4.747883, 96.748811',
    alamat: 'Timang Rasa, Timang Gajah, Bener Meriah Regency, Aceh',
    status: 'progress',
  },
  {
    code: 'TNM94A2X',
    petaniName: 'Rika Kusuma',
    luasLahan: '1000',
    mulaiProduksi: '17 April 2024',
    akhirProduksi: '17 Agustus 2024',
    estimasiPanen: '5000',
    lokasi: '4.747883, 96.748811',
    alamat: 'Timang Rasa, Timang Gajah, Bener Meriah Regency, Aceh',
    status: 'progress',
  },
  {
    code: 'TNM94A2X',
    petaniName: 'Rika Kusuma',
    luasLahan: '1000',
    mulaiProduksi: '17 April 2024',
    akhirProduksi: '17 Agustus 2024',
    estimasiPanen: '5000',
    lokasi: '4.747883, 96.748811',
    alamat: 'Timang Rasa, Timang Gajah, Bener Meriah Regency, Aceh',
    status: 'progress',
  },
  {
    code: 'TNM94A2X',
    petaniName: 'Rika Kusuma',
    luasLahan: '1000',
    mulaiProduksi: '17 April 2024',
    akhirProduksi: '17 Agustus 2024',
    estimasiPanen: '5000',
    lokasi: '4.747883, 96.748811',
    alamat: 'Timang Rasa, Timang Gajah, Bener Meriah Regency, Aceh',
    status: 'progress',
  },
  {
    code: 'TNM94A2X',
    petaniName: 'Rika Kusuma',
    luasLahan: '1000',
    mulaiProduksi: '17 April 2024',
    akhirProduksi: '17 Agustus 2024',
    estimasiPanen: '5000',
    lokasi: '4.747883, 96.748811',
    alamat: 'Timang Rasa, Timang Gajah, Bener Meriah Regency, Aceh',
    status: 'progress',
  },
])
</script>
