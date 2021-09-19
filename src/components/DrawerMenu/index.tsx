import React, {useContext} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {DrawerNavigationState, ParamListBase} from '@react-navigation/native';
import {
  DrawerDescriptorMap,
  DrawerNavigationHelpers,
} from '@react-navigation/drawer/lib/typescript/src/types';

import * as S from './styles.drawer';

import {UserContext} from '@contexts/UserContext';

interface Props {
  state: DrawerNavigationState<ParamListBase>;
  navigation: DrawerNavigationHelpers;
  descriptors: DrawerDescriptorMap;
}

const DrawerMenu = ({navigation}: Props) => {
  const {user, handleRemoveUser} = useContext(UserContext);

  return (
    <S.DrawerContainer>
      <S.HeaderContainer>
        <S.AccountContainer>
          {user ? (
            user.avatar ? (
              <S.AccountAvatarImage source={{uri: user.avatar}} />
            ) : (
              <S.AccountAvatar />
            )
          ) : (
            <S.AccountAvatar />
          )}
          <S.AccountTexts>
            <S.AccountWelcome>Bem vinda</S.AccountWelcome>
            <S.AccountName>{user ? user.name : ''}</S.AccountName>
          </S.AccountTexts>
        </S.AccountContainer>
        <S.MenuToggler onPress={() => navigation.toggleDrawer()}>
          <Icon size={30} color="#BE5DEB" name="x" />
        </S.MenuToggler>
      </S.HeaderContainer>
      <S.MenuTabs>
        <S.Tab onPress={() => navigation.navigate('Home')}>
          <Icon name="key" color="#000000" size={20} />
          <S.TabText>Senhas</S.TabText>
        </S.Tab>
        <S.Tab onPress={() => navigation.navigate('AddPassword')}>
          <Icon name="plus" color="#000000" size={20} />
          <S.TabText>Adicionar senha</S.TabText>
        </S.Tab>
        <S.Tab onPress={() => navigation.navigate('Perfil')}>
          <Icon name="user" color="#000000" size={20} />
          <S.TabText>Perfil</S.TabText>
        </S.Tab>
        <S.Tab onPress={() => navigation.navigate('Settings')}>
          <Icon name="settings" color="#000000" size={20} />
          <S.TabText>Configurações</S.TabText>
        </S.Tab>
      </S.MenuTabs>
      <S.LogoutContainer
        onPress={() => {
          handleRemoveUser();
          navigation.navigate('Enter');
        }}>
        <Icon name="log-out" size={30} color="#000000" />
        <S.LogoutText>Sair</S.LogoutText>
      </S.LogoutContainer>
    </S.DrawerContainer>
  );
};

export default DrawerMenu;
