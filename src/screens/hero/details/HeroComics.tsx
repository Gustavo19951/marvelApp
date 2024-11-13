import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {FC, useEffect, useState} from 'react';
import useInfiniteScroll, {
  ParamsInfiniteScroll,
} from '@/hooks/useInfiniteScroll.ts';
import {Colors} from '@/theme/Theme.ts';
import {Comic} from '@/type/marvel.ts';
import {useComicStore} from '@/store/marvel.ts';
import ComicPreview from '@/screens/hero/details/ComicPreview.tsx';

interface IHeroComics {
  id: number;
}
export const HeroComics: FC<IHeroComics> = ({id}) => {
  const {setData} = useComicStore();
  const [offset, setOffset] = useState(0);
  const initialParams: ParamsInfiniteScroll = {limit: 20, offset};
  const {data, isLoading, error, handleFetch, hasMore} = useInfiniteScroll({
    url: `/characters/${id}/comics`,
    type: 'comic',
  });

  useEffect(() => {
    setData([]);
    handleFetch(initialParams).then();
  }, []);

  const loadMore = () => {
    if (!isLoading && hasMore) {
      const newOffset = offset + initialParams.limit;
      setOffset(newOffset);
      handleFetch({...initialParams, offset: newOffset}).then();
    }
  };

  return (
    <View style={styles.root}>
      {error && <Text style={{color: 'red'}}>Error: {error.message}</Text>}
      <FlatList
        data={data as Comic[]}
        renderItem={({item}) => <ComicPreview {...item} />}
        keyExtractor={item => item.id.toString()}
        ListFooterComponent={
          isLoading ? (
            <ActivityIndicator size="large" color={Colors.brand.default} />
          ) : null
        }
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{height: 10}} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 22,
  },
});
