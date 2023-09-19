import 'reflect-metadata';
import { AuthRepository } from '../repositories/auth/auth.repository';
import { AuthService } from '../repositories/auth/auth.service';
import { Container } from 'inversify';

import { TableRepository } from '../repositories/configuration/table/table.repository';
import { TableRepositoryService } from '../repositories/configuration/table/table.service';
import { TYPES } from './types';
import { UserRepository } from '../repositories/user/user.repository';
import { UserService } from '../repositories/user/user.service';

const repositoryContainer = new Container();

repositoryContainer.bind<UserRepository>(TYPES.USER_REPOSITORY).to(UserService);
repositoryContainer.bind<AuthRepository>(TYPES.AUTH_REPOSITORY).to(AuthService);
repositoryContainer.bind<TableRepository>(TYPES.TABLE_REPOSITORY).to(TableRepositoryService);

export {repositoryContainer};
