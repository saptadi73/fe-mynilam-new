import axios from 'axios'

const getToken = () => {
  const token = localStorage.getItem('token')
  if (token) return 'Bearer ' + token
  else undefined
}

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { Authorization: getToken() },
})

export const apiGet = async (path: string) => {
  const response = await apiClient.get(path)
  return response.data.data
}

export const apiPost = async (path: string, params: any) => {
  const response = await apiClient.post(path, params)
  return response.data
}
