import React, {useContext} from 'react';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {format} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import * as S from './styles.header';

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
    <S.HeaderContainer>
      <S.Toggler onPress={() => navigation.toggleDrawer()} />
      <S.HelloUser>Olá, {user ? user.name : ' '}</S.HelloUser>
      <S.Today>{date}</S.Today>
    </S.HeaderContainer>
  );
};

export default Header;
