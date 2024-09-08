<template>
  <div class="flex items-center">
    <input
      :id="id"
      type="checkbox"
      :value="value"
      class="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary focus:ring-2"
    />
    <label :for="id" class="ms-1.5 text-sm text-primary">{{ label }}</label>
  </div>
</template>

<script setup lang="ts">
interface Props {
  label: string
  id: string
  value?: string | number
}

withDefaults(defineProps<Props>(), {
  value: '',
})
</script>
