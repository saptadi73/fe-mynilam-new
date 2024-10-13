import { useQuery } from '@tanstack/vue-query'
import { apiGet } from './apiGet'
import type { Kabupaten } from '@/types/localization'

export function useKabupaten() {
  const path = '/localization/kabupaten'
  const getKabupaten = (): Promise<Kabupaten[]> => apiGet(path)
  return useQuery({
    queryKey: ['kabupaten'],
    queryFn: getKabupaten,
  })
}
