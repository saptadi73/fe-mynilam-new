<template>
  <div class="bg-image-wave px-4 lg:px-16">
    <BaseHeaderTitle title="Tracebility Product Petani" />
    <BaseTableClient
      :data="referenceSummary.data.value"
      :columns="columns"
      :custom-header="true"
      :search-value="searchValue"
      :is-loading="referenceSummary.isLoading.value"
      class="bg-white"
    >
      <template #header>
        <div
          class="p-4 lg:flex items-center lg:space-x-3 space-y-4 lg:space-y-0 overflow-x-auto overflow-y-visible z-10"
        >
          <BaseInputSelect
            name="daerah"
            placeholder="Pilih daerah"
            label-key="name"
            value-key="id"
            :options="kabupaten.data.value"
            class="w-full lg:w-44 2xl:w-52"
          />
          <BaseInputSelect
            name="agen"
            placeholder="Pilih agen/koperasi"
            :options="agenList"
            class="w-full lg:w-44 2xl:w-52"
          />

          <BaseInputDateRange
            name="tanggal"
            placeholder-start="Tanggal mulai"
            placeholder-end="Tanggal akhir"
            @change="(value: string[]) => console.log(value)"
          />
          <BaseSearchBar v-model="searchValue" placeholder="Cari kode produksi" class="w-full lg:w-52 2xl:w-60" />
        </div>
      </template>
      <template #col|reference_1="{ cell }">
        <div class="relative">
          <div class="bg-primary text-white font-semibold p-2 rounded-lg drop-shadow whitespace-nowrap">
            {{ cell.getValue() }}
          </div>
        </div>
      </template>
      <template #col|reference_2="{ cell }">
        <div class="relative">
          <template v-if="cell.getValue()">
            <div class="absolute top-1.5 -left-9">
              <BaseIcon name="arrow-left" class="rotate-180 w-6 text-primary-700" />
            </div>
            <div class="bg-primary-3 text-white font-semibold p-2 rounded-lg drop-shadow whitespace-nowrap">
              {{ cell.getValue() }}
            </div>
          </template>
          <div v-else class="p-2 font-semibold text-primary-border">Belum Tersedia</div>
        </div>
      </template>
      <template #col|reference_3="{ cell }">
        <div class="relative">
          <template v-if="cell.getValue()">
            <div class="absolute top-1.5 -left-9">
              <BaseIcon name="arrow-left" class="rotate-180 w-6 text-primary-700" />
            </div>
            <div class="bg-primary-3 text-white font-semibold p-2 rounded-lg drop-shadow whitespace-nowrap">
              {{ cell.getValue() }}
            </div>
          </template>
          <div v-else class="p-2 font-semibold text-primary-border">Belum Tersedia</div>
        </div>
      </template>
    </BaseTableClient>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseTableClient from '@/components/BaseTableClient.vue'
import { createColumnHelper } from '@tanstack/vue-table'
import BaseInputSelect from '@/components/BaseInputSelect.vue'
import BaseHeaderTitle from '@/components/BaseHeaderTitle.vue'
import BaseInputDateRange from '@/components/BaseInputDateRange.vue'
import BaseSearchBar from '@/components/BaseSearchBar.vue'
import BaseIcon from '@/components/BaseIcon.vue'
import { useReferenceSummary } from '@/api/useTransaction'
import { useKabupaten } from '@/api/useLocalization'
import type { ReferenceSummary } from '@/types/transaction'

const referenceSummary = useReferenceSummary()
const kabupaten = useKabupaten()
const searchValue = ref('')

const agenList = ref([
  { label: 'Agen Nusantara Sakti', value: 1 },
  { label: 'Agen Indonesia Raya', value: 2 },
  { label: 'Agen Aceh', value: 3 },
])

const columnHelper = createColumnHelper<ReferenceSummary>()

const columns = [
  columnHelper.accessor('reference_1', {
    header: 'Kode Produksi',
  }),
  columnHelper.accessor('reference_2', {
    header: 'Agen/Koperasi',
  }),
  columnHelper.accessor('reference_3', {
    header: 'Ugreen',
  }),
  columnHelper.accessor('date_order_1', {
    cell: (info) => info.getValue(),
    header: 'Tanggal Produksi',
  }),
  columnHelper.accessor('date_order_2', {
    cell: (info) => info.getValue(),
    header: 'Tanggal Agen/Koperasi',
  }),
  columnHelper.accessor('date_order_3', {
    cell: (info) => info.getValue(),
    header: 'Tanggal Ugreen',
  }),
]
</script>
