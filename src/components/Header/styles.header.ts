import styled from 'styled-components/native';

import MenuToggler from '@components/MenuToggler';

export const HeaderContainer = styled.View`
  flex-direction: row;

  width: 100%;
  height: 8%;

  align-items: center;

  padding: 0px 20px;

  background-color: #be5deb;
`;

export const Toggler = styled(MenuToggler)``;

export const HelloUser = styled.Text`
  font-family: 'Ubuntu-Light';
  font-size: 18px;

  color: #ffffff;

  margin-left: 10px;
`;

export const Today = styled.Text`
  flex: 1;
  font-family: 'Ubuntu-Medium';
  font-size: 10px;

  text-align: right;

  color: #ffffff;
`;
