import { useMutation, useQuery } from '@tanstack/vue-query'
import { apiGet, apiPatch, apiPost } from './apiClient'
import { Ref } from 'vue'
import type { Aset, DaftarAsetParams, LahanDetail, LahanDetailParams, LahanForm } from '@/types/partner'
import { AxiosHeaders } from 'axios'

export function useAsetList(params?: Ref<DaftarAsetParams>) {
  const path = '/assets/list'
  const getAsetList = (): Promise<Aset[]> => apiGet(path, params?.value)
  return useQuery({
    queryKey: ['asetList', params],
    queryFn: getAsetList,
  })
}

export function useLahanDetail(params: Ref<LahanDetailParams>) {
  const path = '/assets/details'
  const getAsetDetail = (): Promise<LahanDetail[]> => apiGet(path, params?.value)

  return useQuery({
    queryKey: ['asetDetail', params],
    queryFn: getAsetDetail,
    enabled: () => !!params?.value.asset_id, // only fetch if has id_harvesting
  })
}

export function useLahanCreate() {
  const path = '/assets/create'
  const headers = new AxiosHeaders({
    'Content-Type': 'application/json',
  })
  const lahanCreateFn = (form: LahanForm): Promise<string> => apiPost(path, form, headers)
  return useMutation({
    mutationFn: lahanCreateFn,
  })
}

export function useLahanUpdate(id: any) {
  const path = '/assets/update'
  const headers = new AxiosHeaders({
    'Content-Type': 'application/json',
  })
  const petaniUpdateFn = (form: LahanForm): Promise<string> => apiPatch(path, form, headers, id)
  return useMutation({
    mutationFn: petaniUpdateFn,
  })
}

export function useLahanUploadPhoto() {
  const path = '/assets/upload-photo'
  const headers = new AxiosHeaders({
    'Content-Type': 'multipart/form-data',
  })
  const lahanUploadPhotoFn = (form: FormData): Promise<string> => apiPost(path, form, headers)
  return useMutation({
    mutationFn: lahanUploadPhotoFn,
  })
}

export function useLahanUploadShp() {
  const path = '/assets/geojson'
  const headers = new AxiosHeaders({
    'Content-Type': 'multipart/form-data',
  })
  const lahanUploadShpPhotoFn = (form: FormData): Promise<string> => apiPost(path, form, headers)
  return useMutation({
    mutationFn: lahanUploadShpPhotoFn,
  })
}
