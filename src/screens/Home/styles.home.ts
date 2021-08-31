import styled from 'styled-components/native';

import MenuToggler from '@components/MenuToggler';

const background = '#FFFFFF';

export const HomeContainer = styled.View`
  flex: 1;

  flex-direction: column;

  align-items: center;

  background-color: ${background};
`;

export const HeaderContainer = styled.View`
  width: 100%;
  height: 8%;

  justify-content: center;

  padding-left: 20px;

  background-color: #be5deb;
`;

export const Toggler = styled(MenuToggler)``;

export const SearchContainer = styled.View`
  width: 90%;
  height: 50px;

  flex-direction: row;
  justify-content: space-between;

  margin-top: 20%;
`;

export const Search = styled.TextInput.attrs({
  placeholder: 'Pesquisar',
  placeholderTextColor: '#be5deb',
})`
  width: 80%;

  border-width: 1px;
  border-color: #be5deb;
  border-radius: 10px;

  padding-left: 20px;
`;

export const AddButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  width: 15%;
  height: 100%;

  justify-content: center;
  align-items: center;

  background-color: #be5deb;

  border-radius: 10px;
`;

export const PasswordsContainer = styled.ScrollView`
  flex: 1;

  width: 90%;

  margin: 10% 0;
`;
