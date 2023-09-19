import { injectable } from 'inversify';
import { UserRepository } from './user.repository';

@injectable()
export class UserService implements UserRepository {
  async listUsers():Promise<any> {
    return 'execute!';
  }
}
