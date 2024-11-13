import {StackNavigationProp} from '@react-navigation/stack';
import {Hero} from '@/type/marvel.ts';

export type RootRouteList = {
  auth: undefined;
  home: undefined;
  comics: undefined;
  events: undefined;
  series: undefined;
  heroList: undefined;
  hero: {item: Hero; image: string};
  about: undefined;
};

export type RootNavigationProp = StackNavigationProp<
  RootRouteList,
  keyof RootRouteList
>;
