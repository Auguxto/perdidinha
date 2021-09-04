import React, {useEffect, useState} from 'react';

import {HomeContainer} from './styles.home';

import Header from '@components/Header';
import Categories from '@components/Categories';
import Passwords from '@components/Passwords';

const Home = ({navigation}) => {
  const [categorie, setCategorie] = useState<Categories>('Todos');

  useEffect(() => {
    console.log(categorie);
  }, [categorie]);

  return (
    <HomeContainer>
      <Header navigation={navigation} />
      <Categories categorie={categorie} setCategorie={setCategorie} />
      <Passwords categorie={categorie} />
    </HomeContainer>
  );
};

export default Home;
