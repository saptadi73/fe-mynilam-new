export interface LoginForm {
  username: string
  password: string
}

export interface LoginAuth {
  status: string
  description: string
  access_token: string
}
