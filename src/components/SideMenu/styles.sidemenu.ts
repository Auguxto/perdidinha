import styled from 'styled-components/native';
import {Animated} from 'react-native';

import Avatar from '../../assets/images/svg/Avatar.svg';

const sideMenuBackground = '#FFFFFF';
const black = '#000000';

export const SideMenuContainer = styled(Animated.View)<{
  width: number;
  height: number;
  isOpen: boolean;
}>`
  width: ${props => Math.round((props.width * 90) / 100)}px;
  height: 100%;

  background-color: ${sideMenuBackground};

  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;

  z-index: 1000;

  padding: 30px;

  position: absolute;
`;

export const HeaderContainer = styled.View`
  width: 100%;
  height: 60px;

  flex-direction: row;

  align-items: center;
  justify-content: space-between;
`;

export const AccountContainer = styled.View`
  flex-direction: row;
`;

export const AccountAvatar = styled(Avatar)`
  width: 60px;
  height: 60px;
`;

export const AccountTexts = styled.View`
  flex-direction: column;

  margin-left: 10px;
`;

export const AccountWelcome = styled.Text`
  font-family: 'Inter-Thin';
  font-size: 18px;

  color: ${black};
`;

export const AccountName = styled.Text`
  font-family: 'Inter-Light';
  font-size: 18px;

  color: ${black};
`;

export const MenuToggler = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})``;

export const LogoutContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  flex-direction: row;
  align-items: center;
`;

export const LogoutText = styled.Text`
  font-family: 'Inter';
  font-size: 18px;

  margin-left: 10px;

  color: ${black};
`;
