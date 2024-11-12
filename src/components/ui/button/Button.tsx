import {FC, cloneElement} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {type FZButtonProps, variants} from './variants.ts';
import {Colors} from '@/theme/Theme.ts';

const Button: FC<FZButtonProps> = props => {
  const {
    children,
    variant = 'primary',
    disabled,
    buttonStyle,
    startIcon,
  } = props;

  const stylesButton = [
    styles.root,
    buttonStyle,
    disabled ? variants[variant].disabled : variants[variant].button,
  ];
  const stylesText = [styles.text, variants[variant].text];

  const renderChild = () => {
    if (typeof children === 'string') {
      return <Text style={stylesText}>{children}</Text>;
    }
    return <>{children}</>;
  };

  return (
    <Pressable
      {...props}
      style={({pressed}) => [
        ...stylesButton,
        pressed && variants[variant].pressed,
      ]}>
      {startIcon &&
        cloneElement(startIcon, {
          size: 20,
          color: Colors.brand.default,
          strokeWidth: 1.5,
          ...startIcon.props,
        })}
      {renderChild()}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 16,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: 14,
    flexDirection: 'row',
  },
  text: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 17,
    fontWeight: '600',
  },
});

export default Button;
