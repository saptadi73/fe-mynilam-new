<template>
  <div class="bg-image-wave2 px-16">
    <BaseHeaderTitle title="Daftar Produksi Minyak Nilam" />
    <div class="bg-[#F6FDFF] p-4 rounded-3xl border border-[#015438]">
      <div class="flex flex-col lg:flex-row gap-y-2 lg:gap-y-0 lg:gap-x-5 justify-start">
        <div class="flex flex-col lg:flex-row gap-y-2 lg:gap-y-0 lg:gap-x-2">
          <BaseSearchBar v-model="search" placeholder="Cari nama"></BaseSearchBar>
          <BaseButton @click="handleParamValue">Cari</BaseButton>
        </div>
      </div>
      <hr class="border border-[#015438] mt-3 -ml-4 -mr-4" />
      <div class="grid grid-cols-12 gap-4 mt-2">
        <BaseSkeletonCard
          v-if="produksiNilamList.isLoading.value"
          v-for="n in 4"
          :key="n"
          class="col-span-12 md:col-span-6 lg:col-span-3"
        />
        <template v-else>
          <div
            class="col-span-12 self-center text-center text-gray-600 my-5"
            v-if="produksiNilamList.data.value === null"
          >
            Tidak ada data untuk ditampilkan
          </div>

          <BaseCard
            v-else
            v-for="(card, cardIndex) in produksiNilamList.data.value"
            :key="cardIndex"
            :card-code="card.production_identifier"
            class="col-span-3"
            @click="showModalDetailProduksi(card.id)"
          >
            <template #card-content>
              <div class="grid grid-cols-12 items-center gap-x-2">
                <div class="col-span-6 h-40 flex items-center justify-center">
                  <img
                    class="rounded-xl h-full object-cover"
                    :src="card.production_harvesting_image_url"
                    alt="Produksi Nilam Image"
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
                  <p class="font-bold text-sm">{{ card.final_quantity }} kg</p>
                </div>
                <div class="col-span-6 pt-2">
                  <h1 class="text-sm">Alamat</h1>
                  <p class="font-bold text-sm">{{ card.address }}</p>
                </div>
                <div class="col-span-6 pt-2">
                  <h1 class="text-sm">Status</h1>
                  <p
                    :class="{ 'bg-[#20D173]': card.state === 'in_progress', 'bg-[#015438]': card.state === 'done' }"
                    class="text-white font-bold text-sm capitalize rounded-xl flex justify-center px-2.5 py-1"
                  >
                    {{ card.state === 'in_progress' ? 'On Progress' : card.state }}
                  </p>
                </div>
                <div class="col-span-6 place-content-end pt-2">
                  <BaseButton @click.stop="showModal(card.id)" class="!text-sm font-bold w-full">Catatan</BaseButton>
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

    <ModalDetailProduksi :modal="modalDetail" @set-modal="handleModalDetail" :data="nilamDetail.data.value" />
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
import ModalDetailProduksi from './ModalDetailProduksi.vue'
import { type ChartOptions } from 'chart.js/auto'
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useKabupaten } from '@/api/useLocalization'
import { useDaftarProduksi, useNote, useProduksiDetail } from '@/api/useProductionPetani'
import type { DaftarProduksiParams, NoteParams, ProduksiDetailParams } from '@/types/production'
import { formatDate } from '../../utils/useFormatDate'

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

const params = ref<DaftarProduksiParams>({})
const produksiNilamList = useDaftarProduksi(params)

const handleParamValue = () => {
  const selectedKabupaten = kabupatenList.data.value?.find((item) => item.name === daerah)
  if (selectedKabupaten) {
    params.value = {
      kabupaten_id: selectedKabupaten.id,
      nama_petani: search.value || undefined,
    }
  }
}

watch(kabupatenList.data, handleParamValue)

let paramsList = ref<NoteParams>({})
const noteList = useNote(paramsList)

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

onMounted(() => {
  handleParamValue()
})

const modalDetail = ref<boolean>(false)
const idDetail = ref<ProduksiDetailParams>({})
const nilamDetail = useProduksiDetail(idDetail)

const showModalDetailProduksi = (id: number) => {
  if (id) {
    idDetail.value = { id_harvesting: id }
  }

  modalDetail.value = true
}

const handleModalDetail = (value: boolean) => {
  modalDetail.value = value
}
</script>
