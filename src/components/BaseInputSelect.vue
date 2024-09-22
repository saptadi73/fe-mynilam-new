<template>
  <section>
    <div class="inline-block relative">
      <!-- style 1: default dropdown -->
      <button
        v-if="!floatingLabel"
        :id="uniqueNameId"
        :data-dropdown-toggle="uniqueNameId + 'Dropdown'"
        class="text-gray-900 flex min-w-48 justify-between font-semibold border border-primary-border bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-light rounded-lg text-sm px-5 py-1.5 space-x-2 items-center"
        type="button"
      >
        <span class="capitalize">{{ dropdownLabel || placeholder }}</span>
        <BaseIcon name="chevron-right" class="rotate-90 ms-3 h-3 text-gray-500" />
      </button>
      <!-- style 2: floating label dropdown-->
      <div v-else class="relative z-0 font-poppins">
        <div class="absolute top-5 right-2 flex items-center pointer-events-none text-primary-border">
          <BaseIcon name="chevron-right" class="w-2 rotate-90" />
        </div>
        <input
          type="text"
          :id="uniqueNameId"
          v-model="searchValue"
          :data-dropdown-toggle="uniqueNameId + 'Dropdown'"
          @focus="searchValue = ''"
          class="block pt-3 pb-1.5 pl-0 pr-6 w-full font-semibold text-primary-2 bg-transparent border-0 border-b-2 border-primary-2 appearance-none focus:outline-none focus:ring-0 focus:border-primary-2 peer"
          placeholder=" "
        />
        <label
          :for="name"
          class="absolute text-gray-400 font-semibold duration-300 transform -translate-y-6 scale-90 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6"
        >
          {{ placeholder }}
        </label>
      </div>
      <!-- dropdown menu -->
      <div
        :id="uniqueNameId + 'Dropdown'"
        class="z-10 hidden absolute bg-white divide-y divide-gray-100 rounded-lg shadow border w-full"
      >
        <div v-if="!floatingLabel" class="p-3">
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
    <div v-if="errorMessage" class="text-xs my-1">{{ errorMessage }}</div>
  </section>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate'
import { computed, onMounted, ref } from 'vue'
import BaseIcon from './BaseIcon.vue'
import BaseSearchBar from './BaseSearchBar.vue'
import { initDropdowns } from 'flowbite'

interface Option {
  label: string
  value: string | number
}

interface Props {
  options: Option[]
  name: string
  placeholder: string
  floatingLabel?: boolean
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

const uniqueNameId = computed(() => {
  return props.name + Math.floor(Math.random() * 9999)
})

const dropdownLabel = ref(getLabelByValue(value.value))
const searchValue = ref()

const filteredOptions = computed(() => {
  return props.options.filter((option) => option.label.toLowerCase().includes(searchValue.value))
})

const handleSelectDropdown = (option: Option) => {
  dropdownLabel.value = option.label
  value.value = option.value
  if (props.floatingLabel) searchValue.value = option.label
  document.getElementById(uniqueNameId.value)?.click() // to close dropdown menu
}

onMounted(() => {
  initDropdowns() // init flowbite dropdown
})
</script>
