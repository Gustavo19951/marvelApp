import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {useRef} from 'react';
import Video, {VideoRef} from 'react-native-video';
import {Colors} from '@/theme/Theme.ts';
import backgroundVideo from '@/assets/video/background.mp4';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Login} from '@/screens/auth/_forms/Login.tsx';
export const Auth = () => {
  const videoRef = useRef<VideoRef>(null);
  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />
      <View style={styles.videoContainer}>
        <Video
          source={backgroundVideo}
          repeat
          style={styles.video}
          ref={videoRef}
          resizeMode="cover"
          muted
          playInBackground={false}
          playWhenInactive={false}
        />
        <View style={styles.filter} />
      </View>
      <SafeAreaView edges={['top', 'left', 'right']} style={styles.root}>
        <View style={styles.container}>
          <View style={styles.content}>
            <Login />
            <View>
              <Text style={styles.text}>
                © {new Date().getFullYear()} Copyright Gustavo Rodriguez.
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  videoContainer: {
    flex: 3,
  },
  spinner: {
    width: 70,
    height: 70,
  },
  video: {
    backgroundColor: Colors.brand.default,
    ...StyleSheet.absoluteFillObject,
  },
  filter: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.foreground,
    opacity: 0.7,
  },
  root: {
    ...StyleSheet.absoluteFillObject,
    paddingRight: 22,
    paddingLeft: 22,
    paddingBottom: 22,
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    paddingVertical: 30,
    paddingHorizontal: 22,
    borderRadius: 16,
    width: '100%',
    backgroundColor: `${Colors.foreground}D6`,
    justifyContent: 'space-between',
    alignItems: 'center',
    rowGap: 22,
  },
  text: {
    fontFamily: 'OpenSans',
    color: Colors.white,
    fontSize: 10,
  },
});
