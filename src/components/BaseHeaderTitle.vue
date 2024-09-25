<template>
  <div class="relative flex justify-between items-center w-full pt-14 pb-5 lg:pt-8 lg:pb-8">
    <div class="absolute left-0 top-3 lg:top-auto">
      <BaseButton @click="$router.back()" icon-position="left">
        <BaseIcon name="arrow-left" class="w-3 md:w-5" />
        <span class="text-sm md:text-lg">Kembali</span>
      </BaseButton>
    </div>
    <h1 class="mx-auto font-bold text-3xl text-primary">{{ title }}</h1>
  </div>
</template>

<script setup lang="ts">
import BaseButton from './BaseButton.vue'
import BaseIcon from './BaseIcon.vue'

interface Props {
  title: string
}
defineProps<Props>()
</script>
