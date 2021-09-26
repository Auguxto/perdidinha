import styled from 'styled-components/native';
import MaskInput from 'react-native-mask-input';

const background = '#FFFFFF';

export const InputGroup = styled.View`
  width: 90%;
  height: 65px;

  flex-direction: row;

  margin: 0px auto;
  margin-bottom: 20px;

  border-radius: 10px;

  background-color: ${background};
`;

export const InputMask = styled(MaskInput).attrs({
  placeholderTextColor: 'rgba(55, 58, 77, 0.3)',
})`
  width: 90%;
  height: 65px;

  padding-left: 10px;

  margin: 0px auto;
  margin-bottom: 20px;

  background-color: ${background};

  border-radius: 10px;

  font-family: 'Ubuntu';
  font-size: 16px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(55, 58, 77, 0.3)',
  autoCapitalize: 'none',
})`
  width: 90%;
  height: 65px;

  padding-left: 10px;

  margin: 0px auto;
  margin-bottom: 20px;

  background-color: ${background};

  border-radius: 10px;

  font-family: 'Ubuntu';
  font-size: 16px;
`;

export const InputEye = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  width: 40px;
  height: 64px;

  align-items: center;
  justify-content: center;

  padding-right: 10px;
`;

export const SelectContainer = styled.View`
  width: 90%;
  height: auto;

  margin: 0 auto;

  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  width: 90%;
  height: 65px;

  align-items: center;
  justify-content: center;

  margin: 20px auto;

  background-color: #be5deb;

  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  font-family: 'Ubuntu';
  font-size: 18px;

  color: #ffffff;
`;

export const ColorInput = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  flex: 1;
  flex-direction: row;
  margin-left: 10px;
  height: 65px;

  align-items: center;
  justify-content: space-between;

  padding: 0px 10px;

  background-color: ${background};

  border-radius: 10px;
`;

export const ColorInputText = styled.Text`
  font-family: 'Ubuntu';
  font-size: 16px;

  color: rgba(55, 58, 77, 0.3);
`;

export const ColorPreview = styled.View<{color: string}>`
  width: 40px;
  height: 40px;

  background-color: ${props => props.color};

  border-radius: 5px;
`;
