import { useQuery } from '@tanstack/vue-query'
import { Ref } from 'vue'
import { apiGet } from './apiClient'
import { Petani, PetaniListParams } from '@/types/partner'

export function useLovPetani(params?: Ref<PetaniListParams>) {
  const path = '/lov/list-petani'
  const getLovPetani = async (): Promise<Petani[]> => {
    const response = await apiGet(path, params?.value)
    return response ? response : []
  }

  return useQuery({
    queryKey: ['lovPetani', params],
    queryFn: getLovPetani,
  })
}

export function useLovProduct() {
  const path = '/lov/list-product'
  const getLovProduct = (): Promise<string> => apiGet(path)
  return useQuery({
    queryKey: ['lovProduct'],
    queryFn: getLovProduct,
  })
}

export function useLovUOM() {
  const path = '/lov/list'
  const getLovUOM = (): Promise<string> => apiGet(path)
  return useQuery({
    queryKey: ['lovUom'],
    queryFn: getLovUOM,
  })
}
