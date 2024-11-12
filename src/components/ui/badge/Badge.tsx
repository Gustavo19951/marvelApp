import {StyleSheet, View, Text} from 'react-native';
import {FC} from 'react';
import {badgeVariant, BadgeVariants} from './BadgeVariants.ts';

interface BadgeProps {
  variant: keyof BadgeVariants;
  text: string;
}

export const Badge: FC<BadgeProps> = ({variant, text}) => {
  return (
    <View
      style={[
        styles.root,
        {
          backgroundColor: badgeVariant[variant]?.backgroundColor,
          borderColor: badgeVariant[variant]?.borderColor,
        },
      ]}>
      <Text style={[styles.text, {color: badgeVariant[variant]?.color}]}>
        {text}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 30,
    width: '100%',
    borderWidth: 1,
    borderRadius: 16,
  },
  text: {
    fontSize: 10,
  },
});
