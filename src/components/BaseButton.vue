<template>
  <button
    class="button font-cera text-xl px-4 py-1 hover:opacity-80 hover:shadow-lg"
    :class="{
      '--variant-primary': variant == 'primary',
      '--variant-success': variant == 'success',
      '--variant-dark': variant == 'dark',
      '--variant-primary-light': variant == 'primary-light',
    }"
    :type="type"
    :disabled="disabled"
  >
    <div
      class="flex flex-row justify-center items-center"
      :class="[iconPosition === 'right' ? 'flex-row-reverse' : 'flex-row', iconGap === 'small' ? 'gap-3' : 'gap-8']"
    >
      <slot></slot>
      <div v-if="icon" class="flex justify-center items-center w-4 h-4">
        <component :is="icon" />
      </div>
    </div>
  </button>
</template>

<script setup lang="ts">
import type { ButtonHTMLAttributes, Component } from 'vue'

export interface Props {
  variant?: 'primary' | 'success' | 'dark' | 'primary-light'
  icon?: Component
  iconPosition?: 'left' | 'right'
  iconGap?: 'small' | 'big'
  type?: ButtonHTMLAttributes['type']
  disabled?: boolean
}

withDefaults(defineProps<Props>(), { variant: 'primary', iconPosition: 'right', iconGap: 'small' })
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

  &.--variant-primary-light {
    @apply bg-[#d6e8b0] text-primary;
  }
}
</style>
