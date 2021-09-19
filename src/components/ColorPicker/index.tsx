import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {randomColor} from '@lib/colors';

import {
  CloseColorPicker,
  ColorPickerContainer,
  ColorPickerWrapper,
  ColorPreview,
  InputColor,
  RandomButton,
  RandomText,
} from './styles.colorpicker';

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
    <ColorPickerContainer>
      <ColorPickerWrapper>
        <CloseColorPicker onPress={onCloseButton}>
          <Icon name="x" size={30} color="#A6A6A6" />
        </CloseColorPicker>
        <ColorPreview style={styles.shadow} color={color} />
        <InputColor
          style={styles.shadow}
          value={inputColor}
          onChangeText={text => onInputColorChange(text)}
          autoCapitalize="none"
        />
        <RandomButton style={styles.shadow} onPress={() => handleRandomColor()}>
          <RandomText>Cor Aleatória</RandomText>
        </RandomButton>
      </ColorPickerWrapper>
    </ColorPickerContainer>
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
