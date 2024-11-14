<template>
  <div class="relative flex justify-between items-center w-full pt-16 pb-5 lg:pt-8 lg:pb-8">
    <div v-if="backButton" class="absolute left-0 top-6 lg:top-auto">
      <BaseButton @click="backButton === true ? $router.back() : $router.push(backButton)" icon-position="left">
        <BaseIcon name="arrow-left" class="w-3 md:w-5" />
        <span class="text-sm md:text-lg">Kembali</span>
      </BaseButton>
    </div>
    <h1 class="mx-auto text-center font-bold text-3xl text-primary">{{ title }}</h1>
  </div>
</template>

<script setup lang="ts">
import BaseButton from './BaseButton.vue'
import BaseIcon from './BaseIcon.vue'

interface Props {
  title: string
  backButton?: boolean | string
}
withDefaults(defineProps<Props>(), {
  backButton: true,
})
</script>
