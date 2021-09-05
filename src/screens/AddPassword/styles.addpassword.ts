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
