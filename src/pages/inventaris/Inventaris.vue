<template>
  <div class="p-4 bg-primary-light">
    <h1 class="font-bold text-center text-3xl lg:px-64 py-8 md:py-12 text-primary">
      Manajemen Inventaris Produk dan Gudang
    </h1>
    <div class="md:px-12">
      <img
        class="banner-image rounded-3xl"
        src="@/assets/images/produksi/banner-header-produksi.png"
        alt="Banner Header Produksi"
      />
    </div>

    <p class="text-center md:px-48 py-8 text-primary md:text-lg">
      Kelola dengan cermat inventaris produk dan gudang Anda. Akses daftar lengkap produk dan gudang yang tersedia,
      serta pantau laporan pergerakan barang secara real-time untuk memastikan operasional yang efisien dan akurat.
      Pastikan setiap produk dari hulu hingga hilir terpantau dengan baik dan siap didistribusikan tepat waktu.
    </p>

    <section
      class="my-20 md:my-10 md:p-8 text-primary flex flex-col-reverse md:flex-row items-start md:space-x-10 w-full"
    >
      <div class="md:w-1/2 py-3 space-y-5">
        <h1 class="text-3xl font-bold">Daftar Produksi Minyak Nilam</h1>
        <p class="text-lg">
          Temukan berbagai pilihan produk minyak nilam unggulan yang dihasilkan dari bahan baku berkualitas dan diproses
          dengan standar tinggi oleh petani.
        </p>
        <RouterLink :to="{ name: 'Daftar Produksi Petani' }">
          <BaseButton icon-position="left">
            Daftar Produk
            <BaseIcon name="chevron-right" class="w-4 h-4" />
          </BaseButton>
        </RouterLink>
      </div>
      <div class="md:w-1/2">
        <img src="@/assets/images/inventaris/inventaris-thumbnail-1.png" class="rounded-3xl w-full" />
      </div>
    </section>

    <section class="my-20 md:my-10 md:p-8 text-primary flex flex-col md:flex-row items-start md:space-x-10 w-full">
      <div class="md:w-5/12">
        <img src="@/assets/images/inventaris/inventaris-thumbnail-2.png" class="rounded-3xl w-full" />
      </div>
      <div class="md:w-7/12 py-3 space-y-5">
        <h1 class="text-3xl font-bold">Daftar Gudang Penyimpanan</h1>
        <p class="text-lg">
          Jelajahi daftar gudang yang menyimpan hasil penjualan petani nilam, memastikan kualitas produk tetap terjaga
          sebelum didistribusikan ke agen atau koperasi.
        </p>
        <RouterLink :to="{ name: 'Buat Daftar Produksi Petani' }">
          <BaseButton icon-position="left">
            Daftar Gudang
            <BaseIcon name="chevron-right" class="w-4 h-4" />
          </BaseButton>
        </RouterLink>
      </div>
    </section>

    <section
      class="my-20 md:my-10 md:p-8 text-primary flex flex-col-reverse md:flex-row items-start md:space-x-10 w-full"
    >
      <div class="md:w-1/2 py-3 space-y-5">
        <h1 class="text-3xl font-bold">Laporan Pergerakan Barang</h1>
        <p class="text-lg">
          Lacak perjalanan minyak nilam mulai dari petani, kemudian dikirim ke agen atau koperasi, dilanjutkan ke
          UGreen, hingga akhirnya sampai di Green.
        </p>
        <RouterLink :to="{ name: 'Laporan Produksi' }">
          <BaseButton icon-position="left">
            Laporan
            <BaseIcon name="chevron-right" class="w-4 h-4" />
          </BaseButton>
        </RouterLink>
      </div>
      <div class="md:w-1/2">
        <img src="@/assets/images/inventaris/inventaris-thumbnail-3.png" class="rounded-3xl w-full" />
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
