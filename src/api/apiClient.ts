import axios from 'axios'
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
  const response = await apiClient
    .get(path, { params })
    .then((res) => res.data.data)
    .catch((error) => {
      push.error({ title: isDev ? path : undefined, message: error.response.data.detail })
    })
  return response
}

export const apiPost = async (path: string, params: any) => {
  const response = await apiClient.post(path, params, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
  return response.data
}
