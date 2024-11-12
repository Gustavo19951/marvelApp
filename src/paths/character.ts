import apiMarvel from '@/conf/apiMarvel.ts';

import {UseInfiniteScrollProps} from '@/hooks/useInfiniteScroll.ts';
import {Character} from '@/type/character.ts';

export const characterPropGet: UseInfiniteScrollProps<Character> = {
  api: apiMarvel,
  url: '/characters',
  itemsPerPage: 5,
  uniqueKey: 'id',
};
