export interface LoginForm {
  username: string
  password: string
}

export interface LoginAuth {
  status: string
  description: string
  access_token: string
}

export interface User {
  id: number
  name: string
  image_1920_url: string
}
