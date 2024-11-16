import { useQuery } from '@tanstack/vue-query'
import { apiGet } from './apiClient'
import { Ref } from 'vue'
import type { Agen, AgenProfileParams, DaftarAgenParams } from '@/types/partner'
import { AgenProfile } from '@/types/agen'

export function useAgenList(params?: Ref<DaftarAgenParams>) {
  const path = '/partner/agent_koperasi/list'
  const getAgenList = (): Promise<Agen[]> => apiGet(path, params?.value)
  return useQuery({
    queryKey: ['agenList', params],
    queryFn: getAgenList,
  })
}

export function useAgenProfile(params?: Ref<AgenProfileParams>) {
  const path = '/partner/agent_koperasi/details'
  const getAgenProfile = (): Promise<AgenProfile[]> => apiGet(path, params?.value)
  return useQuery({
    queryKey: ['agenProfile', params],
    queryFn: getAgenProfile,
  })
}
