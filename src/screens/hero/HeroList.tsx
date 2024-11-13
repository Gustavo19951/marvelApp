import useInfiniteScroll from '@/hooks/useInfiniteScroll.ts';
import {useCallback, useEffect, useState} from 'react';
import {FlatList, Text} from 'react-native';
import {Preview} from '@/screens/hero/preview/Preview.tsx';
import {Hero} from '@/type/marvel.ts';

export const HeroList = () => {
  const [page, setPage] = useState(1);
  const {data, isLoading, error, handleFetch} = useInfiniteScroll({
    url: '/characters',
    params: {limit: 20, offset: page * 20},
  });
  const loadMoreData = () => {
    if (!isLoading) {
      setPage(prevPage => prevPage + 1);
    }
  };

  useEffect(() => {
    handleFetch().then();
  }, [page]);

  const renderItem = useCallback((item: Hero) => {
    return <Preview {...item} />;
  }, []);

  if (error || !data) {
    return <Text>Error al cargar los datos</Text>;
  }

  return (
    <FlatList
      data={data.results}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => renderItem(item)}
      onEndReached={loadMoreData}
      onEndReachedThreshold={0.5}
    />
  );
};
