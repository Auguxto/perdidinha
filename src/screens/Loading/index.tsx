import React, {useEffect, useContext} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';

import {LoadingContainer, LoadingText} from './styles.loading';

import {UserContext} from '@contexts/UserContext';
import {MenuContext} from '@contexts/MenuContext';

interface ILoading {
  navigation: NativeStackNavigationProp<RootStackNavigation, 'Loading'>;
}

const Loading = ({navigation}: ILoading) => {
  const {user} = useContext(UserContext);
  const {setTabActive} = useContext(MenuContext);

  // hide splashScreen
  useEffect(() => {
    SplashScreen.hide();

    navigation.addListener('focus', e => {
      let tab = e.target.split('-')[0];
      setTabActive(tab);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // navigate user
  useEffect(() => {
    if (user) {
      navigation.navigate('Home');
    } else {
      navigation.navigate('Enter');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <LoadingContainer>
      <LoadingText>Carregando ...</LoadingText>
    </LoadingContainer>
  );
};

export default Loading;
