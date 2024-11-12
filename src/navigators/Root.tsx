import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {RootRouteList} from '@/navigators/type/root.ts';
import {Auth} from '@/screens/auth/Auth.tsx';
import {SharedElementConf} from '@/navigators/conf/sharedElement.ts';
import useAuthStore from '@/store/auth.ts';
import {Home} from '@/screens/home/Home.tsx';
import {About} from '@/screens/about/About.tsx';
import {rootScreenOptions} from '@/navigators/conf/animation.ts';
import {HeroList} from '@/screens/hero/HeroList.tsx';
import {BasicHeader} from '@/navigators/conf/basicHeader.tsx';

const RootStack = createSharedElementStackNavigator<RootRouteList>();

export const Root = () => {
  const {isAuthenticated} = useAuthStore();

  const renderRoutes = () => {
    if (!isAuthenticated) {
      return <RootStack.Screen name="auth" component={Auth} />;
    }
    return (
      <>
        <RootStack.Screen name="home" component={Home} />
        <RootStack.Screen
          name="about"
          options={{
            ...BasicHeader,
            title: 'Acerca de mi',
          }}
          component={About}
        />
        <RootStack.Screen
          name="heroList"
          component={HeroList}
          options={{
            ...BasicHeader,
            title: 'Personajes',
          }}
        />
        <RootStack.Screen
          name="hero"
          component={Home}
          sharedElements={SharedElementConf}
        />
      </>
    );
  };

  return (
    <RootStack.Navigator
      initialRouteName={!isAuthenticated ? 'auth' : 'home'}
      screenOptions={rootScreenOptions}>
      {renderRoutes()}
    </RootStack.Navigator>
  );
};
