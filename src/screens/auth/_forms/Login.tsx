import {StyleSheet, Text, View} from 'react-native';
import {useForm} from 'react-hook-form';
import {InputField} from '@/components/app/fields/InputField.tsx';
import {DynamicAvatar} from '@/components/app/avatar/DynamicAvatar.tsx';
import Button from '@/components/ui/button/Button.tsx';
import {Colors} from '@/theme/Theme.ts';
import {KeyRound, UserRound} from 'lucide-react-native';
import {zodResolver} from '@hookform/resolvers/zod';
import {AuthScheme, AuthType} from '@/screens/auth/_scheme/authScheme.ts';
import useAuthStore from '@/store/auth.ts';
import {useState} from 'react';
import {Badge} from '@/components/ui/badge/Badge.tsx';

export const Login = () => {
  const {login} = useAuthStore();
  const [hasError, setHasError] = useState<boolean>(false);
  const {control, handleSubmit} = useForm<AuthType>({
    defaultValues: {
      email: 'gustavor@demo.com',
      password: 'Bienvenid2',
    },
    resolver: zodResolver(AuthScheme),
  });

  const onValid = ({email, password}: AuthType) => {
    setHasError(false);
    if (email !== 'gustavor@demo.com' || password !== 'Bienvenid2') {
      setHasError(true);
      return;
    }
    login({email: email, id: '111', name: 'Gustavo', lastName: 'Rodriguez'});
  };

  return (
    <View style={styles.root}>
      <View style={styles.logoContainer}>
        <DynamicAvatar />
        <View>
          <Text style={styles.title}>Marvel wiki</Text>
          <Text>By Gustavo Rodriguez</Text>
        </View>
      </View>
      {hasError && (
        <Badge variant="danger" text="Correo o contraseña incorrecta" />
      )}
      <InputField
        control={control}
        name="email"
        label="Correo"
        placeholder="Ingresa tu correo"
        textContentType="emailAddress"
        leftIcon={<UserRound size={23} color={Colors.white} strokeWidth={1} />}
      />
      <InputField
        secureTextEntry
        control={control}
        name="password"
        placeholder="Ingresa tu contraseña"
        label="Contraseña"
        leftIcon={<KeyRound size={23} color={Colors.white} strokeWidth={1} />}
      />
      <Button onPress={handleSubmit(onValid)}>Iniciar sesión</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    rowGap: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    columnGap: 7,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
