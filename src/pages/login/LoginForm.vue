<template>
  <form @submit="onSubmit">
    <div class="mb-8">
      <BaseInputFloat name="email" type="email" label="Enter Email" />
    </div>
    <div class="mb-5">
      <BaseInputFloat name="password" type="password" label="Enter Password" />
    </div>
    <div class="flex justify-between items-center mb-5">
      <BaseCheckbox label="Remember me" id="remember" />
      <button type="button" class="font-semibold text-primary text-sm">Forgot Password</button>
    </div>
    <div class="mb-8">
      <button type="submit" class="bg-primary rounded-full text-white font-semibold w-full p-2.5">Login</button>
    </div>
    <slot name="footer" />
  </form>
</template>

<script setup lang="ts">
import BaseCheckbox from '@/components/BaseCheckbox.vue'
import BaseInputFloat from '@/components/BaseInputFloat.vue'
import { useForm } from 'vee-validate'
import * as yup from 'yup'

const { handleSubmit } = useForm({
  validationSchema: yup.object({
    email: yup.string().required().email().label('Email'),
    password: yup.string().required().min(6).label('Password'),
  }),
  initialValues: {
    email: 'test@gmail.com',
  },
})

const onSubmit = handleSubmit((values) => {
  console.log(values)
})
</script>
