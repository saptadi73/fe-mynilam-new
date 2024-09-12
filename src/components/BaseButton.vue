<template>
  <button
    class="button px-4 py-2 hover:opacity-80 hover:shadow-lg"
    :class="{
      '--variant-primary': variant == 'primary',
      '--variant-success': variant == 'success',
      '--variant-dark': variant == 'dark',
    }"
  >
    <div
      class="flex flex-row gap-8 justify-center items-center"
      :class="iconPosition === 'left' ? 'flex-row-reverse' : 'flex-row'"
    >
      <slot></slot>
      <div v-if="icon" class="flex justify-center items-center w-4 h-4">
        <component :is="icon" />
      </div>
    </div>
  </button>
</template>

<script setup lang="ts">
import type { Component } from 'vue'

export interface Props {
  variant?: 'primary' | 'success' | 'dark'
  icon?: Component
  iconPosition?: 'left' | 'right'
}

withDefaults(defineProps<Props>(), { variant: 'primary', iconPosition: 'left' })
</script>

<style scoped lang="scss">
.button {
  @apply text-white block outline-none rounded-xl;
  transition: all ease 0.3s;

  &.--variant-primary {
    @apply bg-[#015438];
  }

  &.--variant-success {
    @apply bg-[#7BB401];
  }

  &.--variant-dark {
    @apply bg-[#015438] text-[#FFCC00];
  }
}
</style>
