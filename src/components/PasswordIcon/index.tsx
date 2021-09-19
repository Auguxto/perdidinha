import React from 'react';

import getIcon from '@lib/icons';

import {Icon, PasswordIconContainer} from './styles.passwordicon';

interface IPasswordIcon {
  iconName: string;
  backgroundColor: string;
}

const PasswordIcon = ({iconName, backgroundColor}: IPasswordIcon) => {
  return (
    <PasswordIconContainer backgroundColor={backgroundColor}>
      <Icon source={getIcon(iconName)} />
    </PasswordIconContainer>
  );
};

export default PasswordIcon;
