import {create} from 'zustand';
import {Hero} from '@/type/marvel.ts';

interface MarvelStore {
  data: Hero[] | null;
  isLoading: boolean;
  error: Error | null;
  setData: (data: Hero[]) => void;
  appendData: (data: Hero[]) => void;
  setIsLoading: (isLoading: boolean) => void;
  setError: (error: Error | null) => void;
}

const useHeroStore = create<MarvelStore>(set => ({
  data: null,
  isLoading: false,
  error: null,
  setData: data => set({data}),
  appendData: newData =>
    set(state => {
      const currentData = state.data ?? [];
      const uniqueHeroes = [
        ...currentData,
        ...newData.filter(
          newHero =>
            !currentData.some(existingHero => existingHero.id === newHero.id),
        ),
      ];

      return {data: uniqueHeroes};
    }),
  setIsLoading: isLoading => set({isLoading}),
  setError: error => set({error}),
}));

export default useHeroStore;
