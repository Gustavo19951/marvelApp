import {StatusBar, StyleSheet, View} from 'react-native';
import {Colors} from '@/theme/Theme.ts';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FC, PropsWithChildren} from 'react';

export const Layout: FC<PropsWithChildren> = ({children}) => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={Colors.foreground} barStyle="light-content" />
      {children}
    </SafeAreaView>
  );
};
