import { useQuery } from '@tanstack/vue-query'
import { apiGet } from './apiClient'
import type { Petani } from '@/types/partner'

export function usePetaniList() {
  const path = '/partner/petani/list'
  const getPetaniList = (): Promise<Petani[]> => apiGet(path)
  return useQuery({
    queryKey: ['petaniList'],
    queryFn: getPetaniList,
  })
}
