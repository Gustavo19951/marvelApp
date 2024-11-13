import {create} from 'zustand';
import {Comic, Hero} from '@/type/marvel.ts';

export interface MarvelStore<T> {
  data: T[] | null;
  isLoading: boolean;
  error: Error | null;
  setData: (data: T[]) => void;
  appendData: (data: T[]) => void;
  setIsLoading: (isLoading: boolean) => void;
  setError: (error: Error | null) => void;
}

const createMarvelStore = <T extends {id: number}>() =>
  create<MarvelStore<T>>(set => ({
    data: null,
    isLoading: false,
    error: null,
    setData: data => set({data}),
    appendData: newData =>
      set(state => {
        const currentData = state.data ?? [];
        const uniqueData = [
          ...currentData,
          ...newData.filter(
            newData =>
              !currentData.some(existingData => existingData.id === newData.id),
          ),
        ];

        return {data: uniqueData};
      }),
    setIsLoading: isLoading => set({isLoading}),
    setError: error => set({error}),
  }));

export const useHeroStore = createMarvelStore<Hero>();
export const useComicStore = createMarvelStore<Comic>();
