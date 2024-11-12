import {
  StackCardInterpolationProps,
  StackCardStyleInterpolator,
  StackNavigationOptions,
  TransitionSpecs,
} from '@react-navigation/stack';
import {Colors} from '@/theme/Theme.ts';

const fadeTransition: StackCardStyleInterpolator = ({
  current,
}: StackCardInterpolationProps) => {
  const opacity = current.progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return {
    cardStyle: {
      opacity,
    },
  };
};

export const rootScreenOptions: StackNavigationOptions = {
  headerShown: false,
  detachPreviousScreen: false,
  cardStyle: {
    backgroundColor: Colors.foreground,
  },
  cardStyleInterpolator: fadeTransition,
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
};
