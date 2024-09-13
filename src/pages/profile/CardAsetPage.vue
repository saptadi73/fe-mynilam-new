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
        <h1 class="text-center font-bold text-3xl py-4">Aset</h1>
        <div></div>
      </div>
    </div>
    <div class="bg-[#F6FDFF] p-4 rounded-3xl border border-[#015438]">
      <div class="flex flex-row gap-x-5 justify-between">
        <div class="flex flex-row gap-x-2">
          <BaseSearchBar placeholder="Cari nama"></BaseSearchBar>
          <BaseButton>Cari</BaseButton>
          <BaseInputSelect name="kabupaten" :options="options"></BaseInputSelect>
        </div>
        <BaseButton variant="success" icon-position="left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
          Unduh
        </BaseButton>
      </div>
      <hr class="border border-[#015438] mt-3 -ml-4 -mr-4" />
      <div class="grid grid-cols-12 gap-4 mt-2">
        <BaseCard
          v-for="(card, cardIndex) in cardAset"
          :key="cardIndex"
          card-path="profile-agen"
          :card-code="card.code"
          class="col-span-3"
        >
          <template #card-content>
            <div class="flex justify-center pt-2">
              <img class="rounded-xl" src="@/assets/images/aset-image.png" alt="Aset Image" />
            </div>

            <div class="grid grid-cols-12 gap-x-1 pt-2">
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Nama Pemilik</h1>
                <p class="font-bold text-sm">{{ card.petaniName }}</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Luas</h1>
                <p class="font-bold text-sm">{{ card.luas }} Ha</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Lokasi GPS</h1>
                <p class="font-bold text-sm">{{ card.lokasiGps }}</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Status Kepemilikan</h1>
                <p class="font-bold text-sm">{{ card.statusKepemilikan }}</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Kota/Kabupaten</h1>
                <p class="font-bold text-sm">{{ card.kota }}</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Status Tanam</h1>
                <p class="font-bold text-sm">{{ card.statusTanam }}</p>
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
import BaseIcon from '@/components/BaseIcon.vue'
import BaseSearchBar from '@/components/BaseSearchBar.vue'
import BaseInputSelect from '@/components/BaseInputSelect.vue'

const cardAset = reactive([
  {
    code: 'TNM94A2X',
    petaniName: 'Agus Prayitno',
    luas: 5,
    lokasiGps: '-5.572342, 95.321456',
    statusKepemilikan: 'Milik Sendiri',
    kota: 'Aceh Selatan',
    anggotaKeluarga: '4',
    statusTanam: 'Aktif',
  },
  {
    code: 'TNM94A2X',
    petaniName: 'Budi Santoso',
    luas: 5,
    lokasiGps: '-5.572342, 95.321456',
    statusKepemilikan: 'Sewa',
    kota: 'Aceh Selatan',
    anggotaKeluarga: '4',
    statusTanam: 'Aktif',
  },
  {
    code: 'TNM94A2X',
    petaniName: 'Rika Kusuma',
    luas: 5,
    lokasiGps: '-5.572342, 95.321456',
    statusKepemilikan: 'Milik Sendiri',
    kota: 'Aceh Selatan',
    anggotaKeluarga: '4',
    statusTanam: 'Aktif',
  },
  {
    code: 'TNM94A2X',
    petaniName: 'Rika Kusuma',
    luas: 5,
    lokasiGps: '-5.572342, 95.321456',
    statusKepemilikan: 'Sewa',
    kota: 'Aceh Selatan',
    anggotaKeluarga: '4',
    statusTanam: 'Aktif',
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
    label: 'Aktif',
    value: 2,
  },
])
</script>
