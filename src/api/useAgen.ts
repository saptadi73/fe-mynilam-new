import { useMutation, useQuery } from '@tanstack/vue-query'
import { apiGet, apiPatch, apiPost } from './apiClient'
import { Ref } from 'vue'
import type { Agen, AgenForm, AgenProfileParams, DaftarAgenParams } from '@/types/partner'
import { AgenProfile } from '@/types/agen'
import { AxiosHeaders } from 'axios'

export function useAgenList(params?: Ref<DaftarAgenParams>) {
  const path = '/partner/agent_koperasi/list'
  const getAgenList = (): Promise<Agen[]> => apiGet(path, params?.value)
  return useQuery({
    queryKey: ['agenList', params],
    queryFn: getAgenList,
  })
}

export function useAgenProfile(params?: Ref<AgenProfileParams>) {
  const path = '/partner/agent_koperasi/details'
  const getAgenProfile = (): Promise<AgenProfile[]> => apiGet(path, params?.value)
  return useQuery({
    queryKey: ['agenProfile', params],
    queryFn: getAgenProfile,
  })
}

export function useAgenCreate() {
  const path = '/partner/petani/create'
  const headers = new AxiosHeaders({
    'Content-Type': 'application/json',
  })
  const petaniCreateFn = (form: AgenForm): Promise<string> => apiPost(path, form, headers)
  return useMutation({
    mutationFn: petaniCreateFn,
  })
}

export function useAgenUpdate(id: any) {
  const path = '/partner/petani/update'
  const headers = new AxiosHeaders({
    'Content-Type': 'application/json',
  })
  const agenUpdateFn = (form: AgenForm): Promise<string> => apiPatch(path, form, headers, id)
  return useMutation({
    mutationFn: agenUpdateFn,
  })
}

export function useAgenUploadPhoto() {
  const path = '/partner/petani/upload-photo'
  const headers = new AxiosHeaders({
    'Content-Type': 'multipart/form-data',
  })
  const agenUploadPhotoFn = (form: FormData): Promise<string> => apiPost(path, form, headers)
  return useMutation({
    mutationFn: agenUploadPhotoFn,
  })
}
