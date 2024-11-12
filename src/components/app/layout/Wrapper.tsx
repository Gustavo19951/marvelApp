import {StyleSheet, View} from 'react-native';
import {FC, PropsWithChildren} from 'react';

export const Wrapper: FC<PropsWithChildren> = ({children}) => {
  return <View style={styles.root}>{children}</View>;
};
const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 22,
  },
});
