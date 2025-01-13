import { useMutation, useQuery } from '@tanstack/vue-query'
import { apiGet, apiPost } from './apiClient'
import { ApiSuccess } from '@/types/common'
import { toFormData } from '@/utils/useCommonUtils'
import { AxiosHeaders } from 'axios'
// prettier-ignore
import type { CreateHarvestingParams, CreatePlantingParams, Harvesting, HarvestingParams, UploadPhotoPlantingParams, } from '@/types/production'
import type { Ref } from 'vue'

export function useHarvestingList(params?: Ref<HarvestingParams>) {
  const path = '/production/harvesting/list'
  const getHarvestingList = (): Promise<Harvesting[]> => apiGet(path, params?.value)
  return useQuery({
    queryKey: ['harvestingList', params],
    queryFn: getHarvestingList,
  })
}

type CreatePlantingRes = Promise<ApiSuccess<{ planting_id: number }>>
export function useCreatePlanting() {
  const path = '/production/planting/create'
  const createPlantingFn = (params: CreatePlantingParams): CreatePlantingRes => apiPost(path, params)
  return useMutation({
    mutationFn: createPlantingFn,
  })
}

export function useCreateHarvesting() {
  const path = '/production/harvesting/create'
  const createHarvestingFn = (params: CreateHarvestingParams): Promise<ApiSuccess> => apiPost(path, params)
  return useMutation({
    mutationFn: createHarvestingFn,
  })
}

export function useUploadPhotoPlanting() {
  const path = '/production/planting/upload-photo'
  const headers = new AxiosHeaders({ 'Content-Type': 'multipart/form-data' })
  const uploadPhotoFn = (params: UploadPhotoPlantingParams): Promise<ApiSuccess> => {
    return apiPost(path, toFormData(params), headers)
  }
  return useMutation({
    mutationFn: uploadPhotoFn,
  })
}
