<template>
  <div class="bg-image-wave2 px-16">
    <BaseHeaderTitle title="Daftar Produksi Minyak Nilam" />
    <div class="bg-[#F6FDFF] p-4 rounded-3xl border border-[#015438]">
      <div class="grid grid-cols-12 gap-4">
        <BaseCardAdd card-title="Produksi" class="col-span-3" />
        <BaseCard
          v-for="(card, cardIndex) in cardPetani"
          :key="cardIndex"
          card-path="profile/profile-petani"
          :card-code="card.code"
          class="col-span-3"
        >
          <template #card-content>
            <div class="grid grid-cols-12 items-center gap-x-2">
              <div class="col-span-6">
                <img class="rounded-xl" src="@/assets/images/produksi-nilam.jpeg" alt="Produksi Nilam Image" />
              </div>

              <BaseChart
                class="col-span-6"
                :chartId="`Chart ${card.id}`"
                chartType="doughnut"
                :chartData="chartData"
                :chartOptions="chartOptions"
                :chartInnerLabel="`${chartData.datasets[0].data[0]} %`"
              >
                <template #chartTitle>
                  <h1 class="text-center font-bold text-sm mb-2">Persentase Produksi</h1>
                </template>
              </BaseChart>
            </div>

            <div class="grid grid-cols-12 gap-x-1 pt-2">
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Nama Petani</h1>
                <p class="font-bold text-sm">{{ card.petaniName }}</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Lokasi</h1>
                <p class="font-bold text-sm">{{ card.lokasi }} m²</p>
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
import { type ChartData, type ChartOptions } from 'chart.js/auto'
import BaseHeaderTitle from '@/components/BaseHeaderTitle.vue'
import BaseCardAdd from '@/components/BaseCardAdd.vue'
import BaseCard from '@/components/BaseCard.vue'
import BaseChart from '@/components/BaseChart.vue'

import { reactive } from 'vue'

const chartData: ChartData = {
  labels: ['', 'Proses'],
  datasets: [
    {
      label: 'Total Data',
      data: [50, 50],
      backgroundColor: ['#015438', '#20D173'],
      hoverOffset: 4,
    },
  ],
}

const chartOptions: ChartOptions<'doughnut'> = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      display: false,
    },
  },
}

const cardPetani = reactive([
  {
    id: 1,
    code: 'PRD1X7QF',
    petaniName: 'Agus Prayitno',
    lokasi: '4.747883, 96.748811',
    mulaiProduksi: '17 April 2024',
    akhirProduksi: '17 Agustus 2024',
    estimasiPanen: '5000',
    alamat: 'Timang Rasa, Timang Gajah, Bener Meriah Regency, Aceh',
    status: 'progress',
  },
  {
    id: 2,
    code: 'PRD1X7QF',
    petaniName: 'Budi Santoso',
    lokasi: '4.747883, 96.748811',
    mulaiProduksi: '17 April 2024',
    akhirProduksi: '17 Agustus 2024',
    estimasiPanen: '5000',
    alamat: 'Timang Rasa, Timang Gajah, Bener Meriah Regency, Aceh',
    status: 'progress',
  },
  {
    id: 3,
    code: 'PRD1X7QF',
    petaniName: 'Rika Kusuma',
    lokasi: '4.747883, 96.748811',
    mulaiProduksi: '17 April 2024',
    akhirProduksi: '17 Agustus 2024',
    estimasiPanen: '5000',
    alamat: 'Timang Rasa, Timang Gajah, Bener Meriah Regency, Aceh',
    status: 'progress',
  },
  {
    id: 4,
    code: 'PRD1X7QF',
    petaniName: 'Rika Kusuma',
    lokasi: '4.747883, 96.748811',
    mulaiProduksi: '17 April 2024',
    akhirProduksi: '17 Agustus 2024',
    estimasiPanen: '5000',
    alamat: 'Timang Rasa, Timang Gajah, Bener Meriah Regency, Aceh',
    status: 'progress',
  },
  {
    id: 5,
    code: 'PRD1X7QF',
    petaniName: 'Rika Kusuma',
    lokasi: '4.747883, 96.748811',
    mulaiProduksi: '17 April 2024',
    akhirProduksi: '17 Agustus 2024',
    estimasiPanen: '5000',
    alamat: 'Timang Rasa, Timang Gajah, Bener Meriah Regency, Aceh',
    status: 'progress',
  },
  {
    id: 6,
    code: 'PRD1X7QF',
    petaniName: 'Rika Kusuma',
    lokasi: '4.747883, 96.748811',
    mulaiProduksi: '17 April 2024',
    akhirProduksi: '17 Agustus 2024',
    estimasiPanen: '5000',
    alamat: 'Timang Rasa, Timang Gajah, Bener Meriah Regency, Aceh',
    status: 'progress',
  },
  {
    id: 7,
    code: 'PRD1X7QF',
    petaniName: 'Rika Kusuma',
    lokasi: '4.747883, 96.748811',
    mulaiProduksi: '17 April 2024',
    akhirProduksi: '17 Agustus 2024',
    estimasiPanen: '5000',
    alamat: 'Timang Rasa, Timang Gajah, Bener Meriah Regency, Aceh',
    status: 'progress',
  },
])
</script>
