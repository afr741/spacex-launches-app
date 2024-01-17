import React from 'react';
import { GetStaticProps, NextPage } from 'next';

import TodosPage from './launches';

const HomePage: NextPage = () => {
  return (
    <>
      <TodosPage />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default HomePage;
