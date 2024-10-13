import { useMutation } from '@tanstack/vue-query'
import { apiPost } from './apiClient'
import type { LoginAuth, LoginForm } from '@/types/login'

/**
 * Login token
 */
export function useLogin() {
  const path = '/login_auth/token'
  const loginFn = (form: LoginForm): Promise<LoginAuth> => apiPost(path, form)
  return useMutation({
    mutationFn: loginFn,
  })
}
