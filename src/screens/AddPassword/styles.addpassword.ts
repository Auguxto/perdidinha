import styled from 'styled-components/native';

const background = '#FFFFFF';

export const AddPasswordContainer = styled.View`
  flex: 1;

  background-color: ${background};
`;

export const InputsContainer = styled.View`
  flex: 1;

  margin-top: 100px;
`;

export const Input = styled.TextInput.attrs({
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

export const SelectContainer = styled.View`
  width: 90%;
  height: auto;

  margin: 0 auto;

  flex-direction: row;
  justify-content: space-between;
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
