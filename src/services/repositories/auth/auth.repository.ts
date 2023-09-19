export type AuthCredentials = {
  email: string,
  password: string
}

export interface DataLogin {
  accessToken: string
  refreshToken: string
}

export interface AuthRepository {
  login(authCredentials: AuthCredentials): Promise<DataLogin>
}
