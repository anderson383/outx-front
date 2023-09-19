import {
  TableEntity, TableRepository
} from './table.repository';
import axiosInstance from '@/services/configuration/axios/axios';
import { injectable } from 'inversify';
import { ResponseData } from '@/services/configuration/entities/response-data';

@injectable()
export class TableRepositoryService implements TableRepository {
  async listTablesForConfig(): Promise<TableEntity[]> {
    try {
      const {data} = await axiosInstance.get<ResponseData<TableEntity[]>>('/table/list-config');

      return data.results;
    } catch (er) {
      console.warn(er);
    }
  }

  async generateQrCredentials(idTable:string): Promise<string> {
    try {
      const {data} = await axiosInstance.post<ResponseData<string>>('/table/generate-qr/', {id: idTable});

      return data.results;
    } catch (er) {
      console.warn(er);
    }
  }
}
