<template>
  <div class="bg-image-wave2 px-16">
    <BaseHeaderTitle title="Daftar Tanam" />

    <div class="bg-[#F6FDFF] p-4 rounded-3xl border border-[#015438]">
      <div class="flex flex-col lg:flex-row gap-y-2 lg:gap-y-0 lg:gap-x-5 justify-start">
        <div class="flex flex-col lg:flex-row gap-y-2 lg:gap-y-0 lg:gap-x-2">
          <BaseSearchBar v-model="search" placeholder="Cari nama"></BaseSearchBar>
          <BaseButton @click="handleParamValue">Cari</BaseButton>
        </div>
      </div>
      <hr class="border border-[#015438] mt-3 -ml-4 -mr-4" />
      <div class="grid grid-cols-12 gap-4 mt-2">
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
            @click="showModalDetailTanam(card.employee_id[0])"
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
                    <h1 class="text-center font-bold text-sm mb-2">Persentase Tanam</h1>
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
                  <p class="font-bold text-sm">{{ card.produce_product[0] }} kg</p>
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
                    class="text-white font-bold text-sm capitalize rounded-xl w-full flex justify-center px-2.5 py-1"
                  >
                    {{ card.state == 'in_progress' ? 'On Progress' : card.state }}
                  </p>
                  <BaseButton @click.stop="showModal(card.id)" class="!text-sm font-bold mt-4 w-full"
                    >Catatan</BaseButton
                  >
                </div>
              </div>
            </template>
          </BaseCard>
        </template>
      </div>
    </div>

    <ModalAuditTrail
      :modal="modal"
      @set-modal="handleModal"
      :data="noteList.data.value"
      :is-loading="noteList.isLoading.value"
    />

    <ModalDetailTanam :modal="modalDetail" @set-modal="handleModalDetail" :data="nilamDetail.data.value" />
  </div>
</template>

<script setup lang="ts">
import BaseHeaderTitle from '@/components/BaseHeaderTitle.vue'
import BaseSearchBar from '@/components/BaseSearchBar.vue'
import BaseCardAdd from '@/components/BaseCardAdd.vue'
import BaseCard from '@/components/BaseCard.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseChart from '@/components/BaseChart.vue'
import BaseSkeletonCard from '@/components/BaseSkeletonCard.vue'
import ModalAuditTrail from './components/ModalAuditTrail.vue'
import ModalDetailTanam from './ModalDetailTanam.vue'
import { type ChartOptions } from 'chart.js/auto'
import { onMounted, ref, watch } from 'vue'
import { formatDate } from '@/utils/useFormatDate'
import { useDaftarTanam, useNilamDetail, useNote } from '@/api/useProductionPetani'
import { useRoute } from 'vue-router'
import { useKabupaten } from '@/api/useLocalization'
import { DaftarTanamParams, NoteParams, TanamDetailParams } from '@/types/production'

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
const { daerah } = route.params
const search = ref<string>('')

const kabupatenList = useKabupaten()

const params = ref<DaftarTanamParams>({})
const tanamNilamList = useDaftarTanam(params)

const handleParamValue = () => {
  const selectedKabupaten = kabupatenList.data.value?.find((item) => item.name === daerah)
  if (selectedKabupaten) {
    params.value = {
      kabupaten_id: selectedKabupaten.id,
      name: search.value || undefined,
    }
  }
}

watch(kabupatenList.data, handleParamValue)

let paramsList = ref<NoteParams>({})
const noteList = useNote(paramsList)

onMounted(() => {
  handleParamValue()
})

const modal = ref<boolean>(false)

const handleModal = (value: boolean) => {
  modal.value = value
}

const showModal = (id: number) => {
  if (id) {
    paramsList.value = { id: id }
  }

  modal.value = true
}

const modalDetail = ref<boolean>(false)
const idDetail = ref<TanamDetailParams>({})
const nilamDetail = useNilamDetail(idDetail)

const showModalDetailTanam = (id: number) => {
  if (id) {
    idDetail.value = { id_employee: id }
  }

  modalDetail.value = true
}

const handleModalDetail = (value: boolean) => {
  modalDetail.value = value
}
</script>
