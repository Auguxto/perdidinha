import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import * as S from './styles.menutoggler';

interface IMenuToggler {
  onPress: () => void;
}

const MenuToggler = ({onPress}: IMenuToggler) => {
  return (
    <S.MenuTogglerButton onPress={onPress}>
      <Icon name="menu" color="#FFFFFF" size={40} />
    </S.MenuTogglerButton>
  );
};

export default MenuToggler;
