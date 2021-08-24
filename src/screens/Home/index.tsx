import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {HomeContainer} from './styles.home';
import SideMenu from '@components/SideMenu';

interface IHome {
  navigation: NativeStackNavigationProp<RootStackNavigation, 'Home'>;
}

const Home = ({navigation}: IHome) => {
  const [menuActive, setMenuActive] = useState(false);

  function toggleMenuActive() {
    setMenuActive(!menuActive);
  }

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
