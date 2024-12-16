import { useMutation, useQuery } from '@tanstack/vue-query'
import { apiGet, apiPost } from './apiClient'
import type { CreatePlantingParams, Harvesting, HarvestingParams } from '@/types/production'
import type { Ref } from 'vue'
import { ApiSuccess } from '@/types/common'

export function useHarvestingList(params?: Ref<HarvestingParams>) {
  const path = '/production/harvesting/list'
  const getHarvestingList = (): Promise<Harvesting[]> => apiGet(path, params?.value)
  return useQuery({
    queryKey: ['harvestingList', params],
    queryFn: getHarvestingList,
  })
}

export function useCreatePlanting() {
  const path = '/production/planting/create'
  const createPlantingFn = (params: CreatePlantingParams): Promise<ApiSuccess> => apiPost(path, params)
  return useMutation({
    mutationFn: createPlantingFn,
  })
}
