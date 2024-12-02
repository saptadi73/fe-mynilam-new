import { useMutation, useQuery } from '@tanstack/vue-query'
import { apiGet, apiPost } from './apiClient'
import type { LoginAuth, LoginForm, User } from '@/types/login'
import { AxiosHeaders } from 'axios'

/**
 * Login token
 */
export function useLogin() {
  const path = '/login_auth/token'
  const headers = new AxiosHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
  })
  const loginFn = (form: LoginForm): Promise<LoginAuth> => apiPost(path, form, headers)
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
