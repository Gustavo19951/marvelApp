import {useCallback, useEffect, useState} from 'react';
import {ApiResponse, create} from 'apisauce';

interface ReFetch {
  id?: string | number;
  params?: object;
}

interface ResponseData<RestData> {
  data: RestData | null;
  error: string | null;
  loading: boolean;
  reFetch: (options: ReFetch) => Promise<ApiResponse<RestData>>;
}

export interface UseGetProps {
  api: ReturnType<typeof create>;
  url: string;
  options: object;
  id?: string | number;
  preventOnCall?: boolean;
  additionalUrl?: string;
}

const useGet = <RestData>({
  api,
  url,
  options,
  id,
  preventOnCall,
  additionalUrl = '',
}: UseGetProps): ResponseData<RestData> => {
  const [data, setData] = useState<RestData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(
    async ({id, params}: ReFetch) => {
      setLoading(true);
      try {
        let target = url;
        if (id) {
          target = `${url}/${id}${additionalUrl}`;
        }
        const response: ApiResponse<RestData> = await api.get(target, {
          ...options,
          ...params,
        });

        if (response.ok && response.data !== undefined) {
          setData(response.data);
          setError(null);
        } else {
          setError(response.problem || 'Unknown error');
          setData(null);
        }

        return response;
      } catch (err) {
        console.log(err);
        setError(err as string);
        setData(null);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [url, api, options, additionalUrl],
  );

  useEffect(() => {
    if (preventOnCall) {
      return;
    }
    fetchData({id}).then();
  }, [fetchData, id, preventOnCall]);

  const reFetch = useCallback(
    async (values: ReFetch) => {
      return await fetchData(values);
    },
    [fetchData],
  );

  return {data, error, loading, reFetch};
};

export default useGet;
