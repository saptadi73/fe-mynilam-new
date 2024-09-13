<template>
  <section>
    <div class="inline-block relative">
      <!-- dropdown button -->
      <button
        :id="name"
        :data-dropdown-toggle="name + 'Dropdown'"
        class="text-gray-900 flex min-w-64 justify-between font-semibold border-2 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-light rounded-lg text-sm px-5 py-1.5 space-x-2 items-center"
        type="button"
      >
        <span>{{ dropdownLabel || 'Pilih Kabupaten' }}</span>
        <BaseIcon name="arrow-right" class="rotate-90 ms-3 h-3 text-gray-500" />
      </button>
      <!-- dropdown menu -->
      <div
        :id="name + 'Dropdown'"
        class="z-10 hidden absolute bg-white divide-y divide-gray-100 rounded-lg shadow border w-full"
      >
        <div class="p-3">
          <BaseSearchBar v-model="searchValue" class="w-full" placeholder="Cari" />
        </div>
        <ul class="text-sm text-gray-800 w-full" :aria-labelledby="name">
          <li v-for="option in filteredOptions" :key="option.value">
            <div class="cursor-pointer px-4 py-2 hover:bg-primary-light" @click="handleSelectDropdown(option)">
              {{ option.label }}
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div>{{ errorMessage }}</div>
  </section>
</template>

<script setup lang="ts">
import { initDropdowns } from 'flowbite'
import { computed, onMounted, ref } from 'vue'
import { useField } from 'vee-validate'
import BaseIcon from './BaseIcon.vue'
import BaseSearchBar from './BaseSearchBar.vue'

interface Option {
  label: string
  value: string | number
}

interface Props {
  options: Option[]
  name: string
}

const props = withDefaults(defineProps<Props>(), {
  options: () => [],
})

const { value, errorMessage } = useField<string | number>(() => props.name)

// to get default value
const getLabelByValue = (val: string | number) => {
  const obj = props.options.find((option) => option.value === val)
  return obj?.label
}

const dropdownLabel = ref(getLabelByValue(value.value))
const searchValue = ref('')

const filteredOptions = computed(() => {
  return props.options.filter((option) => option.label.toLowerCase().includes(searchValue.value))
})

const handleSelectDropdown = (option: Option) => {
  document.getElementById(props.name)?.click() // to close dropdown menu
  dropdownLabel.value = option.label
  value.value = option.value
}

onMounted(() => {
  initDropdowns() // init flowbite dropdown
})
</script>
