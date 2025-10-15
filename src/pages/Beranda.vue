<template>
  <div class="bg-gradient-to-br from-primary-light to-white">
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm"
        :style="{ backgroundImage: `url(${bannerImage})` }"
      ></div>
      <div class="absolute inset-0 bg-black bg-opacity-60"></div>
      <div class="relative z-10 text-center text-white max-w-4xl mx-auto px-4 animate-fade-in">
        <h1 class="font-bold text-5xl md:text-6xl lg:text-7xl mb-6 drop-shadow-lg">
          Optimalisasi Lahan,<br>
          <span class="text-green-300">Maksimalkan Hasil</span>
        </h1>
        <p class="text-xl md:text-2xl lg:text-3xl mb-8 font-light leading-relaxed drop-shadow-md font-Lexend">
          Melalui penerapan teknik manajemen lahan yang inovatif dan berkelanjutan, kami berkomitmen untuk memaksimalkan
          potensi setiap jengkal tanah. Dengan pendekatan holistik yang mencakup pemilihan varietas unggul, pengelolaan
          nutrisi yang tepat, dan pemanfaatan teknologi modern, kami memastikan bahwa setiap upaya kami menghasilkan panen
          yang melimpah, berkualitas tinggi, dan berkelanjutan untuk masa depan perkebunan yang lebih baik.
        </p>
        <RouterLink :to="{ name: 'Dashboard' }">
          <button class="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg">
            Mulai Sekarang
            <BaseIcon name="chevron-right" class="w-6 h-6 inline ml-2" />
          </button>
        </RouterLink>
      </div>
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <BaseIcon name="chevron-down" class="w-8 h-8 text-white" />
      </div>
    </section>

    <section class="py-20 bg-white animate-fade-in">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-12 gap-8 items-center">
          <div class="col-span-12 md:col-span-7 order-2 md:order-1">
            <h1 class="font-bold text-dark text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
              Pemantauan Proses Tanam
            </h1>
            <p class="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              Pantau setiap tahap pertumbuhan nilam dari penanaman benih hingga panen untuk memastikan praktik terbaik
              diimplementasikan. Monitor perkembangan tanaman secara berkala untuk memastikan hasil panen yang optimal dan
              kualitas yang terjaga.
            </p>

            <RouterLink :to="{ name: 'Profile' }">
              <BaseButton icon-position="left" class="transform hover:scale-105 transition-transform duration-300">
                Selengkapnya
                <BaseIcon name="chevron-right" class="w-4 h-4" />
              </BaseButton>
            </RouterLink>
          </div>

          <div class="col-span-12 md:col-span-5 order-1 md:order-2">
            <div class="relative group">
              <img
                class="thumbnail-image rounded-3xl h-[460px] object-cover w-full transform group-hover:scale-105 transition-transform duration-500 shadow-2xl"
                src="@/assets/images/beranda/tanam_nilam.png"
                alt="Beranda Thumbnail 1 Image"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gradient-to-r from-gray-50 to-white animate-fade-in">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-12 gap-8 items-center">
          <div class="col-span-12 md:col-span-5 order-1 md:order-1">
            <div class="relative group">
              <img
                class="thumbnail-image rounded-3xl h-[460px] object-cover w-full transform group-hover:scale-105 transition-transform duration-500 shadow-2xl"
                src="@/assets/images/beranda/ipad_nilam.png"
                alt="Beranda Thumbnail 2 Image"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          <div class="col-span-12 md:col-span-7 order-2 md:order-2">
            <h1 class="font-bold text-dark text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
              Dashboard Pengawasan Produktivitas, Penjualan, dan Produksi Petani
            </h1>
            <p class="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              Pantau produktivitas petani dari garapan hingga panen, lacak penjualan hasil pertanian dari produk jadi
              hingga distribusi pasar, dan prediksi hasil produksi dengan data aktual untuk perencanaan yang tepat. Atur
              jadwal produksi dengan kalender terintegrasi, analisis pendapatan petani secara real-time, dan monitor
              seluruh proses produksi serta tahapan proses tanam untuk memastikan hasil optimal.
            </p>

            <RouterLink :to="{ name: 'Dashboard' }">
              <BaseButton icon-position="left" class="transform hover:scale-105 transition-transform duration-300">
                Selengkapnya
                <BaseIcon name="chevron-right" class="w-4 h-4" />
              </BaseButton>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white animate-fade-in">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-12 gap-8 items-center">
          <div class="col-span-12 md:col-span-7 order-2 md:order-1">
            <h1 class="font-bold text-dark text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
              Manajemen Inventaris Produk dan Gudang
            </h1>
            <p class="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              Kelola dengan cermat inventaris produk dan gudang Anda. Akses daftar lengkap produk dan gudang yang
              tersedia, serta pantau laporan pergerakan barang secara real-time untuk memastikan operasional yang efisien
              dan akurat. Pastikan setiap produk dari hulu hingga hilir terpantau dengan baik dan siap didistribusikan
              tepat waktu.
            </p>

            <RouterLink :to="{ name: 'Dashboard' }">
              <BaseButton icon-position="left" class="transform hover:scale-105 transition-transform duration-300">
                Selengkapnya
                <BaseIcon name="chevron-right" class="w-4 h-4" />
              </BaseButton>
            </RouterLink>
          </div>

          <div class="col-span-12 md:col-span-5 order-1 md:order-2">
            <div class="relative group">
              <img
                class="thumbnail-image rounded-3xl h-[460px] object-cover w-full transform group-hover:scale-105 transition-transform duration-500 shadow-2xl"
                src="@/assets/images/beranda/ipad_gudang3.png"
                alt="Beranda Thumbnail 3 Image"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gradient-to-r from-gray-50 to-white animate-fade-in">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-12 gap-8 items-center">
          <div class="col-span-12 md:col-span-5 order-1 md:order-1">
            <div class="relative group">
              <img
                class="thumbnail-image rounded-3xl h-[460px] object-cover w-full transform group-hover:scale-105 transition-transform duration-500 shadow-2xl"
                src="@/assets/images/beranda/dashboard_petani.png"
                alt="Beranda Thumbnail 4 Image"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          <div class="col-span-12 md:col-span-7 order-2 md:order-2">
            <h1 class="font-bold text-dark text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
              Manajemen Produksi Daftar Pembuatan dan Laporan
            </h1>
            <p class="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              Kelola produksi dengan daftar produksi terbaru yang baru dibuat, pantau daftar produksi yang sedang
              berjalan, dan tinjau laporan produksi untuk mendapatkan gambaran menyeluruh tentang hasil dan efisiensi.
              Pastikan setiap tahap produksi terdokumentasi dengan baik dari pembuatan hingga pelaporan.
            </p>

            <RouterLink :to="{ name: 'Produksi' }">
              <BaseButton icon-position="left" class="transform hover:scale-105 transition-transform duration-300">
                Selengkapnya
                <BaseIcon name="chevron-right" class="w-4 h-4" />
              </BaseButton>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white animate-fade-in">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-12 gap-8 items-center">
          <div class="col-span-12 md:col-span-7 order-2 md:order-1">
            <h1 class="font-bold text-dark text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
              Manajemen Pelanggan dan Penjualan Produk
            </h1>
            <p class="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              Kelola informasi pelanggan dengan daftar pelanggan yang sudah ada dan yang baru mendaftar. Pantau produk
              yang tersedia dengan daftar produk yang sudah ada dan produk baru yang baru mendaftar. Tinjau daftar
              penjualan terbaru untuk mendapatkan gambaran terkini tentang aktivitas penjualan dan tren pasar.
            </p>

            <RouterLink :to="{ name: 'Produksi' }">
              <BaseButton icon-position="left" class="transform hover:scale-105 transition-transform duration-300">
                Selengkapnya
                <BaseIcon name="chevron-right" class="w-4 h-4" />
              </BaseButton>
            </RouterLink>
          </div>

          <div class="col-span-12 md:col-span-5 order-1 md:order-2">
            <div class="relative group">
              <img
                class="thumbnail-image rounded-3xl h-[460px] object-cover w-full transform group-hover:scale-105 transition-transform duration-500 shadow-2xl"
                src="@/assets/images/beranda/jual_nilam3.png"
                alt="Beranda Thumbnail 5 Image"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gradient-to-r from-gray-50 to-white animate-fade-in">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-12 gap-8 items-center">
          <div class="col-span-12 md:col-span-5 order-1 md:order-1">
            <div class="relative group">
              <img
                class="thumbnail-image rounded-3xl h-[460px] object-cover w-full transform group-hover:scale-105 transition-transform duration-500 shadow-2xl"
                src="@/assets/images/beranda/laporan.png"
                alt="Banner Dashboard 6 Image"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          <div class="col-span-12 md:col-span-7 order-2 md:order-2">
            <h1 class="font-bold text-dark text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
              Laporan Lengkap Transaksi Penjualan
            </h1>
            <p class="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              Informasi Mendalam Mengenai Penjualan Minyak Nilam oleh Petani, Termasuk Rincian Transaksi, dan Tren
              Pembelian, serta Analisis Data untuk Mendukung Keputusan Strategis dalam Mengelola Usaha Pertanian.
            </p>

            <RouterLink :to="{ name: 'Produksi' }">
              <BaseButton icon-position="left" class="transform hover:scale-105 transition-transform duration-300">
                Selengkapnya
                <BaseIcon name="chevron-right" class="w-4 h-4" />
              </BaseButton>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue'
import BaseIcon from '@/components/BaseIcon.vue'
import bannerImage from '@/assets/images/beranda/parralax.jpg'
</script>

<style scoped>
.banner-image,
.thumbnail-image {
  box-shadow: 10px 10px 4px 0 rgba(0, 0, 0, 0.25);
}
</style>
