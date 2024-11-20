import { useQuery } from '@tanstack/vue-query'
import { apiGet } from './apiClient'
import type { Harvesting, HarvestingParams } from '@/types/production'
import type { Ref } from 'vue'

export function useHarvestingList(params?: Ref<HarvestingParams>) {
  const path = '/production/harvesting/list'
  const getHarvestingList = (): Promise<Harvesting[]> => apiGet(path, params?.value)
  return useQuery({
    queryKey: ['harvestingList', params],
    queryFn: getHarvestingList,
  })
}
