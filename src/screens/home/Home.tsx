import {Layout} from '@/components/app/layout/Layout.tsx';
import {Header} from './_sections/Header.tsx';
import {States} from './_sections/states/States.tsx';

export const Home = () => {
  return (
    <>
      <Layout>
        <Header />
        <States />
      </Layout>
    </>
  );
};
