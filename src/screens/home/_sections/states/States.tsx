import {FlatList, StyleSheet, View} from 'react-native';
import {IStateOption, StateOption} from './StateOption.tsx';
import AvengersSVG from '@/assets/icons/avengers.svg';
import MarvelSVG from '@/assets/icons/marvel.svg';
import EventSVG from '@/assets/icons/event.svg';
import {DynamicAvatar} from '@/components/app/avatar/DynamicAvatar.tsx';
export const States = () => {
  const items: IStateOption[] = [
    {
      id: '1',
      title: 'Personajes',
      icon: <DynamicAvatar />,
      navigateTo: 'heroList',
    },
    {
      id: '2',
      title: 'Comics',
      icon: <AvengersSVG />,
      navigateTo: 'comics',
    },
    {
      id: '3',
      title: 'Series',
      icon: <MarvelSVG />,
      navigateTo: 'series',
    },
    {
      id: '4',
      title: 'Eventos',
      icon: <EventSVG />,
      navigateTo: 'events',
    },
  ];
  return (
    <FlatList
      horizontal
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      data={items}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      renderItem={({item}) => <StateOption {...item} />}
    />
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 22,
  },
  separator: {
    marginLeft: 5,
    marginRight: 5,
  },
  avatarImage: {
    height: 60,
    width: 60,
    borderRadius: 50,
  },
});
