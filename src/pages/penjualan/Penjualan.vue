<template>
  <div class="p-4 bg-primary-light">
    <h1 class="font-bold text-center text-3xl lg:px-64 py-8 md:py-12 text-primary">Manajemen Penjualan Produk Nilam</h1>
    <div class="md:px-12">
      <img
        class="banner-image rounded-3xl"
        src="@/assets/images/produksi/banner-header-produksi.png"
        alt="Banner Header Produksi"
      />
    </div>

    <p class="text-center md:px-48 py-8 text-primary md:text-lg">
      Memungkinkan penambahan produk baru dan melihat daftar produk yang ada, menambah pelanggan baru serta melihat
      daftar pelanggan, dan menampilkan pesanan atau penjualan terbaru dengan rincian transaksi.
    </p>

    <section
      class="my-20 md:my-10 md:p-8 text-primary flex flex-col-reverse md:flex-row items-start md:space-x-10 w-full"
    >
      <div class="md:w-5/12">
        <img src="@/assets/images/penjualan/penjualan-thumbnail-1.png" class="rounded-3xl w-full" />
      </div>
      <div class="md:w-7/12 py-3 space-y-5">
        <h1 class="text-3xl font-bold">Mitra</h1>
        <p class="text-lg">
          Jelajahi daftar gudang yang menyimpan hasil penjualan petani nilam, memastikan kualitas produk tetap terjaga
          sebelum didistribusikan ke agen atau koperasi.
        </p>
        <RouterLink :to="{ name: 'Daftar Produksi Petani' }">
          <BaseButton icon-position="left">
            Lihat Pelanggan
            <BaseIcon name="chevron-right" class="w-4 h-4" />
          </BaseButton>
        </RouterLink>
      </div>
    </section>

    <section class="my-20 md:my-10 md:p-8 text-primary flex flex-col md:flex-row items-start md:space-x-10 w-full">
      <div class="md:w-6/12 py-3 space-y-5">
        <h1 class="text-3xl font-bold">Daftar Penjualan</h1>
        <p class="text-lg">
          Memungkinkan pengguna untuk membuat dan mengelola daftar penjualan terbaru dari penjualan nilam, memantau
          transaksi, dan melihat rincian penjualan secara lengkap.
        </p>
        <RouterLink :to="{ name: 'Buat Daftar Produksi Petani' }">
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
      <div class="md:w-7/12 py-3 space-y-5">
        <h1 class="text-3xl font-bold">Laporan Pergerakan Barang</h1>
        <p class="text-lg">
          Lacak perjalanan minyak nilam mulai dari petani, kemudian dikirim ke agen atau koperasi, dilanjutkan ke
          UGreen, hingga akhirnya sampai di Green.
        </p>
        <RouterLink :to="{ name: 'Laporan Produksi' }">
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
  box-shadow: 8px 8px rgba(0, 0, 0, 0.25);
}
</style>
