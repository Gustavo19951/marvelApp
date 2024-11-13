import {create} from 'zustand';
import {MarvelResponse} from '@/util/proxy.ts';

interface MarvelStore {
  data: MarvelResponse | null;
  isLoading: boolean;
  error: Error | null;
  setData: (data: MarvelResponse) => void;
  appendData: (data: MarvelResponse) => void;
  setIsLoading: (isLoading: boolean) => void;
  setError: (error: Error | null) => void;
}

const useMarvelStore = create<MarvelStore>(set => ({
  data: null,
  isLoading: false,
  error: null,
  setData: data => set({data}),
  appendData: data => set({data}),
  setIsLoading: isLoading => set({isLoading}),
  setError: error => set({error}),
}));

export default useMarvelStore;
