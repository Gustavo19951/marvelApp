import {Text, Image, Pressable, StyleSheet, View} from 'react-native';
import {FC} from 'react';
import {Character} from '@/type/character.ts';
import {imageMarvel} from '@/conf/imageMarvel.ts';
import {Colors} from '@/theme/Theme.ts';
import {
  CalendarDays,
  Clapperboard,
  LibraryBig,
  BookOpenText,
} from 'lucide-react-native';

export const Preview: FC<Character> = ({
  thumbnail,
  name,
  comics,
  series,
  stories,
}) => {
  const imageUri = imageMarvel(thumbnail.path, thumbnail.extension);
  return (
    <Pressable style={styles.root}>
      <Image source={{uri: imageUri}} style={styles.image} />
      <View style={styles.tagContainer}>
        <View style={styles.tagOption}>
          <BookOpenText color={Colors.white} size={20} />
          <Text style={styles.tagText}>{comics.available}</Text>
        </View>
        <View style={styles.tagOption}>
          <CalendarDays color={Colors.white} size={20} />
          <Text style={styles.tagText}>{comics.available}</Text>
        </View>
        <View style={styles.tagOption}>
          <Clapperboard color={Colors.white} size={20} />
          <Text style={styles.tagText}>{series.available}</Text>
        </View>
        <View style={styles.tagOption}>
          <LibraryBig color={Colors.white} size={20} />
          <Text style={styles.tagText}>{stories.available}</Text>
        </View>
      </View>
      <View style={styles.titleContainer}>
        <Text>{name}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    position: 'relative',
  },
  image: {
    aspectRatio: 16 / 9,
    borderRadius: 10,
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
    fontSize: 13,
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
