import {StyleSheet, Text, View} from 'react-native';
import CaptainAmericaSVG from '@/assets/icons/captainAmerica.svg';

export const Events = () => {
  return (
    <View style={styles.root}>
      <CaptainAmericaSVG width={300} height={300} />
      <Text style={styles.text}>No tenemos eventos disponibles</Text>
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
