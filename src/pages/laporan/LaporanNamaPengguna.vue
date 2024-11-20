<template>
  <div class="bg-image-wave container">
    <BaseHeaderTitle title="Laporan Nama Pengguna (Profil)" />
    <BaseTableClient
      :data="handleDataTable"
      :columns="columns"
      :custom-header="true"
      :search-value="searchValue"
      :is-loading="petaniList.isLoading.value || agenKoperasiList.isLoading.value"
      class="bg-white"
    >
      <template #header>
        <div
          class="p-4 lg:flex items-center lg:space-x-3 space-y-4 lg:space-y-0 overflow-x-auto overflow-y-visible z-10"
        >
          <BaseSearchBar v-model="searchValue" placeholder="Cari nama pembeli" class="w-full lg:w-52 2xl:w-60" />
          <BaseInputSelect
            name="kabupaten"
            placeholder="Pilih kabupaten"
            label-key="name"
            value-key="id"
            :options="kabupaten.data.value"
            class="w-full lg:w-52 2xl:w-64"
            @change="(val: number) => params = { kabupaten_id: val }"
          />
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
import { computed, ref } from 'vue'
import BaseTableClient from '@/components/BaseTableClient.vue'
import { createColumnHelper } from '@tanstack/vue-table'
import BaseHeaderTitle from '@/components/BaseHeaderTitle.vue'
import BaseSearchBar from '@/components/BaseSearchBar.vue'
import { useAgenKoperasiList, usePetaniList } from '@/api/usePartner'
import { useKabupaten } from '@/api/useLocalization'
import { useForm } from 'vee-validate'
import type { Petani, Agen } from '@/types/partner'
import BaseInputSelect from '@/components/BaseInputSelect.vue'

const params = ref({})
const petaniList = usePetaniList(params)
const agenKoperasiList = useAgenKoperasiList(params)
const kabupaten = useKabupaten()
const searchValue = ref('')

const { values } = useForm({
  initialValues: {
    jenis: 'petani',
  },
})

const handleDataTable = computed(() => {
  if (values.jenis === 'petani') return petaniList.data.value || []
  else return agenKoperasiList.data.value || []
})

const columnHelper = createColumnHelper<Petani | Agen>()

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
  { label: 'Petani', value: 'petani' },
  { label: 'Agen/Koperasi', value: 'agent' },
]
</script>
