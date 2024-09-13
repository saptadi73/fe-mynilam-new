<template>
  <div class="container mx-auto">
    <BaseHeaderTitle title="Aset" />
    <div class="bg-[#F6FDFF] p-4 rounded-3xl border border-[#015438]">
      <div class="flex flex-row gap-x-5 justify-between">
        <div class="flex flex-row gap-x-2">
          <BaseSearchBar placeholder="Cari nama"></BaseSearchBar>
          <BaseButton>Cari</BaseButton>
          <BaseInputSelect name="kabupaten" :options="options" placeholder="Pilih Kabupaten"></BaseInputSelect>
        </div>
        <BaseButton variant="success" icon-position="left">
          <BaseIcon name="download" />
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
import BaseSearchBar from '@/components/BaseSearchBar.vue'
import BaseInputSelect from '@/components/BaseInputSelect.vue'
import BaseHeaderTitle from '@/components/BaseHeaderTitle.vue'
import BaseIcon from '@/components/BaseIcon.vue'

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
