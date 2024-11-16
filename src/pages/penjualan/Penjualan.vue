<template>
  <div class="p-4 bg-primary-light">
    <h1 class="font-bold text-center text-3xl py-8 text-primary">Manajemen Penjualan Produk Nilam</h1>
    <div class="md:px-12">
      <img
        class="banner-image border-4 border-primary rounded-3xl"
        src="@/assets/images/produksi/banner-header-produksi.png"
        alt="Banner Header Produksi"
      />
    </div>

    <p class="text-center md:px-48 py-8 text-primary md:text-lg">
      Memungkinkan penambahan produk baru dan melihat daftar produk yang ada, menambah pelanggan baru serta melihat
      daftar pelanggan, dan menampilkan pesanan atau penjualan terbaru dengan rincian transaksi.
    </p>

    <section class="my-20 md:my-10 md:p-8 text-primary flex flex-col md:flex-row items-start md:space-x-10 w-full">
      <div class="md:w-6/12 py-3">
        <h1 class="text-3xl font-bold mb-3">Daftar Penjualan</h1>
        <p class="text-lg mb-3">
          Memungkinkan pengguna untuk membuat dan mengelola daftar penjualan terbaru dari penjualan nilam, memantau
          transaksi, dan melihat rincian penjualan secara lengkap.
        </p>
        <RouterLink :to="{ name: 'Daftar Penjualan' }">
          <BaseButton icon-position="left">
            Lihat Penjualan
            <BaseIcon name="chevron-right" class="w-4 h-4" />
          </BaseButton>
        </RouterLink>
      </div>
      <div class="md:w-6/12">
        <img src="@/assets/images/penjualan/penjualan-thumbnail-2.png" class="rounded-3xl w-full" />
      </div>
    </section>

    <section
      class="my-20 md:my-10 md:p-8 text-primary flex flex-col-reverse md:flex-row items-start md:space-x-10 w-full"
    >
      <div class="md:w-5/12">
        <img src="@/assets/images/penjualan/penjualan-thumbnail-3.png" class="rounded-3xl w-full" />
      </div>
      <div class="md:w-7/12 py-3">
        <h1 class="text-3xl font-bold mb-3">Laporan Penjualan dan Tracebility Product</h1>
        <p class="text-lg mb-3">
          Menampilkan data penjualan lengkap dari setiap transaksi, mulai dari agen, koperasi, hingga Ugreen, serta
          memantau pergerakan produk secara menyeluruh. Laporan ini mencakup riwayat penjualan, jalur distribusi, dan
          ketepatan waktu pengiriman, sehingga memastikan transparansi produk dan meningkatkan kepercayaan Ugreen.
        </p>
        <RouterLink :to="{ name: 'Pilih Jenis Laporan Penjualan' }">
          <BaseButton icon-position="left">
            Lihat Pergerakan
            <BaseIcon name="chevron-right" class="w-4 h-4" />
          </BaseButton>
        </RouterLink>
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
