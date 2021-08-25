import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useRef, useEffect, useContext} from 'react';
import {Animated, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {MenuContext} from '@contexts/MenuContext';
import {UserContext} from '@contexts/UserContext';

import {
  AccountAvatar,
  AccountContainer,
  AccountName,
  AccountTexts,
  AccountWelcome,
  HeaderContainer,
  LogoutContainer,
  LogoutText,
  MenuTabs,
  MenuToggler,
  SideMenuContainer,
  Tab,
  TabText,
} from './styles.sidemenu';

interface ISideMenu {
  isOpen: boolean;
  toggleActive: () => void;
  navigation: NativeStackNavigationProp<RootStackNavigation>;
}

const SideMenu = ({isOpen, navigation, toggleActive}: ISideMenu) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const {user, handleRemoveUser} = useContext(UserContext);
  const {tabActive} = useContext(MenuContext);

  const menuAnim = useRef(
    new Animated.Value(-Math.round((windowWidth * 90) / 100)),
  ).current;

  const showMenu = () => {
    Animated.timing(menuAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const hideMenu = () => {
    Animated.timing(menuAnim, {
      toValue: -Math.round((windowWidth * 90) / 100),
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (isOpen) {
      showMenu();
    } else {
      hideMenu();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <SideMenuContainer
      style={{transform: [{translateX: menuAnim}]}}
      isOpen={isOpen}
      width={windowWidth}
      height={windowHeight}>
      <HeaderContainer>
        <AccountContainer>
          <AccountAvatar />
          <AccountTexts>
            <AccountWelcome>Bem vinda</AccountWelcome>
            <AccountName>{user.name}</AccountName>
          </AccountTexts>
        </AccountContainer>
        <MenuToggler onPress={toggleActive}>
          <Icon size={30} color="#BE5DEB" name="x" />
        </MenuToggler>
      </HeaderContainer>
      <MenuTabs>
        <Tab active>
          <Icon
            name="key"
            color={tabActive === 'Home' ? '#FFFFFF' : '#000000'}
            size={20}
          />
          <TabText active>Senhas</TabText>
        </Tab>
        <Tab>
          <Icon
            name="plus"
            color={tabActive === 'Manager' ? '#FFFFFF' : '#000000'}
            size={20}
          />
          <TabText>Adicionar senha</TabText>
        </Tab>
        <Tab>
          <Icon
            name="user"
            color={tabActive === 'Profile' ? '#FFFFFF' : '#000000'}
            size={20}
          />
          <TabText>Perfil</TabText>
        </Tab>
        <Tab>
          <Icon
            name="settings"
            color={tabActive === 'Settings' ? '#FFFFFF' : '#000000'}
            size={20}
          />
          <TabText>Configurações</TabText>
        </Tab>
      </MenuTabs>
      <LogoutContainer
        onPress={() => {
          navigation.navigate('Enter');
          handleRemoveUser();
        }}>
        <Icon name="log-out" size={30} color="#000000" />
        <LogoutText>Sair</LogoutText>
      </LogoutContainer>
    </SideMenuContainer>
  );
};

export default SideMenu;
