import React from 'react';

import getIcon from '@lib/icons';

import * as S from './styles.passwordicon';

interface IPasswordIcon {
  iconName: string;
  backgroundColor: string;
}

const PasswordIcon = ({iconName, backgroundColor}: IPasswordIcon) => {
  return (
    <S.PasswordIconContainer backgroundColor={backgroundColor}>
      <S.Icon source={getIcon(iconName)} />
    </S.PasswordIconContainer>
  );
};

export default PasswordIcon;
