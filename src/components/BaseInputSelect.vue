<template>
  <div class="relative">
    <!-- style 1: default dropdown -->
    <button
      v-if="!floatingLabel"
      :id="uniqueNameId"
      :data-dropdown-toggle="uniqueNameId + 'Dropdown'"
      class="text-gray-900 flex min-w-28 justify-between font-semibold border border-primary-border bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-light rounded-lg text-sm px-5 py-1.5 space-x-2 items-center"
      :class="$attrs.class"
      type="button"
    >
      <span class="capitalize text-ellipsis whitespace-nowrap overflow-x-hidden">
        {{ dropdownLabel || placeholder }}
      </span>
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
        @focus="handleOnFocus"
        @blur="handleOnBlur"
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
    <Teleport to="body">
      <div
        :id="uniqueNameId + 'Dropdown'"
        class="z-50 hidden absolute bg-white divide-y divide-gray-100 rounded-lg shadow border"
      >
        <div v-if="!floatingLabel" class="p-3">
          <BaseSearchBar v-model="searchValue" class="w-full" placeholder="Cari" />
        </div>
        <ul class="text-sm text-gray-800 w-full max-h-64 overflow-y-auto">
          <li v-for="option in filteredOptions" :key="option[props.valueKey]">
            <div class="cursor-pointer px-4 py-2 hover:bg-primary-light" @click="handleSelectDropdown(option)">
              {{ option[props.labelKey] }}
            </div>
          </li>
        </ul>
      </div>
    </Teleport>
    <div v-if="errorMessage && !onFocus" class="text-xs my-1">{{ errorMessage }}</div>
  </div>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate'
import { computed, onMounted, ref } from 'vue'
import BaseIcon from './BaseIcon.vue'
import BaseSearchBar from './BaseSearchBar.vue'
import { initDropdowns } from 'flowbite'

interface Option {
  [key: string]: string | number
}

interface Props {
  options: Option[]
  name: string
  placeholder: string
  floatingLabel?: boolean
  labelKey?: string // custom label key
  valueKey?: string // custom value key
}

const props = withDefaults(defineProps<Props>(), {
  options: () => [],
  labelKey: 'label',
  valueKey: 'value',
})

const { value, errorMessage } = useField<string | number>(() => props.name)
const onFocus = ref(false)

// to get default value
const getLabelByValue = (val: string | number) => {
  const obj = props.options.find((option) => option[props.valueKey] === val)
  return obj?.label
}

const uniqueNameId = computed(() => {
  return props.name + Math.floor(Math.random() * 9999)
})

const dropdownLabel = ref(getLabelByValue(value.value))
const searchValue = ref('')

const filteredOptions = computed(() => {
  return props.options.filter((option) => option[props.labelKey].toString().toLowerCase().includes(searchValue.value))
})

const handleOnFocus = () => {
  onFocus.value = true
  value.value = ''
  searchValue.value = ''
}

const handleOnBlur = () => {
  // add delay to prevent error message when set value
  setTimeout(() => {
    onFocus.value = false
  }, 500)
}

const handleSelectDropdown = (option: Option) => {
  dropdownLabel.value = option[props.labelKey]
  value.value = option[props.valueKey]
  if (props.floatingLabel) searchValue.value = option[props.labelKey].toString()
  document.getElementById(uniqueNameId.value)?.click() // to close dropdown menu
}

onMounted(() => {
  // init flowbite dropdown
  initDropdowns()
  // set dropdown width
  const dropdownButtonWidth = document.getElementById(uniqueNameId.value)?.offsetWidth
  const dropdownMenu = document.getElementById(uniqueNameId.value + 'Dropdown')
  if (dropdownButtonWidth && dropdownMenu) dropdownMenu.style.maxWidth = dropdownButtonWidth + 'px'
})
</script>
