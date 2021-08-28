import styled from 'styled-components/native';
import {Animated} from 'react-native';

export const PasswordContainer = styled(Animated.View)`
  flex-direction: column;

  width: 100%;
  height: 100px;

  padding: 20px;
  margin-bottom: 20px;

  border-radius: 20px;

  background-color: #ffffff;
`;

export const Header = styled.View`
  flex-direction: row;
`;

export const Bottom = styled.View`
  flex-direction: row;

  justify-content: center;
  align-items: center;

  width: 100%;
`;

export const PasswordIcon = styled.View`
  width: 60px;
  height: 60px;

  align-items: center;
  justify-content: center;

  background: blue;

  border-radius: 10px;
`;

export const Texts = styled.View`
  flex: 1;
  flex-direction: column;

  margin-left: 10px;
`;

export const PasswordName = styled.Text`
  font-family: 'Inter-Light';
  font-size: 16px;

  margin-top: 5px;

  color: #191716;
`;

export const PasswordLogin = styled.Text`
  font-family: 'Inter-Light';
  font-size: 12px;

  color: #191716;
`;

export const PasswordValue = styled(Animated.Text)`
  font-family: 'Inter';
  font-size: 16px;

  margin-top: 20px;

  color: #191716;
`;

export const PasswordViewToggler = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})``;
