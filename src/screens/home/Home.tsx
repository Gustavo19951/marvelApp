import {Layout} from '@/components/app/layout/Layout.tsx';
import {Header} from './_sections/Header.tsx';
import {States} from './_sections/states/States.tsx';
import {Recommendations} from './_sections/recomendations/Recommendations.tsx';
import Button from '@/components/ui/button/Button.tsx';
import {Wrapper} from '@/components/app/layout/Wrapper.tsx';
import {Read} from './_sections/readed/Read.tsx';
import {ScrollView} from 'react-native';
import useAuthStore from '@/store/auth.ts';

export const Home = () => {
  const {logout} = useAuthStore();
  return (
    <>
      <Layout>
        <Header />
        <States />
        <ScrollView>
          <Recommendations />
          <Read />
          <Wrapper>
            <Button onPress={logout}>Cerrar sesión</Button>
          </Wrapper>
        </ScrollView>
      </Layout>
    </>
  );
};
