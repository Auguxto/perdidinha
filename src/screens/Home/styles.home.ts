import styled from 'styled-components/native';

const background = '#FFFFFF';

export const HomeContainer = styled.View`
  flex: 1;

  flex-direction: column;

  align-items: center;

  position: relative;

  background-color: ${background};
`;

export const AddButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  width: 60px;
  height: 60px;

  justify-content: center;
  align-items: center;

  position: absolute;

  right: 40px;
  bottom: 40px;

  background-color: #be5deb;

  border-radius: 60px;
`;
