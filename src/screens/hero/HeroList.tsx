import {useState, useEffect} from 'react';
import useInfiniteScroll, {
  ParamsInfiniteScroll,
} from '@/hooks/useInfiniteScroll.ts';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Preview from '@/screens/hero/Preview.tsx';
import {Colors} from '@/theme/Theme.ts';

export const HeroList = () => {
  const [offset, setOffset] = useState(0);
  const initialParams: ParamsInfiniteScroll = {limit: 20, offset};
  const {data, isLoading, error, handleFetch} = useInfiniteScroll({
    url: '/characters',
  });

  useEffect(() => {
    handleFetch(initialParams).then();
  }, []);

  const loadMore = () => {
    if (!isLoading) {
      const newOffset = offset + initialParams.limit;
      setOffset(newOffset);
      handleFetch({...initialParams, offset: newOffset}).then();
    }
  };

  return (
    <View style={styles.root}>
      {error && <Text style={{color: 'red'}}>Error: {error.message}</Text>}
      <FlatList
        data={data}
        renderItem={({item}) => <Preview {...item} />}
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
    paddingHorizontal: 22,
  },
});
