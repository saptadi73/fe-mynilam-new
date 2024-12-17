import { useQuery } from '@tanstack/vue-query'
import { apiGet } from './apiClient'

export function useLovProduct() {
  const path = '/lov/list-product'
  const getLovProduct = (): Promise<string> => apiGet(path)
  return useQuery({
    queryKey: ['lovProduct'],
    queryFn: getLovProduct,
  })
}
