import { useQuery } from '@tanstack/vue-query'
import { apiGet } from './apiClient'
import type { DaftarPenjualan, DaftarPenjualanParams } from '@/types/transaction'

export function useDaftarPenjualan(params?: DaftarPenjualanParams) {
  const path = '/transaction/transaction/list'
  const getDaftarPenjualan = (): Promise<DaftarPenjualan[]> => apiGet(path, params)
  return useQuery({
    queryKey: ['daftarPenjualan'],
    queryFn: getDaftarPenjualan,
  })
}
