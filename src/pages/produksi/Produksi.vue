<template>
  <div class="p-2 bg-primary-light">
    <h1 class="font-bold text-center text-3xl px-64 py-12 text-primary">
      Manajemen Produksi Daftar Pembuatan dan Laporan
    </h1>
    <div class="px-12">
      <img
        class="banner-image rounded-3xl border-4 border-[#B2B4E0]"
        src="@/assets/images/banner-dashboard.jpg"
        alt="Banner Dashboard Image"
      />
    </div>

    <p class="text-center px-40 py-4">
      Kelola produksi dengan daftar produksi terbaru yang baru dibuat, pantau daftar produksi yang sedang berjalan, dan
      tinjau laporan produksi untuk mendapatkan gambaran menyeluruh tentang hasil dan efisiensi. Pastikan setiap tahap
      produksi terdokumentasi dengan baik dari pembuatan hingga pelaporan.
    </p>

    <section class="my-10 p-8 text-primary flex items-start space-x-10 w-full">
      <div class="w-1/2 py-3 space-y-5">
        <h1 class="text-3xl font-bold">Lorem ipsum dolor sit amet.</h1>
        <p class="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, eum exercitationem nisi ratione facere
          incidunt culpa distinctio quam vero dignissimos.
        </p>
        <BaseButton icon-position="left">
          Lihat Produksi
          <BaseIcon name="chevron-right" class="w-4 h-4" />
        </BaseButton>
      </div>
      <div class="w-1/2">
        <img src="https://placehold.co/800x600" class="rounded-3xl w-full" />
      </div>
    </section>

    <section class="my-10 p-8 text-primary flex items-start space-x-10 w-full">
      <div class="w-5/12">
        <img src="https://placehold.co/600x600" class="rounded-3xl w-full" />
      </div>
      <div class="w-7/12 py-3 space-y-5">
        <h1 class="text-3xl font-bold">Lorem ipsum dolor sit amet.</h1>
        <p class="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, eum exercitationem nisi ratione facere
          incidunt culpa distinctio quam vero dignissimos.
        </p>
        <BaseButton icon-position="left">
          Lihat Produksi
          <BaseIcon name="chevron-right" class="w-4 h-4" />
        </BaseButton>
      </div>
    </section>

    <section class="my-10 p-8 text-primary flex items-start space-x-10 w-full">
      <div class="w-1/2 py-3 space-y-5">
        <h1 class="text-3xl font-bold">Lorem ipsum dolor sit amet.</h1>
        <p class="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, eum exercitationem nisi ratione facere
          incidunt culpa distinctio quam vero dignissimos.
        </p>
        <BaseButton icon-position="left">
          Lihat Produksi
          <BaseIcon name="chevron-right" class="w-4 h-4" />
        </BaseButton>
      </div>
      <div class="w-1/2">
        <img src="https://placehold.co/800x600" class="rounded-3xl w-full" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue'
import BaseIcon from '@/components/BaseIcon.vue'
</script>
