import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {MenuTogglerButton} from './styles.menutoggler';

interface IMenuToggler {
  onPress: () => void;
}

const MenuToggler = ({onPress}: IMenuToggler) => {
  return (
    <MenuTogglerButton onPress={onPress}>
      <Icon name="menu" color="#BE5DEB" size={40} />
    </MenuTogglerButton>
  );
};

export default MenuToggler;
