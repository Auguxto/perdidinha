import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import {View as MotiView} from 'moti';

export const SelectInputContainer = styled(MotiView)<{width?: string}>`
  width: ${props => (props.width ? props.width : '90%')};

  margin: 0px auto;
  margin-bottom: 20px;

  border-radius: 10px;

  background: #ffffff;

  overflow: hidden;
`;

export const AnimatedContainer = styled.View<{open: boolean}>`
  height: ${props => (props.open ? 'auto' : '65px')};
`;

export const Header = styled.View`
  flex-direction: row;

  align-items: center;

  justify-content: space-between;

  width: 100%;
  height: 65px;

  padding: 20px;
`;

export const SelectName = styled.Text`
  font-family: 'Ubuntu';
  font-size: 16px;

  color: rgba(55, 58, 77, 0.3);
`;

export const ToggleSelectOpen = styled.TouchableOpacity``;

export const Bottom = styled(FlatList as new () => FlatList<any>)`
  width: 100%;
  height: ${65 * 3}px;
`;

export const SelectItem = styled.TouchableOpacity`
  width: 100%;
  height: 65px;

  padding: 20px;
`;

export const SelectItemName = styled.Text`
  font-family: 'Ubuntu';
  font-size: 16px;

  color: rgba(55, 58, 77, 0.3);
`;
