<template>
  <BaseModal :show-modal="modal" @set-modal="closeModal" class="!max-w-4xl mt-16">
    <template #modal-content>
      <img
        class="bg-cover object-cover rounded-t-lg h-28 w-full"
        src="@/assets/images/profile/aset-lahan-1.png"
        alt="Nilam Image"
      />

      <div class="text-xl text-primary font-semibold flex justify-center py-3">Agust Priyatno</div>

      <div class="grid grid-cols-12 gap-x-4 p-5">
        <div class="col-span-6 space-y-1">
          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Kode Lahan</div>
            <div class="col-span-6">:&nbsp; TNM94A2X</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Jenis</div>
            <div class="col-span-6">:&nbsp; Lahan Perkebunan</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Sumber Lahan</div>
            <div class="col-span-6">:&nbsp; Petani</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Status Kepemilikan</div>
            <div class="col-span-6">:&nbsp; Milik Sendiri</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Kode Petani</div>
            <div class="col-span-6">:&nbsp; FA001</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Koordinat</div>
            <div class="col-span-6">:&nbsp; -5.572342, 95.321456</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Luas Lahan</div>
            <div class="col-span-6">:&nbsp; 5.000 m2</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Rata-rata Hasil (kg/m2)</div>
            <div class="col-span-6">:&nbsp; 2</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Perkiraan Produksi</div>
            <div class="col-span-6">:&nbsp; 150.000 kg</div>
          </div>
        </div>

        <div class="col-span-6 space-y-1">
          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Alamat</div>
            <div class="col-span-6 capitalize">
              :&nbsp; MJl. Teuku Umar, Kelurahan Tapaktuan Barat, Kecamatan Tapaktuan, Aceh Selatan
            </div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Provinsi</div>
            <div class="col-span-6">:&nbsp; Aceh</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Kabupaten/Kota</div>
            <div class="col-span-6">:&nbsp; Aceh Selatan</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Status Penanaman</div>
            <div class="col-span-6">:&nbsp; Proses</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Status Panen</div>
            <div class="col-span-6">:&nbsp; Tidak Aktif</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Peta Lahan</div>
            <div class="col-span-6">:&nbsp; Agus Pryitno.geojson</div>
          </div>
        </div>
      </div>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import BaseModal from '@/components/BaseModal.vue'

interface PropsModal {
  modal: Boolean
}

defineProps<PropsModal>()
const emit = defineEmits(['setModal'])

const closeModal = () => {
  emit('setModal', false)
}
</script>
