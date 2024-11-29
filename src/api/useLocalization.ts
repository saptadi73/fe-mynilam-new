import { useQuery } from '@tanstack/vue-query'
import { apiGet } from './apiClient'
import type { Kabupaten, Provinsi } from '@/types/localization'

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

export function useProvinsi() {
  const path = '/localization/provinsi?country_id=100'
  const getProvinsi = async (): Promise<Provinsi[]> => {
    const response = await apiGet(path)
    // get prov aceh only
    return [response[0]]
  }

  return useQuery({
    queryKey: ['provinsi'],
    queryFn: getProvinsi,
    refetchOnMount: false,
  })
}
