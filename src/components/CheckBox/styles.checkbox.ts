import styled from 'styled-components/native';

export const CheckBoxContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})<{width: number; height: number; checked: boolean; color: string}>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;

  border-width: ${props => (props.checked ? '0px' : '1px')};
  border-color: #bcbbbb;

  background-color: ${props => (props.checked ? props.color : 'transparent')};

  border-radius: 5px;
`;
