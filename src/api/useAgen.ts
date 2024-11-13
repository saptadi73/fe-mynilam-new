import { useQuery } from '@tanstack/vue-query'
import { apiGet } from './apiClient'
import { Ref } from 'vue'
import type { Agen } from '@/types/partner'
import type { DaftarAgenParams } from '@/types/partner'

export function useAgenList(params?: Ref<DaftarAgenParams>) {
  const path = '/partner/agent_koperasi/list'
  const getAgenList = (): Promise<Agen[]> => apiGet(path, params?.value)
  return useQuery({
    queryKey: ['agenList', params],
    queryFn: getAgenList,
  })
}
