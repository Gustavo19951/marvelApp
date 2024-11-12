import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import useAuthStore from '@/store/auth.ts';
import {Wrapper} from '@/components/app/layout/Wrapper.tsx';

export const Header = () => {
  const {user} = useAuthStore();
  return (
    <Wrapper>
      <View style={styles.root}>
        <Text style={styles.title}>Bienvenido {user.name}</Text>
        <Pressable>
          <Image
            source={require('@/assets/img/picture.jpg')}
            height={35}
            width={35}
            style={styles.avatarImage}
          />
        </Pressable>
      </View>
    </Wrapper>
  );
};
const styles = StyleSheet.create({
  root: {
    paddingTop: 22,
    paddingBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  avatarImage: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
});
