import { apiClient } from './apiClient'

export const apiGet = async (path: string) => {
  const response = await apiClient.get(path)
  return response.data.data
}
