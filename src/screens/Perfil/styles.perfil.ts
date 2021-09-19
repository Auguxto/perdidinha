import styled from 'styled-components/native';

import Avatar from '../../assets/images/svg/AvatarBig.svg';

export const PerfilContainer = styled.View`
  flex: 1;

  background-color: #ffffff;
`;

export const AvatarWrapper = styled.View`
  flex: 1;

  align-items: center;
`;

export const AvatarSvg = styled(Avatar)`
  width: 300px;
  height: 300px;

  border-radius: 500px;

  border-width: 5px;
  border-color: red;

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
  activeOpacity: 1,
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
