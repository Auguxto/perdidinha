import React, {useEffect, useContext} from 'react';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {authenticate, hideSplashScreen} from '@lib/perdidinha';

import * as S from './styles.loading';

import {UserContext} from '@contexts/UserContext';

import {getUser} from '@lib/storage';

interface ILoading {
  navigation: DrawerNavigationProp<RootDrawerNavigation, 'Loading'>;
}

const Loading = ({navigation}: ILoading) => {
  const {load} = useContext(UserContext);

  useEffect(() => {
    hideSplashScreen();

    (async () => {
      let user = await getUser();
      if (user) {
        const auth = await authenticate(user);
        if (auth) {
          load(user);
          navigation.navigate('Home');
        }
      } else {
        navigation.navigate('Enter');
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.LoadingContainer>
      <S.LoadingText>Carregando ...</S.LoadingText>
    </S.LoadingContainer>
  );
};

export default Loading;
