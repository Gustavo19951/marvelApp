import {Text, Image, Pressable, StyleSheet, View} from 'react-native';
import {FC, memo} from 'react';

import {imageMarvel} from '@/conf/imageMarvel.ts';
import {Colors} from '@/theme/Theme.ts';
import {
  CalendarDays,
  Clapperboard,
  LibraryBig,
  BookOpenText,
} from 'lucide-react-native';
import {Hero} from '@/type/marvel.ts';
import {useNavigation} from '@react-navigation/native';
import {RootNavigationProp} from '@/navigators/type/root.ts';
import {SharedElement} from 'react-navigation-shared-element';

const Preview: FC<Hero> = memo(props => {
  const {id, thumbnail, name, comics, events, series, stories} = props;
  const navigation = useNavigation<RootNavigationProp>();
  const imageUri = imageMarvel(thumbnail.path, thumbnail.extension);

  return (
    <Pressable
      style={styles.root}
      onPress={() =>
        navigation.navigate('hero', {item: props, image: imageUri})
      }>
      <SharedElement id={`item.${id}`}>
        <Image
          source={{uri: imageUri}}
          style={styles.image}
          resizeMode="cover"
        />
      </SharedElement>
      <View style={styles.tagContainer}>
        <View style={styles.tagOption}>
          <BookOpenText color={Colors.white} size={20} strokeWidth={1} />
          <Text style={styles.tagText}>{comics.available}</Text>
        </View>
        <View style={styles.tagOption}>
          <CalendarDays color={Colors.white} size={20} strokeWidth={1} />
          <Text style={styles.tagText}>{events.available}</Text>
        </View>
        <View style={styles.tagOption}>
          <Clapperboard color={Colors.white} size={20} strokeWidth={1} />
          <Text style={styles.tagText}>{series.available}</Text>
        </View>
        <View style={styles.tagOption}>
          <LibraryBig color={Colors.white} size={20} strokeWidth={1} />
          <Text style={styles.tagText}>{stories.available}</Text>
        </View>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          {id} {name}
        </Text>
      </View>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  root: {
    position: 'relative',
  },
  image: {
    aspectRatio: 1,
    borderRadius: 10,
    backgroundColor: Colors.gray['900'],
  },
  tagContainer: {
    position: 'absolute',
    right: 10,
    top: 10,
    rowGap: 10,
    borderRadius: 5,
    backgroundColor: `${Colors.gray.default}D9`,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  tagOption: {
    flexDirection: 'row',
    columnGap: 7,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tagText: {
    fontSize: 18,
  },
  title: {
    fontSize: 18,
  },
  titleContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: `${Colors.gray.default}D9`,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9,
  },
});

export default Preview;
