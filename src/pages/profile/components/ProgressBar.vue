<template>
  <div class="w-7/12 bg-gray-200 rounded-full dark:bg-gray-700 ml-4">
    <div
      class="bg-primary text-sm font-semibold text-white text-center p-0.5 leading-none rounded-full"
      :style="{ width: progress }"
    >
      {{ progress }}
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  progress: string
}

defineProps<Props>()
</script>
