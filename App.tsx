import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar, Appearance} from 'react-native';
import {enableScreens} from 'react-native-screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {Root} from '@/navigators/Root.tsx';
import {Colors} from '@/theme/Theme.ts';
enableScreens();

Appearance.setColorScheme('dark');
function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar
          barStyle="light-content"
          backgroundColor={Colors.foreground}
        />
        <Root />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
export default App;
