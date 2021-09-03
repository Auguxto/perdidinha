import React, {useEffect, useState} from 'react';

import Header from '@components/Header';
import Password from '@components/Password';

import {HomeContainer, PasswordsContainer} from './styles.home';
import Categories from '@components/Categories';

const Home = ({navigation}) => {
  const [categorie, setCategorie] = useState('Todos');

  useEffect(() => {
    console.log(categorie);
  }, [categorie]);

  return (
    <HomeContainer>
      <Header navigation={navigation} />
      <Categories categorie={categorie} setCategorie={setCategorie} />
      <PasswordsContainer showsVerticalScrollIndicator={false}>
        <Password
          name="Facebook"
          username="victoraugusferreira@gmail.com"
          password="86431641681616"
          iconName="facebook"
          backgroundColor="#FFFFFF"
        />
        <Password
          name="Google"
          username="victoraugusferreira@gmail.com"
          password="6186186"
          iconName="google"
          backgroundColor="#FFFFFF"
        />
        <Password
          name="Nubank"
          password="6186186"
          iconName="nubank"
          backgroundColor="#FFFFFF"
        />
        <Password
          name="Inter"
          password="4816"
          iconName="inter"
          backgroundColor="#FFFFFF"
        />
        <Password
          name="Facebook"
          username="victoraugusferreira@gmail.com"
          password="86431641681616"
          iconName="facebook"
          backgroundColor="#FFFFFF"
        />
        <Password
          name="Google"
          username="victoraugusferreira@gmail.com"
          password="6186186"
          iconName="google"
          backgroundColor="#FFFFFF"
        />
        <Password
          name="Nubank"
          password="6186186"
          iconName="nubank"
          backgroundColor="#FFFFFF"
        />
        <Password
          name="Inter"
          password="4816"
          iconName="inter"
          backgroundColor="#FFFFFF"
        />
      </PasswordsContainer>
    </HomeContainer>
  );
};

export default Home;
