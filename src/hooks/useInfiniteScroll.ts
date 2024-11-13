import {useCallback} from 'react';
import {marvelProxy} from '@/util/proxy.ts';
import useMarvelStore from '@/store/marvel.ts';
import {API_MARVEL} from '@/conf/env.ts';

export interface ParamsInfiniteScroll {
  limit: number;
  offset: number;
}

export interface IUseInfiniteScroll {
  url: string;
  params: ParamsInfiniteScroll;
}

const useInfiniteScroll = ({url, params}: IUseInfiniteScroll) => {
  const {data, isLoading, error, appendData, setIsLoading, setError} =
    useMarvelStore();

  const handleFetch = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    const newUrl = new URL(url, API_MARVEL);
    Object.entries(params).forEach(([key, value]) => {
      newUrl.searchParams.append(key, value.toString());
    });

    try {
      const response = await marvelProxy[newUrl.toString()];
      appendData(response);
    } catch (err) {
      setError(
        err instanceof Error ? err : new Error('An unknown error occurred'),
      );
    } finally {
      setIsLoading(false);
    }
  }, [url, params, appendData, setError, setIsLoading]);

  return {data, isLoading, error, handleFetch};
};

export default useInfiniteScroll;
