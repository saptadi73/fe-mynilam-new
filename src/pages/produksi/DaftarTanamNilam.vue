<template>
  <div class="bg-image-wave2 px-16">
    <BaseHeaderTitle title="Daftar Tanam" />
    <div class="bg-[#F6FDFF] p-4 rounded-3xl border border-[#015438]">
      <div class="grid grid-cols-12 gap-4">
        <BaseCardAdd card-title="Nilam" class="col-span-3" />
        <BaseSkeletonCard v-if="isLoading" v-for="n in 3" :key="n" class="col-span-12 md:col-span-6 lg:col-span-3" />
        <BaseCard
          v-else
          v-for="(card, cardIndex) in daftarTanamNilam"
          :key="cardIndex"
          :card-code="card.production_identifier"
          class="col-span-3"
        >
          <template #card-content>
            <div class="grid grid-cols-12 items-center gap-x-2">
              <div class="col-span-6 h-40 flex items-center justify-center">
                <img
                  class="rounded-xl h-full object-cover"
                  src="@/assets/images/produksi/nilam.jpeg"
                  alt="Nilam Image"
                />
              </div>

              <BaseChart
                class="col-span-6"
                :chartId="`Chart ${card.id}`"
                chartType="doughnut"
                :chartData="card.chartData"
                :chartOptions="chartOptions"
                :chartInnerLabel="`${card.chartData.datasets[0].data[0]} %`"
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
                <h1 class="text-sm">Luas Lahan</h1>
                <p class="font-bold text-sm">{{ card.area }} m²</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Mulai Produksi</h1>
                <p class="font-bold text-sm">{{ formatDate(card.date_planned_start) }}</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Akhir Produksi</h1>
                <p class="font-bold text-sm">{{ formatDate(card.date_planned_finish) }}</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Estimasi Panen</h1>
                <p class="font-bold text-sm">{{ card.planting_estimates }} kg</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Lokasi</h1>
                <p class="font-bold text-sm">{{ card.coordinates }}</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Alamat</h1>
                <p class="font-bold text-sm">{{ card.address }}</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Status</h1>
                <p
                  :class="{ 'bg-[#20D173]': card.state === 'in_progress', 'bg-[#015438]': card.state === 'done' }"
                  class="text-white font-bold text-sm capitalize rounded-lg inline-block px-2.5 py-1"
                >
                  {{ card.state == 'in_progress' ? 'On Progress' : card.state }}
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
import { type ChartOptions } from 'chart.js/auto'
import BaseHeaderTitle from '@/components/BaseHeaderTitle.vue'
import BaseCardAdd from '@/components/BaseCardAdd.vue'
import BaseCard from '@/components/BaseCard.vue'
import BaseChart from '@/components/BaseChart.vue'
import BaseSkeletonCard from '@/components/BaseSkeletonCard.vue'
import { onMounted, reactive, ref } from 'vue'
import { useHttp } from '@/api/useHttp'
import { NilamPlantingType } from '@/types/nilam'
import { formatDate } from '@/utils/useFormatDate'

const chartOptions: ChartOptions<'doughnut'> = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      display: false,
    },
  },
}

let daftarTanamNilam = reactive<NilamPlantingType[]>([])
const isLoading = ref<boolean>(false)

const mapDataWithChart = (response: any) => {
  daftarTanamNilam = response.map((item: { produce_product: any; employee_id: any; completion_percentage: number }) => {
    const completed = Math.floor(item.completion_percentage)
    const remaining = 100 - completed

    return {
      ...item,
      farmer_name: item.employee_id !== false ? item.employee_id[1] : null,
      planting_estimates: item.produce_product[0],
      chartData: {
        labels: ['', 'Proses'],
        datasets: [
          {
            label: 'Total Data',
            data: [completed, remaining],
            backgroundColor: ['#015438', '#20D173'],
            hoverOffset: 4,
          },
        ],
      },
    }
  })
}

const getProduksiNilam = async () => {
  isLoading.value = true
  const response = await useHttp('/production/planting/list')
  const nilamData = await response.data

  mapDataWithChart(nilamData)

  isLoading.value = false
}

onMounted(() => {
  getProduksiNilam()
})
</script>
