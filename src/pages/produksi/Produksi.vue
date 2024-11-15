<template>
  <div class="p-4 bg-primary-light">
    <h1 class="font-bold text-center text-3xl py-8 text-primary">Manajemen Produksi Daftar Pembuatan dan Laporan</h1>
    <div class="md:px-12">
      <img
        class="banner-image rounded-3xl"
        src="@/assets/images/produksi/banner-header-produksi.png"
        alt="Banner Header Produksi"
      />
    </div>

    <p class="text-center md:px-48 py-4 text-primary md:text-lg">
      Kelola produksi dengan daftar produksi terbaru yang baru dibuat, pantau daftar produksi yang sedang berjalan, dan
      tinjau laporan produksi untuk mendapatkan gambaran menyeluruh tentang hasil dan efisiensi. Pastikan setiap tahap
      produksi terdokumentasi dengan baik dari pembuatan hingga pelaporan.
    </p>

    <section
      class="my-20 md:my-10 md:p-8 text-primary flex flex-col-reverse md:flex-row items-start md:space-x-10 w-full"
    >
      <div class="md:w-1/2 py-3 space-y-5">
        <h1 class="text-3xl font-bold">Daftar Produksi Petani Nilam</h1>
        <p class="text-lg">
          Memuat Informasi Lengkap Tentang Daftar Produksi Nilam, Baik yang Sedang Berlangsung Maupun yang Telah
          Selesai, untuk Memantau Kemajuan dan Hasil Kerja Petani secara Menyeluruh.
        </p>
        <RouterLink :to="{ name: 'Daftar Produksi Petani' }">
          <BaseButton icon-position="left" class="mt-2">
            Lihat Produksi
            <BaseIcon name="chevron-right" class="w-4 h-4" />
          </BaseButton>
        </RouterLink>
      </div>
      <div class="md:w-1/2">
        <img src="@/assets/images/produksi/produksi-thumbnail-1.png" class="rounded-3xl w-full" />
      </div>
    </section>

    <section class="my-20 md:my-10 md:p-8 text-primary flex flex-col md:flex-row items-start md:space-x-10 w-full">
      <div class="md:w-5/12">
        <img src="@/assets/images/produksi/produksi-thumbnail-2.png" class="rounded-3xl w-full" />
      </div>
      <div class="md:w-7/12 py-3 space-y-5">
        <h1 class="text-3xl font-bold">Buat Daftar Baru Produksi Petani</h1>
        <p class="text-lg">
          Petani Wajib Membuat Daftar Baru Sebelum Memulai Proses Produksi, untuk Memastikan Setiap Tahap Produksi
          Terdokumentasi dengan Teliti, Terpantau dengan Baik, dan Dapat Dilacak Secara Efektif hingga Penyelesaian
          Produksi
        </p>
        <RouterLink :to="{ name: 'Buat Daftar Produksi Petani' }">
          <BaseButton icon-position="left" class="mt-2">
            Buat Daftar Baru
            <BaseIcon name="chevron-right" class="w-4 h-4" />
          </BaseButton>
        </RouterLink>
      </div>
    </section>

    <section
      class="my-20 md:my-10 md:p-8 text-primary flex flex-col-reverse md:flex-row items-start md:space-x-10 w-full"
    >
      <div class="md:w-1/2 py-3 space-y-5">
        <h1 class="text-3xl font-bold">Laporan Produksi</h1>
        <p class="text-lg">
          Menyajikan Rekapitulasi Mendetail dari Setiap Tahap Penanaman hingga Hasil Akhir Produksi untuk Memfasilitasi
          Analisis Menyeluruh dan Evaluasi Kinerja Pertanian yang Efektif
        </p>
        <RouterLink :to="{ name: 'Laporan Produksi' }">
          <BaseButton icon-position="left" class="mt-2">
            Lihat Laporan
            <BaseIcon name="chevron-right" class="w-4 h-4" />
          </BaseButton>
        </RouterLink>
      </div>
      <div class="md:w-1/2">
        <img src="@/assets/images/produksi/produksi-thumbnail-3.png" class="rounded-3xl w-full" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue'
import BaseIcon from '@/components/BaseIcon.vue'
</script>

<style scoped>
.banner-image {
  box-shadow: 10px 10px 4px 0 rgba(0, 0, 0, 0.25);
}
</style>
