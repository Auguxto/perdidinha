import Password from '@components/Password';
import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {
  AddButton,
  HeaderContainer,
  HomeContainer,
  PasswordsContainer,
  Search,
  SearchContainer,
  Toggler,
} from './styles.home';

const Home = ({navigation}) => {
  return (
    <HomeContainer>
      <HeaderContainer style={styles.shadow}>
        <Toggler onPress={() => navigation.toggleDrawer()} />
      </HeaderContainer>
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
      </PasswordsContainer>
    </HomeContainer>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
});

export default Home;
