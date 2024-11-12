import {StackNavigationProp} from '@react-navigation/stack';

export type RootRouteList = {
  auth: undefined;
  home: undefined;
  heroList: undefined;
  hero: {item: {id: string; title: string; photo: string}};
  about: undefined;
};

export type RootNavigationProp = StackNavigationProp<
  RootRouteList,
  keyof RootRouteList
>;
