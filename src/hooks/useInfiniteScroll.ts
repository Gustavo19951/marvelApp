import {useCallback} from 'react';
import {marvelProxy} from '@/util/proxy.ts';
import useHeroStore from '@/store/marvel.ts';
import {API_MARVEL} from '@/conf/env.ts';

export interface ParamsInfiniteScroll {
  limit: number;
  offset: number;
}

export interface IUseInfiniteScroll {
  url: string;
}

const useInfiniteScroll = ({url}: IUseInfiniteScroll) => {
  const {data, isLoading, error, appendData, setIsLoading, setError} =
    useHeroStore();

  const handleFetch = useCallback(
    async (params: ParamsInfiniteScroll) => {
      setIsLoading(true);
      setError(null);

      const newUrl = new URL(url, API_MARVEL);
      Object.entries(params).forEach(([key, value]) => {
        newUrl.searchParams.append(key, value.toString());
      });

      const cleanedUrl = newUrl.toString();
      try {
        const response = await marvelProxy[cleanedUrl];
        if (response.data.results) {
          appendData(response.data.results);
        }
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error('An unknown error occurred'),
        );
      } finally {
        setIsLoading(false);
      }
    },
    [url, appendData, setError, setIsLoading],
  );

  return {data, isLoading, error, handleFetch};
};

export default useInfiniteScroll;
