// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {useContext} from 'react';
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

// import {UserContext} from '@contexts/UserContext';

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
  // navigation: DrawerNavigationProp<RootStackNavigation>;
}

const SideMenu = ({navigation}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  // const {user, handleRemoveUser} = useContext(UserContext);

  // const menuAnim = useRef(
  //   new Animated.Value(-Math.round((windowWidth * 90) / 100)),
  // ).current;

  // const showMenu = () => {
  //   Animated.timing(menuAnim, {
  //     toValue: 0,
  //     duration: 500,
  //     useNativeDriver: true,
  //   }).start();
  // };

  // const hideMenu = () => {
  //   Animated.timing(menuAnim, {
  //     toValue: -Math.round((windowWidth * 90) / 100),
  //     duration: 500,
  //     useNativeDriver: true,
  //   }).start();
  // };

  // useEffect(() => {
  //   if (isOpen) {
  //     showMenu();
  //   } else {
  //     hideMenu();
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isOpen]);

  let tabActive = 'Home';

  return (
    <SideMenuContainer
      // style={{transform: [{translateX: menuAnim}]}}
      // isOpen={isOpen}
      width={windowWidth}
      height={windowHeight}>
      <HeaderContainer>
        <AccountContainer>
          <AccountAvatar />
          <AccountTexts>
            <AccountWelcome>Bem vinda</AccountWelcome>
            <AccountName>Victor</AccountName>
          </AccountTexts>
        </AccountContainer>
        <MenuToggler>
          <Icon size={30} color="#BE5DEB" name="x" />
        </MenuToggler>
      </HeaderContainer>
      <MenuTabs>
        <Tab
          onPress={() => navigation.navigate('Home')}
          active={tabActive === 'Home' ? true : false}>
          <Icon
            name="key"
            color={tabActive === 'Home' ? '#FFFFFF' : '#000000'}
            size={20}
          />
          <TabText active={tabActive === 'Home' ? true : false}>Senhas</TabText>
        </Tab>
        <Tab
          onPress={() => navigation.navigate('Manager')}
          active={tabActive === 'Manager' ? true : false}>
          <Icon
            name="plus"
            color={tabActive === 'Manager' ? '#FFFFFF' : '#000000'}
            size={20}
          />
          <TabText active={tabActive === 'Manager' ? true : false}>
            Adicionar senha
          </TabText>
        </Tab>
        <Tab active={tabActive === 'Profile' ? true : false}>
          <Icon
            name="user"
            color={tabActive === 'Profile' ? '#FFFFFF' : '#000000'}
            size={20}
          />
          <TabText active={tabActive === 'Profile' ? true : false}>
            Perfil
          </TabText>
        </Tab>
        <Tab active={tabActive === 'Settings' ? true : false}>
          <Icon
            name="settings"
            color={tabActive === 'Settings' ? '#FFFFFF' : '#000000'}
            size={20}
          />
          <TabText active={tabActive === 'Settings' ? true : false}>
            Configurações
          </TabText>
        </Tab>
      </MenuTabs>
      <LogoutContainer
        onPress={() => {
          // handleRemoveUser();
        }}>
        <Icon name="log-out" size={30} color="#000000" />
        <LogoutText>Sair</LogoutText>
      </LogoutContainer>
    </SideMenuContainer>
  );
};

export default SideMenu;
