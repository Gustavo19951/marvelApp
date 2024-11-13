import {StyleSheet, Text, View} from 'react-native';
import GrootSVG from '@/assets/icons/groot.svg';

export const Series = () => {
  return (
    <View style={styles.root}>
      <GrootSVG width={300} height={300} />
      <Text style={styles.text}>No tenemos series disponibles</Text>
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
