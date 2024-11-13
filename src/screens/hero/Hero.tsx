import {Image, StyleSheet, Text, View} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {RootRouteList} from '@/navigators/type/root.ts';
import {cloneElement, FC, JSX} from 'react';
import {
  BookOpenText,
  CalendarDays,
  Clapperboard,
  LibraryBig,
} from 'lucide-react-native';
import {Colors} from '@/theme/Theme.ts';

export type HeroRouteProps = {
  route: RouteProp<RootRouteList, 'hero'>;
  navigation: NavigationProp<RootRouteList>;
};
export const Hero: FC<HeroRouteProps> = ({route}) => {
  const {item, image} = route.params;
  const {comics, events, series, stories} = item;
  return (
    <>
      <View style={styles.root}>
        <SharedElement id={`item.${item.id}`}>
          <Image
            source={{uri: image}}
            style={styles.image}
            resizeMode="cover"
          />
        </SharedElement>
        <HeroStats
          icon={<BookOpenText />}
          value={comics.available}
          title="Comics disponibles"
        />
        <HeroStats
          icon={<CalendarDays />}
          value={events.available}
          title="Eventos"
        />
        <HeroStats
          icon={<Clapperboard />}
          value={series.available}
          title="Series disponibles"
        />
        <HeroStats
          icon={<LibraryBig />}
          value={stories.available}
          title="Libros disponibles"
        />
      </View>
    </>
  );
};

interface IHeroStats {
  value: number;
  title: string;
  icon: JSX.Element;
}

const HeroStats: FC<IHeroStats> = ({value, icon, title}) => {
  return (
    <View style={styles.cardStats}>
      <View style={styles.cardTitle}>
        {cloneElement(icon, {
          color: Colors.white,
          size: 30,
          strokeWidth: 1,
        })}
        <Text style={styles.cardNumber}>{title}</Text>
      </View>
      <Text style={styles.cardNumber}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingVertical: 22,
    paddingHorizontal: 22,
    rowGap: 10,
  },
  image: {
    aspectRatio: 1,
    borderRadius: 10,
  },
  cardStats: {
    backgroundColor: Colors.gray['900'],
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
  },
  cardTitle: {
    flexDirection: 'row',
    columnGap: 5,
  },
  cardNumber: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
