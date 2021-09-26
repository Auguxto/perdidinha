import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {randomColor} from 'pyloo';

import * as S from './styles.colorpicker';

interface IColorPicker {
  color: string;
  onChangeColor: (color: string) => void;
  onCloseButton: () => void;
}

const ColorPicker = ({
  color = '#FFFFFF',
  onChangeColor,
  onCloseButton,
}: IColorPicker) => {
  const [inputColor, setInputColor] = useState('');

  function handleRandomColor() {
    onChangeColor(randomColor());
  }

  function onInputColorChange(text: string) {
    setInputColor(text);
    if (text.length > 6) {
      onChangeColor(text);
    }
  }

  return (
    <S.ColorPickerContainer>
      <S.ColorPickerWrapper>
        <S.CloseColorPicker onPress={onCloseButton}>
          <Icon name="x" size={30} color="#A6A6A6" />
        </S.CloseColorPicker>
        <S.ColorPreview style={styles.shadow} color={color} />
        <S.InputColor
          style={styles.shadow}
          value={inputColor}
          onChangeText={text => onInputColorChange(text)}
          autoCapitalize="none"
        />
        <S.RandomButton
          style={styles.shadow}
          onPress={() => handleRandomColor()}>
          <S.RandomText>Cor Aleatória</S.RandomText>
        </S.RandomButton>
      </S.ColorPickerWrapper>
    </S.ColorPickerContainer>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default ColorPicker;
