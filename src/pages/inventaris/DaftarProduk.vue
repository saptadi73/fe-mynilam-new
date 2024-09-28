<template>
  <div class="bg-image-wave2">
    <BaseHeaderTitle title="Daftar Produk Minyak Nilam" />
    <div class="bg-[#F6FDFF] p-4 rounded-3xl border border-[#015438]">
      <div class="flex flex-row gap-x-5 justify-start">
        <div class="flex flex-row gap-x-2">
          <BaseSearchBar placeholder="Cari nama"></BaseSearchBar>
          <BaseButton>Cari</BaseButton>
        </div>
        <BaseInputSelect name="kabupaten" :options="options" placeholder="Pilih kabupaten"></BaseInputSelect>
        <BaseButton variant="success" icon-position="right">
          Scan
          <BaseIcon name="scan" />
        </BaseButton>
      </div>
      <hr class="border border-[#015438] mt-3 -ml-4 -mr-4" />
      <div class="grid grid-cols-12 gap-4 mt-4">
        <BaseCardAdd card-title="Produksi" class="col-span-3" />
        <BaseCard
          v-for="(card, cardIndex) in cardPetani"
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
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Nama Produk</h1>
                <p class="font-bold text-sm">{{ card.namaProduk }}</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Nama Petani</h1>
                <p class="font-bold text-sm">{{ card.namaPetani }}</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Nama Pembeli</h1>
                <p class="font-bold text-sm">{{ card.namaPembeli }}</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Jumlah</h1>
                <p class="font-bold text-sm">{{ card.jumlah }} kg</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Harga</h1>
                <p class="font-bold text-sm">Rp {{ card.harga }}</p>
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
import BaseIcon from '@/components/BaseIcon.vue'

import { reactive, ref } from 'vue'

const cardPetani = reactive([
  {
    id: 1,
    code: 'PRD1X7QF',
    namaProduk: 'Minyak Nilam',
    namaPetani: 'Agus Prayitno',
    namaPembeli: 'Siti Nurhaliza',
    jumlah: '3',
    harga: '3000000',
  },
  {
    id: 2,
    code: 'PRD1X7QF',
    namaProduk: 'Minyak Nilam',
    namaPetani: 'Budi Santoso',
    namaPembeli: 'Siti Nurhaliza',
    jumlah: '3',
    harga: '3000000',
  },
  {
    id: 3,
    code: 'PRD1X7QF',
    namaProduk: 'Minyak Nilam',
    namaPetani: 'Rika Kusuma',
    namaPembeli: 'Siti Nurhaliza',
    jumlah: '3',
    harga: '3000000',
  },
  {
    id: 4,
    code: 'PRD1X7QF',
    namaProduk: 'Minyak Nilam',
    namaPetani: 'Rika Kusuma',
    namaPembeli: 'Siti Nurhaliza',
    jumlah: '3',
    harga: '3000000',
  },
  {
    id: 5,
    code: 'PRD1X7QF',
    namaProduk: 'Minyak Nilam',
    namaPetani: 'Rika Kusuma',
    namaPembeli: 'Siti Nurhaliza',
    jumlah: '3',
    harga: '3000000',
  },
  {
    id: 6,
    code: 'PRD1X7QF',
    namaProduk: 'Minyak Nilam',
    namaPetani: 'Rika Kusuma',
    namaPembeli: 'Siti Nurhaliza',
    jumlah: '3',
    harga: '3000000',
  },
  {
    id: 7,
    code: 'PRD1X7QF',
    namaProduk: 'Minyak Nilam',
    namaPetani: 'Rika Kusuma',
    namaPembeli: 'Siti Nurhaliza',
    jumlah: '3',
    harga: '3000000',
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
