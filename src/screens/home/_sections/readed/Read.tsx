import {Wrapper} from '@/components/app/layout/Wrapper.tsx';
import {StyleSheet, Text, View} from 'react-native';
import GrootSVG from '@/assets/icons/groot.svg';

export const Read = () => {
  return (
    <Wrapper>
      <View style={styles.root}>
        <Text style={styles.title}>Comics leidos</Text>
        <View style={styles.content}>
          <GrootSVG width={200} height={200} />
          <Text style={styles.message}>No tienes comics comprados</Text>
        </View>
      </View>
    </Wrapper>
  );
};
const styles = StyleSheet.create({
  root: {
    marginBottom: 30,
  },
  content: {
    rowGap: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: 10,
    fontSize: 26,
  },
  message: {
    fontSize: 16,
  },
});
