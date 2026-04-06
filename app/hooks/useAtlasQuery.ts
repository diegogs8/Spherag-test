import { getAtlases } from '@infrastructure/api/atlasApi';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useAtlasesInfiniteQuery = (estateId: number) => {
  return useInfiniteQuery({
    queryKey: ['atlases', estateId],
    queryFn: ({ pageParam = 1 }) => getAtlases(estateId, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.hasNextPage) {
        return lastPage.pageNumber + 1;
      }
      return undefined;
    },
  });
};