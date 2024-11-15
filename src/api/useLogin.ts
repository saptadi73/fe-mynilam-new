import { useMutation, useQuery } from '@tanstack/vue-query'
import { apiGet, apiPost } from './apiClient'
import type { LoginAuth, LoginForm, User } from '@/types/login'

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

export function useUser() {
  const path = '/user/profile'
  const getUserProfile = (): Promise<User[]> => apiGet(path)
  return useQuery({
    queryKey: ['user'],
    queryFn: getUserProfile,
  })
}
