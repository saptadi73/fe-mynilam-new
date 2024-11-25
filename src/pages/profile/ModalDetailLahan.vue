<template>
  <BaseModal :show-modal="modal" @set-modal="closeModal" class="!max-w-4xl mt-16">
    <template #modal-content>
      <img class="bg-cover object-cover rounded-t-lg h-28 w-full" :src="data?.[0].asset_image_url" alt="Lahan Image" />

      <div class="text-xl text-primary font-semibold flex justify-center py-3">{{ data?.[0].employee_id[1] }}</div>

      <div class="grid grid-cols-12 gap-x-4 p-5">
        <div class="col-span-6 space-y-1">
          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Kode Lahan</div>
            <div class="col-span-6">:&nbsp; {{ data?.[0].farm_id }}</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Jenis</div>
            <div class="col-span-6">:&nbsp; {{ data?.[0].product_id[1] }}</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Sumber Lahan</div>
            <div class="col-span-6 capitalize">:&nbsp; {{ data?.[0].employee_ilo_associate }}</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Status Kepemilikan</div>
            <div class="col-span-6">:&nbsp; {{ data?.[0].ownership_status }}</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Kode Petani</div>
            <div class="col-span-6">:&nbsp; {{ data?.[0].employee_ilo_associate_code }}</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Koordinat</div>
            <div class="col-span-6">:&nbsp; {{ data?.[0].coordinates }}</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Luas Lahan</div>
            <div class="col-span-6">:&nbsp; {{ data?.[0].area_ha }} m2</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Rata-rata Hasil (kg/m2)</div>
            <div class="col-span-6">:&nbsp; 2</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Perkiraan Produksi</div>
            <div class="col-span-6">:&nbsp; {{ data?.[0].production_capacity }} kg</div>
          </div>
        </div>

        <div class="col-span-6 space-y-1">
          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Alamat</div>
            <div class="col-span-6 capitalize">:&nbsp; {{ data?.[0].address }}</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Provinsi</div>
            <div class="col-span-6">:&nbsp; {{ data?.[0].state_id[1] }}</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Kabupaten/Kota</div>
            <div class="col-span-6">:&nbsp; {{ data?.[0].kabupaten_id[1] }}</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Status Penanaman</div>
            <div class="col-span-6 capitalize">:&nbsp; {{ data?.[0].planting_status }}</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Status Panen</div>
            <div class="col-span-6 capitalize">:&nbsp; {{ data?.[0].harvesting_status }}</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Peta Lahan</div>
            <div class="col-span-6">:&nbsp; {{ data?.[0].shp_filename }}</div>
          </div>
        </div>
      </div>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import BaseModal from '@/components/BaseModal.vue'
import { LahanDetail } from '@/types/partner'

interface PropsModal {
  modal: Boolean
  data?: LahanDetail[]
}

defineProps<PropsModal>()
const emit = defineEmits(['setModal'])

const closeModal = () => {
  emit('setModal', false)
}
</script>
