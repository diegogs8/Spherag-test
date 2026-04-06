import { Estate } from '@domain/model/Estate';
import { getEstates } from '@infrastructure/api/estateApi';
import { useQuery } from '@tanstack/react-query';

export const useEstatesQuery = () => {
  return useQuery<Estate[], Error>({
    queryKey: ['estates'],
    queryFn: getEstates,
  });
};