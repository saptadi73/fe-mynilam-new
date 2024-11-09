<template>
  <div class="bg-image-wave2 px-16">
    <BaseHeaderTitle title="Daftar Produksi Minyak Nilam" />
    <div class="bg-[#F6FDFF] p-4 rounded-3xl border border-[#015438]">
      <div class="grid grid-cols-12 gap-4">
        <BaseCardAdd card-title="Produksi" class="col-span-3" />
        <BaseSkeletonCard v-if="isLoading" v-for="n in 3" :key="n" class="col-span-12 md:col-span-6 lg:col-span-3" />
        <BaseCard
          v-else
          v-for="(card, cardIndex) in daftarProduksiNilam"
          :key="cardIndex"
          :card-code="card.production_identifier"
          class="col-span-3"
        >
          <template #card-content>
            <div class="grid grid-cols-12 items-center gap-x-2">
              <div class="col-span-6">
                <img class="rounded-xl" src="@/assets/images/produksi/produksi-nilam.jpeg" alt="Produksi Nilam Image" />
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
                <p class="font-bold text-sm">{{ card.farmer_name }}</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Lokasi</h1>
                <p class="font-bold text-sm">{{ card.coordinates }}</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Mulai Produksi</h1>
                <p class="font-bold text-sm">{{ formatDate(card.date_started) }}</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Akhir Produksi</h1>
                <p class="font-bold text-sm">{{ formatDate(card.date_harvested) }}</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Estimasi Produksi</h1>
                <p class="font-bold text-sm">{{ card.production_estimates }} kg</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Alamat</h1>
                <p class="font-bold text-sm">{{ card.street }}</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Status</h1>
                <p
                  :class="{ 'bg-[#20D173]': card.state === 'draft', 'bg-[#015438]': card.state === 'done' }"
                  class="text-white font-bold text-sm capitalize rounded-lg inline-block px-2.5 py-1"
                >
                  {{ card.state }}
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
import BaseSkeletonCard from '@/components/BaseSkeletonCard.vue'
import { onMounted, reactive, ref } from 'vue'
import { useHttp } from '@/api/useHttp'
import { formatDate } from '../../utils/useFormatDate'

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

interface NilamType {
  id: number
  production_identifier: string
  farmer_name: string
  coordinates: string
  date_started: string
  date_harvested: string
  production_estimates: string
  street: string
  state: string
}

let daftarProduksiNilam = reactive<NilamType[]>([])
const isLoading = ref<boolean>(false)

const getProduksiNilam = async () => {
  isLoading.value = true
  const response = await useHttp('/production/harvesting/list')
  const nilamData = await response.data

  daftarProduksiNilam = nilamData.map((nilam: { employee_id: any; final_product: any }) => ({
    ...nilam,
    farmer_name: nilam.employee_id !== false ? nilam.employee_id[1] : null,
    production_estimates: nilam.final_product[0],
  }))

  isLoading.value = false
}

onMounted(() => {
  getProduksiNilam()
})
</script>
