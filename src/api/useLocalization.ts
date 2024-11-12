import { useQuery } from '@tanstack/vue-query'
import { apiGet } from './apiClient'
import type { Kabupaten } from '@/types/localization'

export function useKabupaten() {
  // id prov aceh
  const path = '/localization/kabupaten_by_provinsi_id/613'
  const getKabupaten = (): Promise<Kabupaten[]> => apiGet(path)
  return useQuery({
    queryKey: ['kabupaten'],
    queryFn: getKabupaten,
    refetchOnMount: false,
  })
}
