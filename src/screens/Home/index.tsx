import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import Header from '@components/Header';
import Password from '@components/Password';

import {
  AddButton,
  HomeContainer,
  PasswordsContainer,
  Search,
  SearchContainer,
} from './styles.home';

const Home = ({navigation}) => {
  return (
    <HomeContainer>
      <Header navigation={navigation} />
      <SearchContainer>
        <Search />
        <AddButton>
          <Icon name="plus" size={26} color="#FFFFFF" />
        </AddButton>
      </SearchContainer>
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
