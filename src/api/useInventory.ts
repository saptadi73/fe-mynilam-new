import { useQuery } from '@tanstack/vue-query'
import { apiGet } from './apiClient'
import type { InventoryQuant, InventoryQuantParams, StockLocation, StockLocationParams } from '@/types/inventory'
import type { Ref } from 'vue'

export function useStockLocation(params: Ref<StockLocationParams>) {
  const path = '/inventory/stock/location'
  const getStockLocation = (): Promise<StockLocation[]> => apiGet(path, params.value)
  return useQuery({
    queryKey: ['stockLocation', params],
    queryFn: getStockLocation,
    enabled: () => !!params.value.kabupaten_id,
  })
}

export function useInventoryQuant(params?: Ref<InventoryQuantParams>) {
  const path = '/inventory/quant'
  const getInventoryQuant = (): Promise<InventoryQuant[]> => apiGet(path, params?.value)
  return useQuery({
    queryKey: ['inventoryQuant', params],
    queryFn: getInventoryQuant,
    enabled: () => !!params?.value.employee_id, // only fetch if has employee_id
  })
}
