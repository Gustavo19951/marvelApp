import {useState, useEffect, useCallback} from 'react';
import {create, ApiResponse} from 'apisauce';
import useGet from './useGet';
import {MarvelApiResponse} from '@/type/character.ts';

export interface UseInfiniteScrollProps<RestData> {
  api: ReturnType<typeof create>;
  url: string;
  options?: object;
  initialPage?: number;
  itemsPerPage?: number;
  uniqueKey: keyof RestData;
}

export const useInfiniteScroll = <RestData extends Record<string, any>>({
  api,
  url,
  options = {},
  initialPage = 0,
  itemsPerPage = 20,
  uniqueKey,
}: UseInfiniteScrollProps<RestData>) => {
  const [page, setPage] = useState(initialPage);
  const [items, setItems] = useState<RestData[]>([]);
  const [hasMore, setHasMore] = useState(true);

  const {error, loading, reFetch} = useGet<MarvelApiResponse>({
    api,
    url,
    options: {...options, limit: itemsPerPage},
    preventOnCall: true,
  });

  const loadMore = useCallback(async () => {
    if (loading || !hasMore) {
      return;
    }

    const response: ApiResponse<MarvelApiResponse> = await reFetch({
      params: {offset: page * itemsPerPage},
    });

    if (response.ok && response.data) {
      const newData = response.data.data.results as unknown as RestData[];
      setItems(prevItems => {
        const newItems = newData.filter(
          newItem =>
            !prevItems.some(
              existingItem => existingItem[uniqueKey] === newItem[uniqueKey],
            ),
        );
        return [...prevItems, ...newItems];
      });

      setPage(prevPage => prevPage + 1);
      setHasMore(
        newData.length === itemsPerPage &&
          response.data.data.total > page * itemsPerPage,
      );
    }
  }, [loading, hasMore, page, reFetch, itemsPerPage, uniqueKey]);

  useEffect(() => {
    loadMore().then();
  }, []);

  return {
    items,
    loading,
    error,
    loadMore,
    hasMore,
  };
};
