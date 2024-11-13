import { useQuery } from '@tanstack/vue-query'
import { apiGet } from './apiClient'
import type { DaftarPenjualan, DaftarPenjualanParams, ReferenceSummary } from '@/types/transaction'
import type { Ref } from 'vue'

// https://tanstack.com/query/v5/docs/framework/vue/guides/query-keys#if-your-query-function-depends-on-a-variable-include-it-in-your-query-key
export function useDaftarPenjualan(params?: Ref<DaftarPenjualanParams>) {
  const path = '/transaction/transaction/list'
  const getDaftarPenjualan = (): Promise<DaftarPenjualan[]> => apiGet(path, params?.value)
  return useQuery({
    queryKey: ['daftarPenjualan', params],
    queryFn: getDaftarPenjualan,
  })
}

export function useReferenceSummary() {
  const path = '/transaction/reference/summary'
  const getReferenceSummary = (): Promise<ReferenceSummary[]> => apiGet(path)
  return useQuery({
    queryKey: ['referenceSummary'],
    queryFn: getReferenceSummary,
  })
}
