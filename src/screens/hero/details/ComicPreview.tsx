import {Text, StyleSheet, View, Image} from 'react-native';
import {FC, memo} from 'react';
import {Colors} from '@/theme/Theme.ts';
import {Comic} from '@/type/marvel.ts';
import {imageMarvel} from '@/conf/imageMarvel.ts';

const ComicPreview: FC<Comic> = memo(props => {
  const {thumbnail, title, description} = props;

  const imageUri = imageMarvel(thumbnail.path, thumbnail.extension);
  return (
    <View style={styles.root}>
      <Image source={{uri: imageUri}} style={styles.image} resizeMode="cover" />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    width: '100%',
    minHeight: 200,
    borderRadius: 15,
    backgroundColor: Colors.gray.default,
  },
  image: {
    backgroundColor: Colors.gray['600'],
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
    width: 150,
    height: '100%',
    resizeMode: 'cover',
  },
  infoContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    maxHeight: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    flexShrink: 1,
    overflow: 'hidden',
  },
});

export default ComicPreview;
