<template>
  <div class="bg-image-wave2 px-16">
    <BaseHeaderTitle title="Daftar Tanam Nilam" />
    <div class="bg-[#F6FDFF] p-4 rounded-3xl border border-[#015438]">
      <div class="grid grid-cols-12 gap-4">
        <BaseCardAdd card-title="Nilam" class="col-span-3" />
        <BaseSkeletonCard
          v-if="tanamNilamList.isLoading.value"
          v-for="n in 3"
          :key="n"
          class="col-span-12 md:col-span-6 lg:col-span-3"
        />
        <template v-else>
          <div class="col-span-9 self-center text-center text-gray-600" v-if="tanamNilamList.data.value === null">
            Tidak ada data untuk ditampilkan
          </div>

          <BaseCard
            v-else
            v-for="(card, cardIndex) in tanamNilamList.data.value"
            :key="cardIndex"
            :card-code="card.production_identifier"
            class="col-span-3"
            @click="showModalDetailTanam(card.id)"
          >
            <template #card-content>
              <div class="grid grid-cols-12 items-center gap-x-2">
                <div class="col-span-6 h-40 flex items-center justify-center">
                  <img
                    class="rounded-xl h-full object-cover"
                    :src="card.production_planting_image_url"
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
                  <p class="font-bold text-sm">{{ card.employee_id[1] }}</p>
                </div>
                <div class="col-span-6 pt-2">
                  <h1 class="text-sm">Luas Lahan</h1>
                  <p class="font-bold text-sm">{{ card.area }} ha</p>
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
                  <p class="font-bold text-sm">{{ card.quantity }} kg</p>
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
                    v-if="card.state == 'done'"
                    class="bg-primary text-white font-bold text-sm rounded-lg inline-block px-2.5 py-1"
                  >
                    Done
                  </p>
                </div>
              </div>
            </template>
          </BaseCard>
        </template>
      </div>
    </div>

    <ModalDetailTanam :modal="modalDetail" @set-modal="handleModalDetail" :data="nilamDetail.data.value" />
  </div>
</template>

<script setup lang="ts">
import { type ChartOptions } from 'chart.js/auto'
import BaseHeaderTitle from '@/components/BaseHeaderTitle.vue'
import BaseCardAdd from '@/components/BaseCardAdd.vue'
import BaseCard from '@/components/BaseCard.vue'
import BaseChart from '@/components/BaseChart.vue'
import BaseSkeletonCard from '@/components/BaseSkeletonCard.vue'
import ModalDetailTanam from './ModalDetailTanam.vue'
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import { DaftarTanamParams, TanamDetailParams } from '@/types/production'
import { useDaftarTanam, useNilamDetail } from '@/api/useProductionPetani'
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

const route = useRoute()
const { id } = route.params

const params = ref<DaftarTanamParams>({})
const tanamNilamList = useDaftarTanam(params)

const handleParamValue = () => {
  if (id) {
    params.value = {
      id_petani: Number(id),
      status: 'done',
    }
  }
}

onMounted(() => {
  handleParamValue()
})

const modalDetail = ref<boolean>(false)
const idDetail = ref<TanamDetailParams>({})
const nilamDetail = useNilamDetail(idDetail)

const showModalDetailTanam = (id: number) => {
  if (id) {
    idDetail.value = { id_planting: id }
  }

  modalDetail.value = true
}

const handleModalDetail = (value: boolean) => {
  modalDetail.value = value
}
</script>
