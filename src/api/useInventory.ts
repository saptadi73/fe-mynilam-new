import { useQuery } from '@tanstack/vue-query'
import { apiGet } from './apiClient'
import type { StockLocation, StockLocationParams } from '@/types/inventory'
import type { Ref } from 'vue'

export function useStockLocation(params?: Ref<StockLocationParams>) {
  const path = '/inventory/stock/location'
  const getStockLocation = (): Promise<StockLocation[]> => apiGet(path)
  return useQuery({
    queryKey: ['stockLocation', params],
    queryFn: getStockLocation,
  })
}
