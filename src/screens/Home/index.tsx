import React from 'react';

import MenuToggler from '@components/MenuToggler';
import Password from '@components/Password';

import {HomeCard, HomeContainer, HomeContent} from './styles.home';

const Home = ({navigation}) => {
  return (
    <HomeContainer>
      <MenuToggler onPress={() => navigation.toggleDrawer()} />
      <HomeContent>
        <HomeCard />
        <Password />
        <Password />
        <Password />
      </HomeContent>
    </HomeContainer>
  );
};

export default Home;
