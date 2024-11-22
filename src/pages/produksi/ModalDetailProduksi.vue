<template>
  <BaseModal :show-modal="modal" @set-modal="closeModal" class="!max-w-4xl">
    <template #modal-content>
      <img
        class="bg-cover object-cover rounded-t-lg h-28 w-full"
        src="@/assets/images/produksi/produksi-nilam.jpeg"
        alt="Nilam Image"
      />

      <div class="text-xl text-primary font-semibold flex justify-center py-3">Agus Prayitno</div>

      <div class="grid grid-cols-12 gap-x-4 p-5">
        <div class="col-span-6 space-y-1">
          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Kode Produksi</div>
            <div class="col-span-6">:&nbsp; TNM94A2X</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Tanggal Mulai Produksi</div>
            <div class="col-span-6">:&nbsp; 19 Agustus 2024</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Tanggal Akhir Produksi</div>
            <div class="col-span-6">:&nbsp; 22 Agustus 2024</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Tanggal Selesai Aktual</div>
            <div class="col-span-6">:&nbsp; 23 Agustus 2024</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Hari Keterlambatan Produksi</div>
            <div class="col-span-6">:&nbsp; 1 hari</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Metode Ekstraksi</div>
            <div class="col-span-6">:&nbsp; Distilisasi</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Produk Akhir</div>
            <div class="col-span-6">:&nbsp; Nilam</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Perkiraan hasil Akhir</div>
            <div class="col-span-6">:&nbsp; 45 kg</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Hasil Aktual Produk</div>
            <div class="col-span-6">:&nbsp; 40 kg</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Persentase Selesai Produksi</div>
            <div class="col-span-6">:&nbsp; 100%</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Presentase Kuantitas Akhir</div>
            <div class="col-span-6">:&nbsp; 2.5%</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Kehilangan Produk</div>
            <div class="col-span-6">:&nbsp; 1 kg</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Kualitas Produk</div>
            <div class="col-span-6">:&nbsp; Sangat Baik</div>
          </div>
        </div>

        <div class="col-span-6 space-y-1">
          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Kondisi Cuaca</div>
            <div class="col-span-6 capitalize">:&nbsp; Musim Kemarau</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Produk Tanam</div>
            <div class="col-span-6 capitalize">:&nbsp; Nilam</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Kuantitas Hasil Penanaman</div>
            <div class="col-span-6 capitalize">:&nbsp; 1.800 Kg</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Kabupaten/Kota</div>
            <div class="col-span-6 capitalize">:&nbsp; Aceh Selatan</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Lahan Tanam</div>
            <div class="col-span-6 capitalize">:&nbsp; LP-ACE-AS-FA046-0015</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Koordinat Lokasi</div>
            <div class="col-span-6">:&nbsp; 4.747883, 96.748811</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Alamat</div>
            <div class="col-span-6">:&nbsp; Timang Rasa, Timang Gajah, Bener Meriah Regency, Aceh</div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Luas Lahan</div>
            <div class="col-span-6">:&nbsp; 5.000 m²</div>
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
