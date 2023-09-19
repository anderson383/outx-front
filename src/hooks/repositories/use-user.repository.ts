import { TYPES } from '@/services/configuration/types';
import { useRepositoryIoc } from '@/services/configuration/context';
import { UserRepository } from '@/services/repositories/user/user.repository';

const useUserRepository = (): UserRepository => {
  const { container } = useRepositoryIoc();

  return container.get(TYPES.USER_REPOSITORY);
};

export default useUserRepository;
