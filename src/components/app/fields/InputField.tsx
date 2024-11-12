import {Control, FieldValues, Path, useController} from 'react-hook-form';
import {
  Text,
  TextInput,
  TextInputProps,
  View,
  StyleSheet,
  Pressable,
  Platform,
} from 'react-native';
import React, {ReactElement, useState} from 'react';
import {Colors} from '@/theme/Theme.ts';
import {Eye, EyeOff} from 'lucide-react-native';

interface InputFieldProps<Component extends FieldValues>
  extends TextInputProps {
  control: Control<Component>;
  name: Path<Component>;
  label?: string;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
}

export const InputField = <Component extends FieldValues>(
  props: InputFieldProps<Component>,
) => {
  const {
    control,
    name,
    label,
    leftIcon,
    rightIcon,
    secureTextEntry,
    editable,
    style,
  } = props;

  const [showPassword, setShowPassword] = useState<boolean>(
    secureTextEntry === true,
  );

  const renderRightIcon = () => {
    if (!secureTextEntry) {
      return <View style={styles.rightIconContainer}>{rightIcon}</View>;
    }
    return (
      <Pressable
        style={styles.rightIconContainer}
        onPress={() => setShowPassword(!showPassword)}>
        {!showPassword ? (
          <Eye size={25} color={Colors.white} strokeWidth={1} />
        ) : (
          <EyeOff size={25} color={Colors.white} strokeWidth={1} />
        )}
      </Pressable>
    );
  };

  const {
    field: {value, onChange},
    fieldState: {error},
  } = useController({
    control,
    name,
  });
  return (
    <View style={[styles.container]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputContainer}>
        <TextInput
          {...props}
          secureTextEntry={showPassword}
          placeholderTextColor={Colors.gray['500']}
          style={[
            styles.input,
            editable === false && styles.disabled,
            error && styles.errorInput,
            leftIcon && styles.inputWithLeftIcon,
            rightIcon && styles.inputWithRightIcon,
            style,
          ]}
          onChangeText={onChange}
          value={value}
        />
        {leftIcon && <View style={styles.leftIconContainer}>{leftIcon}</View>}
        {renderRightIcon()}
      </View>
      {error && (
        <Text style={styles.errorText}>*{error ? error.message : ''}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    rowGap: 7,
  },
  label: {
    fontSize: 14,
    color: Colors.white,
    fontWeight: '500',
  },
  inputContainer: {
    position: 'relative',
  },
  input: {
    fontSize: 16,
    width: '100%',
    color: Colors.white,
    backgroundColor: Colors.gray.default,
    borderRadius: 14,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: Platform.OS === 'ios' ? 17 : 13,
    paddingBottom: Platform.OS === 'ios' ? 17 : 13,
  },
  disabled: {
    backgroundColor: Colors.white,
  },
  errorInput: {
    borderWidth: 1.5,
    borderColor: Colors.danger.default,
  },
  inputWithLeftIcon: {
    paddingLeft: 40,
  },
  inputWithRightIcon: {
    paddingRight: 40,
  },
  leftIconContainer: {
    position: 'absolute',
    left: 12,
    top: '50%',
    transform: [{translateY: -11}],
  },
  rightIconContainer: {
    position: 'absolute',
    right: 12,
    top: '50%',
    transform: [{translateY: -11}],
  },
  errorText: {
    color: Colors.danger.default,
    fontSize: 12,
  },
});
