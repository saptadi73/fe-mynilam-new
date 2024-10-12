import { apiClient } from './apiClient'

export async function useHttp(path: string, params: object = {}) {
  const response = await apiClient.get(path, {
    params: params,
  })
  return response.data
}
