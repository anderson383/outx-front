import { TableRepository } from '@/services/repositories/configuration/table/table.repository';
import { TYPES } from '@/services/configuration/types';
import { useRepositoryIoc } from '@/services/configuration/context';

const useTableRepository = (): TableRepository => {
  const { container } = useRepositoryIoc();

  return container.get(TYPES.TABLE_REPOSITORY);
};

export default useTableRepository;
