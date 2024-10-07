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
