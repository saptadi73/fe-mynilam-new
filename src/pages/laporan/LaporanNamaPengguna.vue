<template>
  <div class="bg-image-wave container">
    <BaseHeaderTitle title="Laporan Nama Pengguna (Profil)" />
    <BaseTableClient
      :data="petaniList.data.value"
      :columns="columns"
      :custom-header="true"
      :search-value="searchValue"
      class="bg-white"
    >
      <template #header>
        <div
          class="p-4 lg:flex items-center lg:space-x-3 space-y-4 lg:space-y-0 overflow-x-auto overflow-y-visible z-10"
        >
          <BaseSearchBar v-model="searchValue" placeholder="Cari nama pembeli" class="w-full lg:w-52 2xl:w-60" />
          <BaseInputDateRange name="tanggal" placeholder-start="Tanggal mulai" placeholder-end="Tanggal akhir" />
          <BaseInputSelect
            name="jenis"
            placeholder="Pilih jenis"
            :options="jenisOptions"
            class="w-full lg:w-44 2xl:w-52"
          />
        </div>
      </template>
    </BaseTableClient>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseTableClient from '@/components/BaseTableClient.vue'
import { createColumnHelper } from '@tanstack/vue-table'
import BaseHeaderTitle from '@/components/BaseHeaderTitle.vue'
import BaseInputDateRange from '@/components/BaseInputDateRange.vue'
import BaseSearchBar from '@/components/BaseSearchBar.vue'
import { usePetaniList } from '@/api/usePartner'
import type { Petani } from '@/types/partner'
import BaseInputSelect from '@/components/BaseInputSelect.vue'

const petaniList = usePetaniList()
const searchValue = ref('')

const columnHelper = createColumnHelper<Petani>()

const columns = [
  columnHelper.display({
    header: 'No',
    cell: (info) => info.row.index + 1,
  }),
  columnHelper.accessor('ilo_associate_code', {
    cell: (info) => info.getValue(),
    header: 'Kode User',
  }),
  columnHelper.accessor('name', {
    cell: (info) => info.getValue(),
    header: 'Nama',
  }),
  columnHelper.accessor('street', {
    cell: (info) => info.getValue(),
    header: 'Alamat',
  }),
  columnHelper.accessor('kelurahan', {
    cell: (info) => info.getValue(),
    header: 'Desa/Kelurahan',
  }),
  columnHelper.accessor('kecamatan', {
    cell: (info) => info.getValue(),
    header: 'Kecamatan',
  }),
  columnHelper.accessor('kabupaten_id', {
    cell: (info) => info.getValue()[1],
    header: 'Kota/Kabupaten',
  }),
]

const jenisOptions = [
  { label: 'Semua', value: '' },
  { label: 'Petani', value: 'petani' },
  { label: 'Agen/Koperasi', value: 'agent' },
]
</script>
