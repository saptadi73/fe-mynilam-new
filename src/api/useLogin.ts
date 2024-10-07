import { useMutation } from '@tanstack/vue-query'
import { apiClient } from './apiClient'
import type { LoginAuth, LoginForm } from '@/types/login'

/**
 * Login token
 */
export function useLogin() {
  const path = '/login_auth/token'
  const loginFn = async (form: LoginForm): Promise<LoginAuth> => {
    const response = await apiClient.post(path, form)
    return response.data
  }
  return useMutation({
    mutationFn: loginFn,
  })
}
