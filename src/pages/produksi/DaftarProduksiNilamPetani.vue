<template>
  <div class="bg-image-wave2 px-16">
    <BaseHeaderTitle title="Daftar Produksi Nilam" />
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
            <div class="grid grid-cols-12 items-center gap-x-2">
              <div class="col-span-6 h-40 flex items-center justify-center">
                <img class="rounded-xl h-full object-cover" src="@/assets/images/nilam.jpeg" alt="Nilam Image" />
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
                <h1 class="text-sm">Jumlah Nilam</h1>
                <p class="font-bold text-sm">{{ card.jumlahNilam }} kg</p>
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
                  v-if="card.status == 'done'"
                  class="bg-primary text-white font-bold text-sm rounded-lg inline-block px-2.5 py-1"
                >
                  Done
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
      data: [100, 0],
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
    code: 'PNNUTX231',
    petaniName: 'Bagas Adi Rukmana',
    jumlahNilam: '12.000',
    mulaiProduksi: '12 Januari 2003',
    akhirProduksi: '30 Mei 2023',
    estimasiPanen: '267',
    lokasi: '4.747883, 96.748811',
    alamat: 'Timang Rasa, Timang Gajah, Bener Meriah Regency, Aceh',
    status: 'done',
  },
  {
    id: 2,
    code: 'PNN61528X',
    petaniName: 'Bagas Adi Rukmana',
    jumlahNilam: '11.200',
    mulaiProduksi: '16 Juni 2023',
    akhirProduksi: '20 Januari 2023',
    estimasiPanen: '255',
    lokasi: '4.747883, 96.748811',
    alamat: 'Timang Rasa, Timang Gajah, Bener Meriah Regency, Aceh',
    status: 'done',
  },
])
</script>
