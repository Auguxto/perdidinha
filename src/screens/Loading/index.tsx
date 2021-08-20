import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import {LoadingContainer, LoadingText} from './styles.loading';

const Loading = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <LoadingContainer>
      <LoadingText>Carregando ...</LoadingText>
    </LoadingContainer>
  );
};

export default Loading;
