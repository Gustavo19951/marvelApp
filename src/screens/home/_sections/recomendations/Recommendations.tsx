import {FC, ReactNode} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Option} from './Option.tsx';
import {useNavigation} from '@react-navigation/native';
import {RootNavigationProp} from '@/navigators/type/root.ts';

export const Recommendations: FC = () => {
  const navigation = useNavigation<RootNavigationProp>();
  const pages: ReactNode[] = [
    <Option
      key={1}
      id="1"
      colors={['#9E1B32', '#D50032', '#F44336']}
      title="Nuevos Personajes!!!!"
      description="Conoce nuestros nuevos personajes"
      imageUri={require('@/assets/img/recomendations/ironman.png')}
      onPress={() => navigation.navigate('heroList')}
    />,
    <Option
      key={2}
      id="2"
      colors={['#003366', '#005B8A', '#0077B3']}
      title="¿Heroe o Villano?"
      description="Capitan america en su maximo"
      imageUri={require('@/assets/img/recomendations/captainAmerica.png')}
      onPress={() => navigation.navigate('comics')}
    />,
  ];

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Te puede interesar...</Text>
      <ScrollView
        horizontal
        pagingEnabled
        contentContainerStyle={styles.container}
        showsHorizontalScrollIndicator={false}>
        {pages}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    rowGap: 10,
  },
  title: {
    paddingLeft: 19,
    paddingRight: 19,
    marginTop: 10,
    fontSize: 26,
  },
  container: {
    paddingLeft: 19,
  },
});
