import React, {useEffect, useContext} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {BackHandler} from 'react-native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import FingerprintScanner from 'react-native-fingerprint-scanner';

import * as S from './styles.loading';

import {UserContext} from '@contexts/UserContext';

import {getUser} from '@lib/storage';

interface ILoading {
  navigation: DrawerNavigationProp<RootDrawerNavigation, 'Loading'>;
}

const Loading = ({navigation}: ILoading) => {
  const {load} = useContext(UserContext);

  useEffect(() => {
    SplashScreen.hide();

    (async () => {
      let user_storage = await getUser();
      if (user_storage) {
        if (user_storage.biometry) {
          FingerprintScanner.authenticate({
            title: 'Perdidinha',
          })
            .then(() => {
              load(user_storage);

              navigation.navigate('Home');
              FingerprintScanner.release();
            })
            .catch(() => {
              BackHandler.exitApp();
            });
        } else {
          navigation.navigate('Home');
          FingerprintScanner.release();
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
