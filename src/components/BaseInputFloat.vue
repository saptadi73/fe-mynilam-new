<template>
  <!-- https://flowbite.com/docs/forms/floating-label/#floating-label-example -->
  <div class="relative z-0 font-poppins">
    <div v-if="icon" class="absolute top-4 right-2 flex items-center pointer-events-none text-primary-border">
      <BaseIcon :name="icon" class="w-5" />
    </div>
    <input
      :type="type"
      :id="id || name"
      v-model="value"
      class="block pt-3 pb-1.5 px-0 w-full font-semibold text-primary-2 bg-transparent border-0 border-b-2 border-primary-2 appearance-none focus:outline-none focus:ring-0 focus:border-primary-2 peer"
      placeholder=" "
      :class="inputClass"
      :readonly="readonly"
    />
    <label
      :for="name"
      class="absolute text-gray-400 font-semibold duration-300 transform -translate-y-6 scale-90 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6"
    >
      {{ label }}
    </label>
    <div class="text-xs my-1 text-gray-900" v-if="errorMessage">{{ errorMessage }}</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useField } from 'vee-validate'
import BaseIcon from './BaseIcon.vue'

interface Props {
  label?: string
  name: string
  type?: string
  icon?: string
  id?: string
  initialValue?: string | number
  inputClass?: string
  readonly?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  readonly: false,
})

const { value, errorMessage } = useField(() => props.name)

onMounted(() => {
  if (props.initialValue) value.value = props.initialValue
})
</script>
