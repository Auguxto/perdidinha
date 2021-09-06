import styled from 'styled-components/native';

export const ColorPickerContainer = styled.View`
  width: 100%;
  height: 100%;

  z-index: 100;

  flex-direction: column;

  position: absolute;

  background-color: rgba(0, 0, 0, 0.4);

  align-items: center;
  justify-content: center;
`;

export const ColorPickerWrapper = styled.View`
  width: 90%;
  height: auto;

  align-items: center;
  justify-content: center;

  padding: 20px 0px;

  background-color: #ffffff;

  border-radius: 20px;
`;

export const ColorPreview = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})<{color: string}>`
  width: 180px;
  height: 180px;

  border-radius: 100px;

  background-color: ${props => props.color};
`;

export const RandomButton = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  width: 90%;
  height: 60px;

  justify-content: center;
  align-items: center;

  margin-top: 20px;

  background-color: #be5deb;

  border-radius: 60px;
`;

export const RandomText = styled.Text`
  font-family: 'Ubunut-Light';
  font-size: 18px;

  color: #ffffff;
`;

export const InputColor = styled.TextInput.attrs({
  placeholder: '#FFFFFF',
  placeholderTextColor: '#A6A6A6',
})`
  width: 80%;
  height: 50px;

  margin-top: 30px;
  padding-left: 10px;

  background-color: #ffffff;

  border-radius: 10px;
`;

export const CloseColorPicker = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  position: absolute;

  top: 20px;
  right: 20px;
`;
