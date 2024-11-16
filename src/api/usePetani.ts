import { useQuery } from '@tanstack/vue-query'
import { apiGet } from './apiClient'
import { Ref } from 'vue'
import type { Petani } from '@/types/partner'
import type { PetaniListParams } from '@/types/partner'

export function usePetaniList(params?: Ref<PetaniListParams>) {
  const path = '/partner/petani/list'
  const getPetaniList = (): Promise<Petani[]> => apiGet(path, params?.value)
  return useQuery({
    queryKey: ['petaniList', params],
    queryFn: getPetaniList,
    enabled: !!params?.value.kabupaten_id, // only fetch if has kabupaten_id
  })
}
