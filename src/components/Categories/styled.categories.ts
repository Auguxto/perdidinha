import styled from 'styled-components/native';
import {FlatList} from 'react-native';

export const CategoriesContainer = styled.View`
  width: 100%;
  height: 14%;

  margin-top: 7%;

  padding-left: 20px;
`;

export const Title = styled.Text`
  font-family: 'Ubuntu-Medium';
  font-size: 24px;

  color: #373a4d;
`;

export const CategoriesButtons = styled(
  FlatList as new () => FlatList<Categorie>,
)`
  margin-top: 20px;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  height: 50px;

  justify-content: center;
  align-items: center;

  padding: 10px 20px;

  margin-right: 20px;

  background-color: #d280f8;

  border-radius: 8px;
`;

export const ButtonText = styled.Text`
  font-family: 'Ubuntu-Light';
  font-size: 18px;

  color: #ffffff;
`;
