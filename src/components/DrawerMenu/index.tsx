import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {DrawerNavigationState, ParamListBase} from '@react-navigation/native';
import {
  DrawerDescriptorMap,
  DrawerNavigationHelpers,
} from '@react-navigation/drawer/lib/typescript/src/types';

import {
  HeaderContainer,
  AccountAvatar,
  AccountName,
  AccountTexts,
  AccountWelcome,
  MenuToggler,
  AccountContainer,
  DrawerContainer,
  MenuTabs,
  Tab,
  TabText,
  LogoutContainer,
  LogoutText,
} from './styles.drawer';

interface Props {
  state: DrawerNavigationState<ParamListBase>;
  navigation: DrawerNavigationHelpers;
  descriptors: DrawerDescriptorMap;
}

const DrawerMenu = ({navigation}: Props) => {
  return (
    <DrawerContainer>
      <HeaderContainer>
        <AccountContainer>
          <AccountAvatar />
          <AccountTexts>
            <AccountWelcome>Bem vinda</AccountWelcome>
            <AccountName>Victor</AccountName>
          </AccountTexts>
        </AccountContainer>
        <MenuToggler onPress={() => navigation.toggleDrawer()}>
          <Icon size={30} color="#BE5DEB" name="x" />
        </MenuToggler>
      </HeaderContainer>
      <MenuTabs>
        <Tab onPress={() => navigation.navigate('Home')}>
          <Icon name="key" color="#000000" size={20} />
          <TabText>Senhas</TabText>
        </Tab>
        <Tab onPress={() => navigation.navigate('AddPassword')}>
          <Icon name="plus" color="#000000" size={20} />
          <TabText>Adicionar senha</TabText>
        </Tab>
        <Tab>
          <Icon name="trash" color="#000000" size={20} />
          <TabText>Remover senha</TabText>
        </Tab>
        <Tab>
          <Icon name="user" color="#000000" size={20} />
          <TabText>Perfil</TabText>
        </Tab>
        <Tab>
          <Icon name="settings" color="#000000" size={20} />
          <TabText>Configurações</TabText>
        </Tab>
      </MenuTabs>
      <LogoutContainer>
        <Icon name="log-out" size={30} color="#000000" />
        <LogoutText>Sair</LogoutText>
      </LogoutContainer>
    </DrawerContainer>
  );
};

export default DrawerMenu;
