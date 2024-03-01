import {
  AuthCredentials, AuthRepository, DataLogin
} from './auth.repository';
import axiosInstance from '@/services/configuration/axios/axios';
import { injectable } from 'inversify';
import { ResponseData } from '@/services/configuration/entities/response-data';

@injectable()
export class AuthService implements AuthRepository {
  async login(authCredentials: AuthCredentials): Promise<DataLogin> {
    try {
      const {data} = await axiosInstance.post<ResponseData<DataLogin>>('/auth/sign-in', authCredentials);

      return data.data;
    } catch (err:any) {
      console.warn(err, 'error axios', err.message);
    }
  }
}
