import { useQuery } from '@tanstack/vue-query'
import { apiGet } from './apiClient'
import { Ref } from 'vue'
import type { Aset, DaftarAsetParams, LahanDetail, LahanDetailParams } from '@/types/partner'

export function useAsetList(params?: Ref<DaftarAsetParams>) {
  const path = '/assets/list'
  const getAsetList = (): Promise<Aset[]> => apiGet(path, params?.value)
  return useQuery({
    queryKey: ['asetList', params],
    queryFn: getAsetList,
  })
}

export function useLahanDetail(params: Ref<LahanDetailParams>) {
  const path = '/assets/details'
  const getAsetDetail = (): Promise<LahanDetail[]> => apiGet(path, params?.value)

  return useQuery({
    queryKey: ['asetDetail', params],
    queryFn: getAsetDetail,
    enabled: () => !!params?.value.asset_id, // only fetch if has id_harvesting
  })
}
