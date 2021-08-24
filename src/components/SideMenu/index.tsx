import {UserContext} from '@contexts/UserContext';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useRef, useEffect, useContext} from 'react';
import {Animated, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {
  AccountAvatar,
  AccountContainer,
  AccountName,
  AccountTexts,
  AccountWelcome,
  HeaderContainer,
  LogoutContainer,
  LogoutText,
  MenuToggler,
  SideMenuContainer,
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
