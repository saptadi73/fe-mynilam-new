<template>
  <form @submit="onSubmit">
    <div class="mb-8">
      <BaseInputFloat name="email" type="email" label="Enter Email" />
    </div>
    <div class="mb-5">
      <BaseInputFloat name="password" type="password" label="Enter Password" />
    </div>
    <div class="flex justify-between items-center mb-5">
      <BaseCheckbox label="Ingat saya" id="remember" />
      <button type="button" class="font-semibold text-primary text-sm">Lupa Password</button>
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
import { useLogin } from '@/api/useLogin'
import { useRouter } from 'vue-router'
import { string, object } from 'yup'
import type { LoginForm } from '@/types/login'

const router = useRouter()
const login = useLogin()

const { handleSubmit } = useForm<LoginForm>({
  validationSchema: object({
    email: string().required().email().label('Email'),
    password: string().required().min(6).label('Password'),
  }),
  initialValues: {
    email: 'test@gmail.com',
  },
})

const onSubmit = handleSubmit((values) => {
  login.mutate(values, {
    onSuccess: (data) => {
      localStorage.setItem('token', data.access_token)
      router.push('/')
    },
  })
})
</script>
