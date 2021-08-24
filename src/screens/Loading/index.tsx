import React, {useEffect, useContext} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';

import {LoadingContainer, LoadingText} from './styles.loading';

import {UserContext} from '@contexts/UserContext';

interface ILoading {
  navigation: NativeStackNavigationProp<RootStackNavigation, 'Loading'>;
}

const Loading = ({navigation}: ILoading) => {
  const {user} = useContext(UserContext);

  useEffect(() => {
    SplashScreen.hide();
    if (user) {
      console.log(user);
      return navigation.navigate('Home');
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
