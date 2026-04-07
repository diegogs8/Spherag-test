import { getAtlas, getAtlasDetail } from '@infrastructure/api/atlasApi';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

export const useAtlasInfiniteQuery = (estateId: number) => {
  return useInfiniteQuery({
    queryKey: ['atlas', estateId],
    queryFn: ({ pageParam = 1 }) => getAtlas(estateId, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.hasNextPage) {
        return lastPage.pageNumber + 1;
      }
      return undefined;
    },
  });
};

export const useAtlasDetailQuery = (estateId: number, imei: string) => {
  return useQuery({
    queryKey: ['atlasDetail', estateId, imei],
    queryFn: () => getAtlasDetail(estateId, imei),
  });
};