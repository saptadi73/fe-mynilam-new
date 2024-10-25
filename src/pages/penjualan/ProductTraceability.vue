<template>
  <div class="bg-image-wave px-4 lg:px-16">
    <BaseHeaderTitle title="Tracebility Product Petani" />
    <BaseTableClient
      :data="data"
      :columns="columns"
      :page-size="5"
      :custom-header="true"
      :search-value="searchValue"
      class="bg-white"
    >
      <template #header>
        <div
          class="p-4 lg:flex items-center lg:space-x-3 space-y-4 lg:space-y-0 overflow-x-auto overflow-y-visible z-10"
        >
          <BaseInputSelect
            name="daerah"
            placeholder="Pilih daerah"
            :options="daerahList"
            class="w-full lg:w-44 2xl:w-52"
          />
          <BaseInputSelect
            name="agen"
            placeholder="Pilih agen/koperasi"
            :options="agenList"
            class="w-full lg:w-44 2xl:w-52"
          />

          <BaseInputDateRange name="tanggal" placeholder-start="Tanggal mulai" placeholder-end="Tanggal akhir" />
          <BaseSearchBar v-model="searchValue" placeholder="Cari kode produksi" class="w-full lg:w-52 2xl:w-60" />
        </div>
      </template>
      <template #col|kodeProduksi="{ cell }">
        <div class="relative">
          <div class="bg-primary text-white font-semibold p-2 rounded-lg drop-shadow">{{ cell.getValue() }}</div>
        </div>
      </template>
      <template #col|agenKoperasi="{ cell }">
        <div class="relative">
          <div class="absolute top-1.5 -left-9">
            <BaseIcon name="arrow-left" class="rotate-180 w-6 text-primary-700" />
          </div>
          <div v-if="cell.getValue()" class="bg-primary-3 text-white font-semibold p-2 rounded-lg drop-shadow">
            {{ cell.getValue() }}
          </div>
          <div v-else class="p-2 font-semibold text-primary-border">Belum Tersedia</div>
        </div>
      </template>
      <template #col|ugreen="{ cell }">
        <div class="relative">
          <div class="absolute top-1.5 -left-9">
            <BaseIcon name="arrow-left" class="rotate-180 w-6 text-primary-700" />
          </div>
          <div v-if="cell.getValue()" class="bg-primary-3 text-white font-semibold p-2 rounded-lg drop-shadow">
            {{ cell.getValue() }}
          </div>
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

interface Produksi {
  kodeProduksi: string | null
  agenKoperasi: string | null
  ugreen: string | null
  tanggal: string
  tanggalAgen: string
  tanggalUgreen: string
}

const defaultData: Produksi[] = [
  {
    kodeProduksi: 'PTN-005-MNL-001',
    agenKoperasi: null,
    ugreen: null,
    tanggal: '24/10/2024',
    tanggalAgen: '25/10/2024',
    tanggalUgreen: '27/10/2024',
  },
  {
    kodeProduksi: 'PTN-005-MNL-001',
    agenKoperasi: 'PTN-005-MNL-001',
    ugreen: null,
    tanggal: '24/10/2024',
    tanggalAgen: '25/10/2024',
    tanggalUgreen: '27/10/2024',
  },
  {
    kodeProduksi: 'PTN-005-MNL-001',
    agenKoperasi: 'PTN-005-MNL-001',
    ugreen: 'PTN-005-MNL-002',
    tanggal: '24/10/2024',
    tanggalAgen: '25/10/2024',
    tanggalUgreen: '27/10/2024',
  },
]

const data = ref(defaultData)
const searchValue = ref('')

const daerahList = ref([
  { label: 'Aceh Selatan', value: 1 },
  { label: 'Aceh Utara', value: 2 },
  { label: 'Aceh Tengah', value: 3 },
])
const agenList = ref([
  { label: 'Agen Nusantara Sakti', value: 1 },
  { label: 'Agen Indonesia Raya', value: 2 },
  { label: 'Agen Aceh', value: 3 },
])

const columnHelper = createColumnHelper<Produksi>()

const columns = [
  columnHelper.accessor('kodeProduksi', {
    cell: (info) => info.getValue(),
    header: 'Kode Produksi',
  }),
  columnHelper.accessor('agenKoperasi', {
    cell: (info) => info.getValue(),
    header: 'Agen/Koperasi',
  }),
  columnHelper.accessor('ugreen', {
    cell: (info) => info.getValue(),
    header: 'Ugreen',
  }),
  columnHelper.accessor('tanggal', {
    cell: (info) => info.getValue(),
    header: 'Tanggal Produksi',
  }),
  columnHelper.accessor('tanggalAgen', {
    cell: (info) => info.getValue(),
    header: 'Tanggal Agen/Koperasi',
  }),
  columnHelper.accessor('tanggalUgreen', {
    cell: (info) => info.getValue(),
    header: 'Tanggal Ugreen',
  }),
]
</script>
