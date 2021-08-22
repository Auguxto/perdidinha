import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {CheckBoxContainer} from './styles.checkbox';

interface ICheckBox {
  checked: boolean;
  color: string;
  width: number;
  height: number;
  onPress: () => void;
}

const CheckBox = ({checked, width, height, color, onPress}: ICheckBox) => {
  return (
    <CheckBoxContainer
      onPress={onPress}
      checked={checked}
      color={color}
      width={width}
      height={height}>
      {checked && <Icon name="check" color="#FFFFFF" size={width} />}
    </CheckBoxContainer>
  );
};

export default CheckBox;
