<template>
  <div class="relative flex justify-between items-center w-full py-8">
    <div class="absolute left-0">
      <BaseButton @click="$router.back()" icon-position="left">
        <BaseIcon name="arrow-left" />
        Kembali
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
