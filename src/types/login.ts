export interface LoginForm {
  email: string
  password: string
}

export interface LoginAuth {
  status: string
  description: string
  access_token: string
}
