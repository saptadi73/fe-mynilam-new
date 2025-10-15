<template>
  <div class="bg-gradient-to-br from-primary-light to-white min-h-screen">
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-r from-primary to-primary-dark text-white overflow-hidden">
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        :style="{ backgroundImage: `url(${bannerImage})` }"
      ></div>
      <div class="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <h1 class="font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight text-primary">
          Manajemen Produksi
        </h1>
        <p class="text-lg md:text-xl lg:text-2xl mb-8 font-light leading-relaxed max-w-4xl mx-auto text-green-100">
          Kelola produksi dengan daftar produksi terbaru yang baru dibuat, pantau daftar produksi yang sedang berjalan, dan
          tinjau laporan produksi untuk mendapatkan gambaran menyeluruh tentang hasil dan efisiensi. Pastikan setiap tahap
          produksi terdokumentasi dengan baik dari pembuatan hingga pelaporan.
        </p>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-12 gap-12 items-center mb-20">
          <div class="col-span-12 md:col-span-6 order-2 md:order-1">
            <h2 class="font-bold text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight text-dark">
              Daftar Produksi Petani Nilam
            </h2>
            <p class="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              Memuat Informasi Lengkap Tentang Daftar Produksi Nilam, Baik yang Sedang Berlangsung Maupun yang Telah
              Selesai, untuk Memantau Kemajuan dan Hasil Kerja Petani secara Menyeluruh.
            </p>
            <RouterLink :to="{ name: 'Daftar Produksi Petani' }">
              <BaseButton icon-position="left" class="transform hover:scale-105 transition-transform duration-300">
                Lihat Produksi
                <BaseIcon name="chevron-right" class="w-4 h-4" />
              </BaseButton>
            </RouterLink>
          </div>
          <div class="col-span-12 md:col-span-6 order-1 md:order-2">
            <div class="relative group">
              <img
                src="@/assets/images/produksi/tanam_petani.jpg"
                alt="Daftar Produksi"
                class="rounded-3xl w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500 shadow-2xl"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-12 gap-12 items-center mb-20">
          <div class="col-span-12 md:col-span-6">
            <div class="relative group">
              <img
                src="@/assets/images/produksi/mesin_petani.jpg"
                alt="Buat Daftar Baru"
                class="rounded-3xl w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500 shadow-2xl"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          <div class="col-span-12 md:col-span-6">
            <h2 class="font-bold text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight text-dark">
              Buat Daftar Baru Produksi Petani
            </h2>
            <p class="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              Petani Wajib Membuat Daftar Baru Sebelum Memulai Proses Produksi, untuk Memastikan Setiap Tahap Produksi
              Terdokumentasi dengan Teliti, Terpantau dengan Baik, dan Dapat Dilacak Secara Efektif hingga Penyelesaian
              Produksi
            </p>
            <RouterLink :to="{ name: 'Buat - Pilih Jenis Produksi' }">
              <BaseButton icon-position="left" class="transform hover:scale-105 transition-transform duration-300">
                Buat Daftar Baru
                <BaseIcon name="chevron-right" class="w-4 h-4" />
              </BaseButton>
            </RouterLink>
          </div>
        </div>

        <div class="grid grid-cols-12 gap-12 items-center">
          <div class="col-span-12 md:col-span-6 order-2 md:order-1">
            <h2 class="font-bold text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight text-dark">
              Laporan Produksi
            </h2>
            <p class="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              Menyajikan Rekapitulasi Mendetail dari Setiap Tahap Penanaman hingga Hasil Akhir Produksi untuk Memfasilitasi
              Analisis Menyeluruh dan Evaluasi Kinerja Pertanian yang Efektif
            </p>
            <RouterLink :to="{ name: 'Laporan Produksi' }">
              <BaseButton icon-position="left" class="transform hover:scale-105 transition-transform duration-300">
                Lihat Laporan
                <BaseIcon name="chevron-right" class="w-4 h-4" />
              </BaseButton>
            </RouterLink>
          </div>
          <div class="col-span-12 md:col-span-6 order-1 md:order-2">
            <div class="relative group">
              <img
                src="@/assets/images/produksi/produksi-thumbnail-3.png"
                alt="Laporan Produksi"
                class="rounded-3xl w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500 shadow-2xl"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue'
import BaseIcon from '@/components/BaseIcon.vue'
import bannerImage from '@/assets/images/produksi/produksi_banner.jpg'
</script>

<style scoped>
.banner-image {
  box-shadow: 10px 10px 4px 0 rgba(0, 0, 0, 0.25);
}
</style>
