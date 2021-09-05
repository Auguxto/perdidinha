import React, {useEffect, useContext} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {DrawerNavigationProp} from '@react-navigation/drawer';

import {LoadingContainer, LoadingText} from './styles.loading';

import {UserContext} from '@contexts/UserContext';

import {getUser} from '@utils/storage';

interface ILoading {
  navigation: DrawerNavigationProp<RootDrawerNavigation, 'Loading'>;
}

const Loading = ({navigation}: ILoading) => {
  const {load} = useContext(UserContext);

  // hide splashScreen
  useEffect(() => {
    SplashScreen.hide();

    (async () => {
      let user_storage = await getUser();
      if (user_storage) {
        load(user_storage);

        navigation.navigate('Home');
      } else {
        navigation.navigate('Enter');
        console.log('No user found on storage');
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    navigation.addListener('beforeRemove', event => {
      event.preventDefault();
    });
  }, [navigation]);

  return (
    <LoadingContainer>
      <LoadingText>Carregando ...</LoadingText>
    </LoadingContainer>
  );
};

export default Loading;
