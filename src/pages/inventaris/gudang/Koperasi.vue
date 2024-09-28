<template>
  <div class="bg-image-wave2">
    <BaseHeaderTitle title="Koperasi" />
    <div class="bg-[#F6FDFF] p-4 rounded-3xl border border-[#015438]">
      <div class="flex flex-row gap-x-5 justify-start">
        <div class="flex flex-row gap-x-2">
          <BaseSearchBar placeholder="Cari Nama Agen"></BaseSearchBar>
          <BaseButton>Cari</BaseButton>
        </div>
        <BaseInputSelect name="kabupaten" :options="options" placeholder="Pilih kabupaten"></BaseInputSelect>
      </div>
      <hr class="border border-[#015438] mt-3 -ml-4 -mr-4" />
      <div class="grid grid-cols-12 gap-4 mt-4">
        <BaseCardAdd card-title="Agen" class="col-span-3" />
        <BaseCard
          v-for="(card, cardIndex) in cardKoperasi"
          :key="cardIndex"
          card-path="profile/profile-petani"
          :card-code="card.code"
          class="col-span-3"
        >
          <template #card-content>
            <div class="flex justify-center pt-2">
              <img class="rounded-xl" src="@/assets/images/nilam.jpeg" alt="Produksi Nilam Image" />
            </div>

            <div class="grid grid-cols-12 gap-x-1 pt-2">
              <div class="col-span-12 pt-2">
                <h1 class="text-sm">Nama Agen</h1>
                <p class="font-bold text-sm">{{ card.namaAgen }}</p>
              </div>
              <div class="col-span-12 pt-2">
                <h1 class="text-sm">Kota/Kabupaten</h1>
                <p class="font-bold text-sm">{{ card.kota }}</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Produk Tersedia</h1>
                <p class="font-bold text-sm text-primary-3">{{ card.produkTersedia }} kg</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Produk Terjual</h1>
                <p class="font-bold text-sm text-primary-2">{{ card.produkTerjual }} kg</p>
              </div>
              <div class="col-span-12 pt-2">
                <h1 class="text-sm">Alamat</h1>
                <p class="font-bold text-sm">Rp {{ card.alamat }}</p>
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
import BaseSearchBar from '@/components/BaseSearchBar.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseInputSelect from '@/components/BaseInputSelect.vue'
import BaseCardAdd from '@/components/BaseCardAdd.vue'
import BaseCard from '@/components/BaseCard.vue'

import { reactive, ref } from 'vue'

const cardKoperasi = reactive([
  {
    id: 1,
    code: 'PRD1X7QF',
    namaAgen: 'Agus Prayitno',
    kota: 'Kabupaten Gayo Luas',
    produkTersedia: '20000',
    produkTerjual: '10000',
    alamat: 'Timang Rasa, Timang Gajah, Bener Meriah Regency, Aceh',
  },
  {
    id: 2,
    code: 'PRD1X7QF',
    namaAgen: 'Budi Santoso',
    kota: 'Kabupaten Gayo Luas',
    produkTersedia: '20000',
    produkTerjual: '10000',
    alamat: 'Timang Rasa, Timang Gajah, Bener Meriah Regency, Aceh',
  },
  {
    id: 3,
    code: 'PRD1X7QF',
    namaAgen: 'Rika Kusuma',
    kota: 'Kabupaten Gayo Luas',
    produkTersedia: '20000',
    produkTerjual: '10000',
    alamat: 'Timang Rasa, Timang Gajah, Bener Meriah Regency, Aceh',
  },
  {
    id: 4,
    code: 'PRD1X7QF',
    namaAgen: 'Rika Kusuma',
    kota: 'Kabupaten Gayo Luas',
    produkTersedia: '20000',
    produkTerjual: '10000',
    alamat: 'Timang Rasa, Timang Gajah, Bener Meriah Regency, Aceh',
  },
  {
    id: 5,
    code: 'PRD1X7QF',
    namaAgen: 'Rika Kusuma',
    kota: 'Kabupaten Gayo Luas',
    produkTersedia: '20000',
    produkTerjual: '10000',
    alamat: 'Timang Rasa, Timang Gajah, Bener Meriah Regency, Aceh',
  },
  {
    id: 6,
    code: 'PRD1X7QF',
    namaAgen: 'Rika Kusuma',
    kota: 'Kabupaten Gayo Luas',
    produkTersedia: '20000',
    produkTerjual: '10000',
    alamat: 'Timang Rasa, Timang Gajah, Bener Meriah Regency, Aceh',
  },
  {
    id: 7,
    code: 'PRD1X7QF',
    namaAgen: 'Rika Kusuma',
    kota: 'Kabupaten Gayo Luas',
    produkTersedia: '20000',
    produkTerjual: '10000',
    alamat: 'Timang Rasa, Timang Gajah, Bener Meriah Regency, Aceh',
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
</script>
