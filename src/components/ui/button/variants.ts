import {Colors} from '@/theme/Theme.ts';
import {ReactElement} from 'react';
import type {PressableProps} from 'react-native';
import {StyleProp} from 'react-native/Libraries/StyleSheet/StyleSheet';
import {
  TextStyle,
  ViewStyle,
} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

export interface FZButtonProps extends PressableProps {
  variant?: keyof Variants;
  disabled?: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
  startIcon?: ReactElement;
}

interface Variants {
  primary: VariantsAttrs;
  'outlined-primary': VariantsAttrs;
}

interface VariantsAttrs {
  button: StyleProp<ViewStyle>;
  text: StyleProp<TextStyle>;
  pressed: StyleProp<TextStyle>;
  disabled: StyleProp<TextStyle>;
}

export const variants: Variants = {
  primary: {
    button: {
      backgroundColor: Colors.brand.default,
    },
    text: {
      color: Colors.brand.foreground,
    },
    pressed: {
      backgroundColor: Colors.brand['800'],
    },
    disabled: {
      backgroundColor: Colors.gray['300'],
    },
  },
  'outlined-primary': {
    button: {
      borderWidth: 1,
      borderColor: Colors.brand.default,
      backgroundColor: 'transparent',
    },
    text: {
      color: Colors.brand.default,
    },
    pressed: {
      backgroundColor: Colors.gray['50'],
    },
    disabled: {
      backgroundColor: Colors.gray['300'],
    },
  },
};
