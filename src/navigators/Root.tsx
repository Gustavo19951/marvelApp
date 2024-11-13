import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {RootRouteList} from '@/navigators/type/root.ts';
import {Auth} from '@/screens/auth/Auth.tsx';
import {SharedElementConf} from '@/navigators/conf/sharedElement.ts';
import useAuthStore from '@/store/auth.ts';
import {Home} from '@/screens/home/Home.tsx';
import {rootScreenOptions} from '@/navigators/conf/animation.ts';
import {HeroList} from '@/screens/hero/HeroList.tsx';
import {BasicHeader} from '@/navigators/conf/basicHeader.tsx';
import {Hero, HeroRouteProps} from '@/screens/hero/Hero.tsx';
import {Comics} from '@/screens/comics/Comics.tsx';
import {Events} from '@/screens/events/Events.tsx';
import {Series} from '@/screens/series/Series.tsx';

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
          name="comics"
          options={{
            ...BasicHeader,
            title: 'Comics',
          }}
          component={Comics}
        />
        <RootStack.Screen
          name="events"
          options={{
            ...BasicHeader,
            title: 'Eventos',
          }}
          component={Events}
        />
        <RootStack.Screen
          name="series"
          options={{
            ...BasicHeader,
            title: 'Series',
          }}
          component={Series}
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
          component={Hero}
          options={({route}: HeroRouteProps) => ({
            ...BasicHeader,
            title: route.params?.item.name || 'Personajes',
          })}
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
