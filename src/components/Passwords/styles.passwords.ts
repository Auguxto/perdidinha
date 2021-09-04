import styled from 'styled-components/native';
import {FlatList} from 'react-native';

export const PasswordsContainer = styled.View`
  flex: 1;

  margin-top: 5%;
`;

export const PasswordList = styled(FlatList as new () => FlatList<Password>)`
  flex: 1;
`;
