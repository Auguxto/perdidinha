import styled from 'styled-components/native';

import Avatar from '../../assets/images/svg/AvatarBig.svg';

export const PerfilContainer = styled.View`
  flex: 1;

  background-color: #ffffff;
`;

export const AvatarWrapper = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  flex: 1;

  align-items: center;
`;

export const AvatarSvg = styled(Avatar)`
  width: 300px;
  height: 300px;

  border-radius: 500px;

  margin-top: 20%;
`;

export const AvatarImageWrapper = styled.View`
  width: 300px;
  height: 300px;

  margin-top: 20%;

  border-radius: 500px;
`;

export const AvatarImage = styled.Image`
  width: 300px;
  height: 300px;

  border-radius: 500px;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  width: 90%;
  height: 60px;

  align-items: center;
  justify-content: center;

  margin: 20px auto;

  background-color: #be5deb;

  border-radius: 60px;
`;

export const ButtonText = styled.Text`
  font-family: 'Ubuntu';
  font-size: 18px;

  color: #ffffff;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#BCBBBB',
})`
  font-family: 'Inter-ExtraLight';
  font-size: 18px;
  color: #be5deb;

  width: 100%;
  height: 70px;

  background-color: #ffffff;

  border-radius: 10px;

  margin-top: 30px;

  padding-left: 20px;
`;

export const Inputs = styled.View`
  flex: 1;

  width: 90%;

  margin: 0 auto;
  margin-top: 30%;
`;

export const CheckBox = styled.View`
  flex-direction: row;

  align-self: flex-start;

  margin-top: 20px;

  align-items: center;
`;

export const CheckBoxText = styled.Text`
  font-family: 'Inter-ExtraLight';
  font-size: 16px;

  color: #be5deb;

  margin-left: 10px;
`;
