import {useCallback, useState} from 'react';
import {marvelProxy} from '@/util/proxy.ts';
import {API_MARVEL} from '@/conf/env.ts';
import {useComicStore, useHeroStore} from '@/store/marvel.ts';
import {Comic, Hero} from '@/type/marvel.ts';

export interface ParamsInfiniteScroll {
  limit: number;
  offset: number;
}

export interface IUseInfiniteScroll {
  url: string;
  type: string;
}

const isHeroStore = (type: string): type is 'hero' => type === 'hero';

const useInfiniteScroll = <T extends Comic[] & Hero[]>({
  url,
  type,
}: IUseInfiniteScroll) => {
  const heroStore = useHeroStore();
  const comicStore = useComicStore();

  const store = isHeroStore(type) ? heroStore : comicStore;

  const {data, isLoading, error, appendData, setIsLoading, setError} = store;
  const [hasMore, setHasMore] = useState(true);

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
          appendData(response.data.results as T);
          if (response.data.results.length < params.limit) {
            setHasMore(false);
          }
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

  return {data, isLoading, error, hasMore, handleFetch};
};

export default useInfiniteScroll;
