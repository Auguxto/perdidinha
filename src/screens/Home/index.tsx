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
      <PasswordsContainer>
        <Password />
        <Password />
        <Password />
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
