import axios, { AxiosHeaders } from 'axios'
import { push } from 'notivue'

interface Params {
  [key: string]: any
}

const isDev = import.meta.env.VITE_ENV === 'dev'
const baseURL = import.meta.env.VITE_API_URL

const getToken = () => {
  const token = localStorage.getItem('token')
  if (token) return 'Bearer ' + token
  else undefined
}

export const apiClient = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: getToken(),
  },
})

export const apiGet = async (path: string, params?: Params) => {
  try {
    const response = await apiClient.get(path, { params })
    return response.data.data
  } catch (error: any) {
    push.error({ title: isDev ? path : undefined, message: error.response.data.detail })
    return null
  }
}

export const apiPost = async (path: string, params: any, headers: AxiosHeaders) => {
  const response = await apiClient.post(path, params, {
    headers: headers,
  })
  return response.data
}

export const apiPatch = async (path: string, params: any, headers: AxiosHeaders) => {
  const response = await apiClient.patch(path, params, {
    headers: headers,
  })
  return response.data
}
