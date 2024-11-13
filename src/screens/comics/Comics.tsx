import {StyleSheet, Text, View} from 'react-native';
import IronManSVG from '@/assets/icons/ironMan.svg';

export const Comics = () => {
  return (
    <View style={styles.root}>
      <IronManSVG width={300} height={300} />
      <Text style={styles.text}>No tenemos comics disponibles</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
