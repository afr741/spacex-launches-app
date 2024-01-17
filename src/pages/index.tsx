import React from 'react';
import { GetStaticProps, NextPage } from 'next';

// import HomePageComponent from '@/components/pages/home';
import TodosPage from './launches';

const HomePage: NextPage = () => {
  return (
    <>
      <TodosPage />
      {/* <HomePageComponent /> */}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default HomePage;
