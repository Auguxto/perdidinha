import React, {useState, useEffect, useContext} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {HomeContainer} from './styles.home';

import SideMenu from '@components/SideMenu';

import {MenuContext} from '@contexts/MenuContext';

interface IHome {
  navigation: NativeStackNavigationProp<RootStackNavigation, 'Home'>;
}

const Home = ({navigation}: IHome) => {
  const [menuActive, setMenuActive] = useState(false);

  const {setTabActive} = useContext(MenuContext);

  function toggleMenuActive() {
    setMenuActive(!menuActive);
  }

  useEffect(() => {
    navigation.addListener('focus', e => {
      let tab = e.target.split('-')[0];
      setTabActive(tab);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  return (
    <HomeContainer>
      <SideMenu
        navigation={navigation}
        isOpen={menuActive}
        toggleActive={toggleMenuActive}
      />
      <Text>Teste Home</Text>
      <TouchableOpacity onPress={toggleMenuActive}>
        <Text>Toggle</Text>
      </TouchableOpacity>
    </HomeContainer>
  );
};

export default Home;
