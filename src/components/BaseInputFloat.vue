<template>
  <!-- https://flowbite.com/docs/forms/floating-label/#floating-label-example -->
  <div class="relative z-0 font-poppins">
    <input
      :type="type"
      :id="name"
      v-model="value"
      class="block pt-3 pb-1.5 px-0 w-full font-semibold text-primary-2 bg-transparent border-0 border-b-2 border-primary-2 appearance-none focus:outline-none focus:ring-0 focus:border-primary-2 peer"
      placeholder=" "
    />
    <label
      :for="name"
      class="absolute text-gray-400 font-semibold duration-300 transform -translate-y-6 scale-90 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6"
    >
      {{ label }}
    </label>
  </div>
  <div class="text-sm my-1 text-gray-900">{{ errorMessage }}</div>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate'

interface Props {
  label: string
  name: string
  type?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
})

const { value, errorMessage } = useField(() => props.name)
</script>
