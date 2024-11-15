<template>
  <div class="p-4 bg-primary-light">
    <section class="xl:h-screen">
      <h1 class="font-bold text-center text-3xl 2xl:text-4xl py-2 2xl:py-8">Optimalisasi Lahan, Maksimalkan Hasil</h1>

      <div class="md:px-12 flex justify-center">
        <img
          class="banner-image rounded-3xl"
          src="@/assets/images/beranda/banner-beranda.jpg"
          alt="Banner Dashboard Image"
        />
      </div>

      <p class="text-center 2xl:text-xl xl:px-40 py-4 2xl:py-8">
        Melalui penerapan teknik manajemen lahan yang inovatif dan berkelanjutan, kami berkomitmen untuk memaksimalkan
        potensi setiap jengkal tanah. Dengan pendekatan holistik yang mencakup pemilihan varietas unggul, pengelolaan
        nutrisi yang tepat, dan pemanfaatan teknologi modern, kami memastikan bahwa setiap upaya kami menghasilkan panen
        yang melimpah, berkualitas tinggi, dan berkelanjutan untuk masa depan perkebunan yang lebih baik.
      </p>
    </section>

    <section class="h-screen grid items-center">
      <div class="grid grid-cols-12 gap-x-8 gap-y-4 md:gap-y-0 md:px-12">
        <div class="col-span-12 md:col-span-7 order-2 md:order-1">
          <h1 class="font-bold text-2xl 2xl:text-3xl">Pemantauan Proses Tanam</h1>
          <p class="text-lg 2xl:text-xl text-justify mt-2">
            Pantau setiap tahap pertumbuhan nilam dari penanaman benih hingga panen untuk memastikan praktik terbaik
            diimplementasikan. Monitor perkembangan tanaman secara berkala untuk memastikan hasil panen yang optimal dan
            kualitas yang terjaga.
          </p>

          <RouterLink :to="{ name: 'Profile' }">
            <BaseButton icon-position="left" class="my-4">
              Selengkapnya
              <BaseIcon name="chevron-right" class="w-4 h-4" />
            </BaseButton>
          </RouterLink>
        </div>

        <div class="col-span-12 md:col-span-5 order-1 md:order-2">
          <img
            class="thumbnail-image rounded-3xl h-[460px] object-cover"
            src="@/assets/images/beranda/beranda-thumbnail-1.jpg"
            alt="Beranda Thumbnail 1 Image"
          />
        </div>
      </div>
    </section>

    <section class="h-screen grid items-center">
      <div class="grid grid-cols-12 gap-x-8 gap-y-4 md:gap-y-0 md:px-12">
        <div class="col-span-12 md:col-span-5">
          <img
            class="thumbnail-image rounded-3xl h-[460px] object-cover"
            src="@/assets/images/beranda/beranda-thumbnail-2.jpg"
            alt="Beranda Thumbnail 2 Image"
          />
        </div>

        <div class="col-span-12 md:col-span-7">
          <h1 class="font-bold text-2xl 2xl:text-3xl">
            Dashboard Pengawasan Produktivitas, Penjualan, dan Produksi Petani
          </h1>
          <p class="text-lg 2xl:text-2xl text-justify mt-2">
            Pantau produktivitas petani dari garapan hingga panen, lacak penjualan hasil pertanian dari produk jadi
            hingga distribusi pasar, dan prediksi hasil produksi dengan data aktual untuk perencanaan yang tepat. Atur
            jadwal produksi dengan kalender terintegrasi, analisis pendapatan petani secara real-time, dan monitor
            seluruh proses produksi serta tahapan proses tanam untuk memastikan hasil optimal.
          </p>

          <RouterLink :to="{ name: 'Dashboard' }">
            <BaseButton icon-position="left" class="mt-2">
              Selengkapnya
              <BaseIcon name="chevron-right" class="w-4 h-4" />
            </BaseButton>
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="h-screen grid items-center">
      <div class="grid grid-cols-12 gap-x-8 gap-y-4 md:gap-y-0 md:px-12">
        <div class="col-span-12 md:col-span-7 order-2 md:order-1">
          <h1 class="font-bold text-2xl 2xl:text-3xl">Manajemen Inventaris Produk dan Gudang</h1>
          <p class="text-lg 2xl:text-xl text-justify mt-2">
            Kelola dengan cermat inventaris produk dan gudang Anda. Akses daftar lengkap produk dan gudang yang
            tersedia, serta pantau laporan pergerakan barang secara real-time untuk memastikan operasional yang efisien
            dan akurat. Pastikan setiap produk dari hulu hingga hilir terpantau dengan baik dan siap didistribusikan
            tepat waktu.
          </p>

          <RouterLink :to="{ name: 'Dashboard' }">
            <BaseButton icon-position="left" class="mt-2">
              Selengkapnya
              <BaseIcon name="chevron-right" class="w-4 h-4" />
            </BaseButton>
          </RouterLink>
        </div>

        <div class="col-span-12 md:col-span-5 order-1 md:order-2">
          <img
            class="thumbnail-image rounded-3xl h-[460px] object-cover"
            src="@/assets/images/beranda/beranda-thumbnail-3.jpg"
            alt="Beranda Thumbnail 3 Image"
          />
        </div>
      </div>
    </section>

    <section class="h-screen grid items-center">
      <div class="grid grid-cols-12 gap-x-8 gap-y-4 md:gap-y-0 md:px-12">
        <div class="col-span-12 md:col-span-5">
          <img
            class="thumbnail-image rounded-3xl h-[460px] object-cover"
            src="@/assets/images/beranda/beranda-thumbnail-2.jpg"
            alt="Beranda Thumbnail 4 Image"
          />
        </div>

        <div class="col-span-12 md:col-span-7">
          <h1 class="font-bold text-2xl 2xl:text-3xl">Manajemen Produksi Daftar Pembuatan dan Laporan</h1>
          <p class="text-lg 2xl:text-xl text-justify mt-2">
            Kelola produksi dengan daftar produksi terbaru yang baru dibuat, pantau daftar produksi yang sedang
            berjalan, dan tinjau laporan produksi untuk mendapatkan gambaran menyeluruh tentang hasil dan efisiensi.
            Pastikan setiap tahap produksi terdokumentasi dengan baik dari pembuatan hingga pelaporan.
          </p>

          <RouterLink :to="{ name: 'Produksi' }">
            <BaseButton icon-position="left" class="mt-2">
              Selengkapnya
              <BaseIcon name="chevron-right" class="w-4 h-4" />
            </BaseButton>
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="h-screen grid items-center">
      <div class="grid grid-cols-12 gap-x-8 gap-y-4 md:gap-y-0 md:px-12">
        <div class="col-span-12 md:col-span-7 order-2 md:order-1">
          <h1 class="font-bold text-2xl 2xl:text-3xl">Manajemen Pelanggan dan Penjualan Produk</h1>
          <p class="text-lg 2xl:text-xl text-justify mt-2">
            Kelola informasi pelanggan dengan daftar pelanggan yang sudah ada dan yang baru mendaftar. Pantau produk
            yang tersedia dengan daftar produk yang sudah ada dan produk baru yang baru mendaftar. Tinjau daftar
            penjualan terbaru untuk mendapatkan gambaran terkini tentang aktivitas penjualan dan tren pasar.
          </p>

          <RouterLink :to="{ name: 'Produksi' }">
            <BaseButton icon-position="left" class="mt-2">
              Selengkapnya
              <BaseIcon name="chevron-right" class="w-4 h-4" />
            </BaseButton>
          </RouterLink>
        </div>

        <div class="col-span-12 md:col-span-5 order-1 md:order-2">
          <img
            class="thumbnail-image rounded-3xl h-[460px] object-cover"
            src="../assets/images/beranda/beranda-thumbnail-4.jpg"
            alt="Beranda Thumbnail 5 Image"
          />
        </div>
      </div>
    </section>

    <section class="h-screen grid items-center">
      <div class="grid grid-cols-12 gap-x-8 gap-y-4 md:gap-y-0 md:px-12">
        <div class="col-span-12 md:col-span-5">
          <img
            class="thumbnail-image rounded-3xl h-[460px] object-cover"
            src="@/assets/images/beranda/beranda-thumbnail-5.jpg"
            alt="Banner Dashboard 6 Image"
          />
        </div>

        <div class="col-span-12 md:col-span-7">
          <h1 class="font-bold text-2xl 2xl:text-3xl">Laporan Lengkap Transaksi Penjualan</h1>
          <p class="text-lg 2xl:text-xl text-justify mt-2">
            Informasi Mendalam Mengenai Penjualan Minyak Nilam oleh Petani, Termasuk Rincian Transaksi, dan Tren
            Pembelian, serta Analisis Data untuk Mendukung Keputusan Strategis dalam Mengelola Usaha Pertanian.
          </p>

          <RouterLink :to="{ name: 'Produksi' }">
            <BaseButton icon-position="left" class="mt-2">
              Selengkapnya
              <BaseIcon name="chevron-right" class="w-4 h-4" />
            </BaseButton>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue'
import BaseIcon from '@/components/BaseIcon.vue'
</script>

<style scoped>
.banner-image,
.thumbnail-image {
  box-shadow: 10px 10px 4px 0 rgba(0, 0, 0, 0.25);
}
</style>
