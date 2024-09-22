<template>
  <div class="bg-image-wave px-16 pb-10">
    <BaseHeaderTitle title="Buat Daftar Produksi Petani" />
    <section class="rounded-3xl bg-[#f5fdfe] border-2 border-primary py-5 px-8 md:flex">
      <FormTanam />
      <FormMinyakNilam />
    </section>
  </div>
</template>

<script setup lang="ts">
import BaseHeaderTitle from '@/components/BaseHeaderTitle.vue'
import FormMinyakNilam from './components/FormMinyakNilam.vue'
import FormTanam from './components/FormTanam.vue'
</script>
