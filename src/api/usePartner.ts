import { useQuery } from '@tanstack/vue-query'
import { apiGet } from './apiClient'
import type { Petani, PetaniListParams } from '@/types/partner'
import type { Ref } from 'vue'

export function usePetaniList(params?: Ref<PetaniListParams>) {
  const path = '/partner/petani/list'
  const getPetaniList = (): Promise<Petani[]> => apiGet(path, params?.value)
  return useQuery({
    queryKey: ['petaniList', params],
    queryFn: getPetaniList,
  })
}
