<template>
  <label for="table-search" class="sr-only">Search</label>
  <div class="relative">
    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
      <BaseIcon name="search" class="w-4 h-4 text-gray-500" />
    </div>
    <input
      type="text"
      id="table-search"
      class="block pt-2 ps-10 text-sm text-gray-900 border-2 border-gray-200 rounded-lg w-60 h-8 focus:ring-primary-light focus:border-gray-200"
      :class="$attrs.class"
      :placeholder="placeholder"
      v-model="model"
    />
  </div>
</template>

<script setup lang="ts">
import BaseIcon from './BaseIcon.vue'

interface Props {
  placeholder: string
}

defineProps<Props>()
const model = defineModel()
</script>
