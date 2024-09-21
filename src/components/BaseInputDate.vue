<template>
  <BaseInputFloat :name="name" :label="label" icon="calendar" :id="uniqueNameId" />
</template>

<script setup lang="ts">
import BaseInputFloat from '@/components/BaseInputFloat.vue'
import { Datepicker, type DatepickerOptions } from 'flowbite'
import { computed, onMounted } from 'vue'

interface Props {
  name: string
  label: string
}
const props = defineProps<Props>()

const uniqueNameId = computed(() => {
  return props.name + Math.floor(Math.random() * 9999)
})

onMounted(() => {
  // set the target element of the input field
  const $datepickerEl = document.getElementById(uniqueNameId.value)
  // optional options with default values and callback functions
  const options: DatepickerOptions = {
    defaultDatepickerId: null,
    autohide: true,
    format: 'dd/mm/yyyy',
    maxDate: null,
    minDate: null,
    orientation: 'bottom',
    buttons: false,
    language: 'id',
    rangePicker: false,
  }

  const instanceOptions = {
    id: uniqueNameId.value,
    override: true,
  }

  new Datepicker($datepickerEl, options, instanceOptions)

  // trigger v-model on date change
  $datepickerEl?.addEventListener('changeDate', (e) => {
    const dateValue = (e.target as HTMLInputElement).value
    if (dateValue) $datepickerEl.dispatchEvent(new Event('input'))
  })
})
</script>
