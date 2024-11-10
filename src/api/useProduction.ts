import { useQuery } from '@tanstack/vue-query'
import { apiGet } from './apiClient'
import type { Harvesting } from '@/types/production'

export function useHarvestingList() {
  const path = '/production/harvesting/list'
  const getHarvestingList = (): Promise<Harvesting[]> => apiGet(path)
  return useQuery({
    queryKey: ['harvestingList'],
    queryFn: getHarvestingList,
  })
}
