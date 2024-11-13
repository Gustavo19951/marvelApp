import {LinearGradient} from 'react-native-linear-gradient';
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import {FC} from 'react';
import {Colors} from '@/theme/Theme.ts';
import {ChevronRight} from 'lucide-react-native';
import {ImageSourcePropType} from 'react-native/Libraries/Image/Image';

const {width} = Dimensions.get('window');

export interface OptionProps {
  id: string;
  colors: string[];
  title: string;
  description: string;
  imageUri: ImageSourcePropType;
  onPress: () => void;
}

export const Option: FC<OptionProps> = ({
  colors,
  title,
  description,
  imageUri,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress} style={{height: 120}}>
      <LinearGradient colors={colors} style={styles.linearGradient}>
        <Image style={styles.image} source={imageUri} />
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <View style={styles.action}>
            <Text style={styles.description}>Ver más</Text>
            <ChevronRight size={20} color={Colors.white} />
          </View>
        </View>
      </LinearGradient>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 20,
    borderRadius: 22,
    width: width - 100,
    marginRight: 15,
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  container: {
    height: '100%',
    width: '69%',
    columnGap: 10,
    justifyContent: 'center',
    alignItems: 'flex-end',
    rowGap: 5,
  },
  image: {
    position: 'absolute',
    width: 120,
    height: 120,
    bottom: 0,
    left: 0,
    borderBottomLeftRadius: 22,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.white,
    textAlign: 'right',
  },
  description: {
    color: Colors.white,
    textAlign: 'right',
  },
  action: {
    color: Colors.white,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
