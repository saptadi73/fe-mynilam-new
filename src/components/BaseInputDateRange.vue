<template>
  <div :id="name + 'DateRange'" class="flex items-center">
    <div class="relative w-36">
      <input
        :id="name + 'Start'"
        :name="name + 'Start'"
        type="text"
        class="border border-primary-border text-center text-gray-800 text-sm rounded focus:ring-4 focus:ring-primary-light focus:border-primary block w-full p-1"
        :placeholder="placeholderStart"
        @changeDate="handleDateStart"
      />
    </div>
    <span class="mx-2 text-gray-800 text-sm">s/d</span>
    <div class="relative w-36">
      <input
        :id="name + 'End'"
        :name="name + 'End'"
        type="text"
        class="border border-primary-border text-center text-gray-800 text-sm rounded focus:ring-4 focus:ring-primary-light focus:border-primary block w-full p-1"
        :placeholder="placeholderEnd"
        @changeDate="handleDateEnd"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// https://github.com/themesberg/tailwind-vue-starter/blob/main/src/views/Datepicker.vue
import { onMounted, ref, watch } from 'vue'
import { Datepicker, type DatepickerOptions } from 'flowbite'

interface Emits {
  (e: 'change', value: string[]): string[]
}
interface Props {
  placeholderStart: string
  placeholderEnd: string
  name: string
}

defineOptions({ inheritAttrs: false })
const emit = defineEmits<Emits>()
const props = defineProps<Props>()

const dateStart = ref('')
const dateEnd = ref('')

const handleDateStart = (e: Event) => {
  const { value } = e.target as HTMLInputElement
  dateStart.value = value
}

const handleDateEnd = (e: Event) => {
  const { value } = e.target as HTMLInputElement
  dateEnd.value = value
}

watch([dateStart, dateEnd], () => {
  const formattedStartDate = dateStart.value.split('/').reverse().join('-') // yyyy-mm-dd
  const formattedEndDate = dateEnd.value.split('/').reverse().join('-') // yyyy-mm-dd
  const dateRangeValue = [formattedStartDate, formattedEndDate]
  emit('change', dateRangeValue)
})

onMounted(() => {
  // set the target element of the input field
  const $datepickerEl = document.getElementById(props.name + 'DateRange')

  // optional options with default values and callback functions
  const options: DatepickerOptions = {
    defaultDatepickerId: null,
    autohide: true,
    format: 'dd/mm/yyyy',
    maxDate: null,
    minDate: null,
    orientation: 'bottom',
    buttons: false,
    // autoSelectToday: false,
    language: 'id',
    rangePicker: true,
  }

  const instanceOptions = {
    id: props.name + 'DatepickerId',
    override: true,
  }

  if ($datepickerEl) {
    new Datepicker($datepickerEl, options, instanceOptions)
  }
})
</script>
