import React, {useContext} from 'react';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {format} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import {Today, HeaderContainer, HelloUser, Toggler} from './styles.header';

import {UserContext} from '@contexts/UserContext';

interface IHeader {
  navigation: DrawerNavigationProp<RootDrawerNavigation>;
}

const Header = ({navigation}: IHeader) => {
  const {user} = useContext(UserContext);

  const date = format(Date.now(), "dd 'de' MMMM, yyyy", {
    locale: ptBR,
  });

  return (
    <HeaderContainer>
      <Toggler onPress={() => navigation.toggleDrawer()} />
      <HelloUser>Olá, {user.name}</HelloUser>
      <Today>{date}</Today>
    </HeaderContainer>
  );
};

export default Header;
