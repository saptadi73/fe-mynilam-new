<template>
  <BaseModal :show-modal="modal" @set-modal="closeModal" class="!max-w-4xl mt-16">
    <template #modal-content>
      <img
        class="bg-cover object-cover rounded-t-lg h-28 w-full"
        :src="data?.[0].production_planting_image_url"
        alt="Nilam Image"
      />

      <div class="text-xl text-primary font-semibold flex justify-center py-3">{{ data?.[0].employee_id[1] }}</div>

      <div class="grid grid-cols-12 gap-x-4 p-5">
        <div class="col-span-6 space-y-1">
          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Nama Produk</div>
            <div class="col-span-6">:&nbsp; {{ data?.[0].produce_product[1] }}</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Estimasi Panen Diharapkan</div>
            <div class="col-span-6">:&nbsp; {{ data?.[0].produce_product[0] }} kg</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Kabupaten/Kota</div>
            <div class="col-span-6">:&nbsp; {{ data?.[0].kabupaten_id[1] }}</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Lahan Yang Digunakan</div>
            <div class="col-span-6">:&nbsp; {{ data?.[0].asset_id[1] }}</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Tanggal Mulai Produksi</div>
            <div class="col-span-6">:&nbsp; {{ formatDate(data?.[0].date_planned_start as string) }}</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Tanggal Selesai Produksi</div>
            <div class="col-span-6">:&nbsp; {{ formatDate(data?.[0].date_planned_finish as string) }}</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Lokasi Perkebunan</div>
            <div class="col-span-6">:&nbsp; {{ data?.[0].address }}</div>
          </div>
        </div>

        <div class="col-span-6 space-y-1">
          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Status Produksi</div>
            <div class="col-span-6 capitalize">:&nbsp; {{ data?.[0].state }}</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Kode Produksi</div>
            <div class="col-span-6">:&nbsp; {{ data?.[0].production_identifier }}</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Persentase Tanam</div>
            <div class="col-span-6">:&nbsp; {{ Math.round(data?.[0].completion_percentage ?? 0) }}%</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Luas</div>
            <div class="col-span-6">:&nbsp; {{ data?.[0].area }} m²</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Tanggal Telat Panen</div>
            <div class="col-span-6">:&nbsp; {{ data?.[0].date_missed }}</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Hasil Sebenarnya</div>
            <div class="col-span-6">:&nbsp; {{ data?.[0].actual_quantity }} kg</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Kerugian Panen</div>
            <div class="col-span-6">:&nbsp; {{ data?.[0].quantity_loss }} kg</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Kondisi Cuaca</div>
            <div class="col-span-6 capitalize">:&nbsp; {{ data?.[0].weather_conditions }}</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Koordinat Lokasi</div>
            <div class="col-span-6">:&nbsp; {{ data?.[0].coordinates }}</div>
          </div>
        </div>
      </div>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import BaseModal from '@/components/BaseModal.vue'
import { NilamDetailType } from '@/types/production'
import { formatDate } from '@/utils/useFormatDate'

interface PropsModal {
  modal: Boolean
  data?: NilamDetailType[]
}

defineProps<PropsModal>()
const emit = defineEmits(['setModal'])

const closeModal = () => {
  emit('setModal', false)
}
</script>
