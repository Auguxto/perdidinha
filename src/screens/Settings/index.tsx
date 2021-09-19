import React from 'react';

import * as S from './styles.settings';

import Header from '@components/Header';

const Settings = ({navigation}) => {
  return (
    <S.SettingsContainer>
      <Header navigation={navigation} />
    </S.SettingsContainer>
  );
};

export default Settings;
