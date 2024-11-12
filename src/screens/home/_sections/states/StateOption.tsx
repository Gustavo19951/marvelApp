import {Pressable, StyleSheet, Text, View} from 'react-native';
import {cloneElement, FC, JSX} from 'react';
import {Colors} from '@/theme/Theme.ts';
import {RootNavigationProp} from '@/navigators/type/root.ts';
import {useNavigation} from '@react-navigation/native';

export interface IStateOption {
  id: string;
  title: string;
  icon: JSX.Element;
  navigateTo: 'auth' | 'home' | 'heroList' | 'hero' | 'about';
}
export const StateOption: FC<IStateOption> = ({title, icon, navigateTo}) => {
  const navigation = useNavigation<RootNavigationProp>();
  return (
    <View style={styles.root}>
      <Pressable
        onPress={() => {
          if (navigateTo !== 'hero') {
            navigation.navigate(navigateTo);
          }
        }}
        style={({pressed}) => [styles.avatar, pressed && styles.avatarPressed]}>
        {cloneElement(icon, {width: 60, height: 60})}
      </Pressable>
      <Text>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    width: 80,
    backgroundColor: Colors.gray.default,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: Colors.gray['600'],
  },
  avatarPressed: {
    backgroundColor: Colors.gray['600'],
  },
});
