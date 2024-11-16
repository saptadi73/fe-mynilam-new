import { useQuery } from '@tanstack/vue-query'
import { apiGet } from './apiClient'
import { Ref } from 'vue'
import type { Aset } from '@/types/partner'
import type { DaftarAsetParams } from '@/types/partner'

export function useAsetList(params?: Ref<DaftarAsetParams>) {
  const path = '/assets/list'
  const getAsetList = (): Promise<Aset[]> => apiGet(path, params?.value)
  return useQuery({
    queryKey: ['asetList', params],
    queryFn: getAsetList,
    enabled: () => !!params?.value.kabupaten_id, // only fetch if has kabupaten_id
  })
}
