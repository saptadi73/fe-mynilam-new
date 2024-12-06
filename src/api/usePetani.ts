import { useMutation, useQuery } from '@tanstack/vue-query'
import { apiGet, apiPatch, apiPost } from './apiClient'
import { Ref } from 'vue'
import type { Petani, PetaniProfile, PetaniProfileParams, PetaniListParams, PetaniForm } from '@/types/partner'
import { AxiosHeaders } from 'axios'

export function usePetaniList(params?: Ref<PetaniListParams>) {
  const path = '/partner/petani/list'
  const getPetaniList = (): Promise<Petani[]> => apiGet(path, params?.value)
  return useQuery({
    queryKey: ['petaniList', params],
    queryFn: getPetaniList,
    enabled: () => !!params?.value.kabupaten_id, // only fetch if has kabupaten_id
  })
}

export function usePetaniProfile(params?: Ref<PetaniProfileParams>) {
  const path = '/partner/petani/details'
  const getPetaniProfile = (): Promise<PetaniProfile> => apiGet(path, params?.value)
  return useQuery({
    queryKey: ['petaniProfile', params],
    queryFn: getPetaniProfile,
  })
}

export function usePetaniCreate() {
  const path = '/partner/petani/create'
  const headers = new AxiosHeaders({
    'Content-Type': 'application/json',
  })
  const petaniCreateFn = (form: PetaniForm): Promise<string> => apiPost(path, form, headers)
  return useMutation({
    mutationFn: petaniCreateFn,
  })
}

export function usePetaniUpdate(id: any) {
  const path = '/partner/petani/update'
  const headers = new AxiosHeaders({
    'Content-Type': 'application/json',
  })
  const petaniUpdateFn = (form: PetaniForm): Promise<string> => apiPatch(path, form, headers, id)
  return useMutation({
    mutationFn: petaniUpdateFn,
  })
}

export function usePetaniUploadPhoto() {
  const path = '/partner/petani/upload-photo'
  const headers = new AxiosHeaders({
    'Content-Type': 'multipart/form-data',
  })
  const petaniUploadPhotoFn = (form: FormData): Promise<string> => apiPost(path, form, headers)
  return useMutation({
    mutationFn: petaniUploadPhotoFn,
  })
}
