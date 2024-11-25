<template>
  <BaseModal :show-modal="modal" @set-modal="closeModal" class="!max-w-5xl">
    <template #modal-content>
      <img
        class="bg-cover object-cover rounded-t-lg h-28 w-full"
        :src="data?.[0].production_harvesting_image_url"
        alt="Nilam Image"
      />

      <div class="text-xl text-primary font-semibold flex justify-center py-3">{{ data?.[0].employee_id[1] }}</div>

      <div class="grid grid-cols-12 gap-x-4 p-5">
        <div class="col-span-6 space-y-1">
          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Kode Produksi</div>
            <div class="col-span-6">:&nbsp; {{ data?.[0].production_identifier }}</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Tanggal Mulai Produksi</div>
            <div class="col-span-6">:&nbsp; {{ formatDate(data?.[0].date_started as string) }}</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Tanggal Akhir Produksi</div>
            <div class="col-span-6">:&nbsp; {{ formatDate(data?.[0].date_harvested as string) }}</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Tanggal Selesai Aktual</div>
            <div class="col-span-6">:&nbsp; {{ data?.[0].date_actual }}</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Hari Keterlambatan Produksi</div>
            <div class="col-span-6">:&nbsp; 1 hari</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Metode Ekstraksi</div>
            <div class="col-span-6 capitalize">:&nbsp; {{ data?.[0].extraction_method }}</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Produk Akhir</div>
            <div class="col-span-6">:&nbsp; {{ data?.[0].final_product[1] }}</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Perkiraan Hasil Akhir</div>
            <div class="col-span-6">:&nbsp; {{ data?.[0].final_quantity }} kg</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Hasil Aktual Produk</div>
            <div class="col-span-6">:&nbsp; 40 kg</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Persentase Selesai Produksi</div>
            <div class="col-span-6">:&nbsp; {{ data?.[0].completion_percentage }}%</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Presentase Kuantitas Akhir</div>
            <div class="col-span-6">:&nbsp; {{ data?.[0].percentage_final_quantity }}%</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Kehilangan Produk</div>
            <div class="col-span-6">:&nbsp; 1 kg</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Kualitas Produk</div>
            <div class="col-span-6">:&nbsp; {{ data?.[0].product_quality }}</div>
          </div>
        </div>

        <div class="col-span-6 space-y-1">
          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Kondisi Cuaca</div>
            <div class="col-span-6 capitalize">:&nbsp; Musim Kemarau</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Produk Tanam</div>
            <div class="col-span-6 capitalize">:&nbsp; {{ data?.[0].produce_product[1] }}</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Kuantitas Hasil Penanaman</div>
            <div class="col-span-6 capitalize">:&nbsp; {{ data?.[0].planting_produce_quantity }} Kg</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Kabupaten/Kota</div>
            <div class="col-span-6 capitalize">:&nbsp; {{ data?.[0].kabupaten_id[1] }}</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Lahan Tanam</div>
            <div class="col-span-6 capitalize">:&nbsp; {{ data?.[0].asset_id[1] }}</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Koordinat Lokasi</div>
            <div class="col-span-6">:&nbsp; {{ data?.[0].coordinates }}</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Alamat</div>
            <div class="col-span-6">:&nbsp; {{ data?.[0].address }}</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Luas Lahan</div>
            <div class="col-span-6">:&nbsp; {{ data?.[0].area_ha }} m²</div>
          </div>
        </div>
      </div>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import BaseModal from '@/components/BaseModal.vue'
import type { NilamProductionDetailType } from '@/types/production'
import { formatDate } from '@/utils/useFormatDate'

interface PropsModal {
  modal: Boolean
  data?: NilamProductionDetailType[]
}

defineProps<PropsModal>()
const emit = defineEmits(['setModal'])

const closeModal = () => {
  emit('setModal', false)
}
</script>
