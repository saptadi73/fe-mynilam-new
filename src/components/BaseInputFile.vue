<template>
  <div>
    <div class="text-primary font-semibold">{{ label }}</div>
    <label :for="name" class="inline-block cursor-pointer bg-[#7BB401] text-white py-1 px-4 rounded">
      Select File
      <input :id="name" :name="name" type="file" :accept="fileType" class="hidden" @change="handleFileChange" />
    </label>
    <span class="ml-2 text-primary">{{ fileName }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  label: string
  name: string
  fileType: string
}

const fileName = ref('No file chosen')
const emit = defineEmits(['fileSelected'])

function handleFileChange(event: Event) {
  const input = event.target as HTMLInputElement
  if (input.files && input.files.length > 0) {
    fileName.value = input.files[0].name
    emit('fileSelected', input.files[0])
  } else {
    fileName.value = 'No file chosen'
  }
}

defineProps<Props>()
</script>
