<template>
  <BaseInputFloat :name="name" :label="label" icon="calendar" />
</template>

<script setup lang="ts">
import BaseInputFloat from '@/components/BaseInputFloat.vue'
import { Datepicker, type DatepickerOptions } from 'flowbite'
import { onMounted } from 'vue'

interface Props {
  name: string
  label: string
}
const props = defineProps<Props>()

onMounted(() => {
  // set the target element of the input field
  const $datepickerEl = document.getElementById(props.name)
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
    id: props.name + 'DateInstance',
    override: true,
  }

  new Datepicker($datepickerEl, options, instanceOptions)

  $datepickerEl?.addEventListener('changeDate', (e) => {
    console.log((e.target as HTMLInputElement).value)
    const dateValue = (e.target as HTMLInputElement).value
    if (dateValue) $datepickerEl.dispatchEvent(new Event('input'))
  })
})
</script>
