<template>
  <form @submit="onSubmit">
    <div class="mb-5">
      <BaseInputFloat name="name" type="text" label="Enter Name" />
    </div>
    <div class="mb-5">
      <BaseInputFloat name="email" type="email" label="Enter Email" />
    </div>
    <div class="mb-5">
      <BaseInputFloat name="password" type="password" label="Create Password" />
    </div>
    <div class="mb-5">
      <BaseInputFloat name="confirmPassword" type="password" label="Confirm Password" />
    </div>
    <div class="mb-8">
      <button type="submit" class="bg-primary rounded-full text-white font-semibold w-full p-2.5">Registrasi</button>
    </div>
    <slot name="footer" />
  </form>
</template>

<script setup lang="ts">
import BaseInputFloat from '@/components/BaseInputFloat.vue'
import { useForm } from 'vee-validate'
import * as yup from 'yup'

const { handleSubmit } = useForm({
  validationSchema: yup.object({
    email: yup.string().required().email().label('Email'),
    password: yup.string().required().min(6).label('Password'),
    name: yup.string().required().min(3).label('Name'),
    confirmPassword: yup
      .string()
      .required()
      .min(6)
      .oneOf([yup.ref('password')], 'Password must match'),
  }),
})

const onSubmit = handleSubmit((values) => {
  console.log(values)
})
</script>
