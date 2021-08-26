import MenuToggler from '@components/MenuToggler';
import React from 'react';
import {Text} from 'react-native';

import {HomeContainer} from './styles.home';

const Home = ({navigation}) => {
  return (
    <HomeContainer>
      <MenuToggler onPress={() => navigation.toggleDrawer()} />
      <Text>Home</Text>
    </HomeContainer>
  );
};

export default Home;
