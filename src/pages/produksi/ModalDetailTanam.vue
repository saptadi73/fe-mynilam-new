<template>
  <BaseModal :show-modal="modal" @set-modal="closeModal" class="max-w-4xl">
    <template #modal-content>
      <slot name="content">
        <img
          class="bg-cover object-cover rounded-t-lg h-28 w-full"
          src="@/assets/images/profile/profile-rectangle-bg.png"
          alt="Background Profile"
        />

        <div class="text-xl text-primary font-semibold flex justify-center py-3">Agus Priyatno</div>

        <div class="grid grid-cols-12 gap-x-4 p-5">
          <div class="col-span-6">
            <div class="grid grid-cols-12 gap-x-1.5">
              <div class="col-span-6 font-semibold text-primary">Nama Produk</div>
              <div class="col-span-6">:&nbsp; Nilam</div>
            </div>

            <div class="grid grid-cols-12 gap-x-1.5">
              <div class="col-span-6 font-semibold text-primary">Estimasi Panen Diharapkan</div>
              <div class="col-span-6">:&nbsp; 18.000 Kg</div>
            </div>

            <div class="grid grid-cols-12 gap-x-1.5">
              <div class="col-span-6 font-semibold text-primary">Kabupaten/Kota</div>
              <div class="col-span-6">:&nbsp; Aceh Selatan</div>
            </div>

            <div class="grid grid-cols-12 gap-x-1.5">
              <div class="col-span-6 font-semibold text-primary">Lahan Yang Digunakan</div>
              <div class="col-span-6">:&nbsp; LP-ACE-AS-FA046-0015</div>
            </div>

            <div class="grid grid-cols-12 gap-x-1.5">
              <div class="col-span-6 font-semibold text-primary">Tanggal Mulai Produksi</div>
              <div class="col-span-6">:&nbsp; 17 April 2024</div>
            </div>

            <div class="grid grid-cols-12 gap-x-1.5">
              <div class="col-span-6 font-semibold text-primary">Tanggal Selesai Produksi</div>
              <div class="col-span-6">:&nbsp; 17 Agustus 2024</div>
            </div>

            <div class="grid grid-cols-12 gap-x-1.5">
              <div class="col-span-6 font-semibold text-primary">Lokasi Perkebunan</div>
              <div class="col-span-6">:&nbsp; Timang Rasa, Timang Gajah, Bener Meriah Regency, Aceh</div>
            </div>
          </div>

          <div class="col-span-6">
            <div class="grid grid-cols-12 gap-x-1.5">
              <div class="col-span-6 font-semibold text-primary">Status Produksi</div>
              <div class="col-span-6">:&nbsp; Selesai</div>
            </div>

            <div class="grid grid-cols-12 gap-x-1.5">
              <div class="col-span-6 font-semibold text-primary">Kode Produksi</div>
              <div class="col-span-6">:&nbsp; TNM94A2X</div>
            </div>

            <div class="grid grid-cols-12 gap-x-1.5">
              <div class="col-span-6 font-semibold text-primary">Persentase Selesai</div>
              <div class="col-span-6">:&nbsp; 100%</div>
            </div>

            <div class="grid grid-cols-12 gap-x-1.5">
              <div class="col-span-6 font-semibold text-primary">Luas</div>
              <div class="col-span-6">:&nbsp; 1.000 m²</div>
            </div>

            <div class="grid grid-cols-12 gap-x-1.5">
              <div class="col-span-6 font-semibold text-primary">Tanggal Telat Panen</div>
              <div class="col-span-6">:&nbsp; 4 September 2024</div>
            </div>

            <div class="grid grid-cols-12 gap-x-1.5">
              <div class="col-span-6 font-semibold text-primary">Hasil Sebenarnya</div>
              <div class="col-span-6">:&nbsp; 4.000 Kg</div>
            </div>

            <div class="grid grid-cols-12 gap-x-1.5">
              <div class="col-span-6 font-semibold text-primary">Hasil Sebenarnya</div>
              <div class="col-span-6">:&nbsp; 4.000 Kg</div>
            </div>

            <div class="grid grid-cols-12 gap-x-1.5">
              <div class="col-span-6 font-semibold text-primary">Kondisi Cuaca</div>
              <div class="col-span-6">:&nbsp; Musim Kemarau</div>
            </div>

            <div class="grid grid-cols-12 gap-x-1.5">
              <div class="col-span-6 font-semibold text-primary">Koordinat Lokasi</div>
              <div class="col-span-6">:&nbsp; 4.747883, 96.748811</div>
            </div>
          </div>
        </div>
      </slot>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import BaseModal from '@/components/BaseModal.vue'

interface PropsModal {
  modal: Boolean
  data: any
}

defineProps<PropsModal>()
const emit = defineEmits(['setModal'])

const closeModal = () => {
  emit('setModal', false)
}
</script>
