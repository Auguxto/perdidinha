import styled from 'styled-components/native';
import {Animated} from 'react-native';

export const PasswordContainer = styled(Animated.View)`
  flex-direction: column;

  width: 100%;
  height: 100px;

  padding: 20px;
  margin-bottom: 20px;

  border-radius: 20px;

  background-color: rgba(0, 0, 0, 0.3);
`;

export const Header = styled.View`
  flex-direction: row;
`;

export const BottomContainer = styled.View`
  flex: 1;
  flex-direction: row;

  align-items: flex-end;

  width: 100%;
`;

export const Bottom = styled.View`
  flex: 1;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  padding: 10px 0;
`;

export const DeleteButton = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})``;

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

  justify-content: space-between;

  margin-left: 10px;
`;

export const PasswordName = styled.Text`
  font-family: 'Inter';
  font-size: 16px;

  color: #ffffff;
`;

export const PasswordLogin = styled.Text`
  font-family: 'Inter';
  font-size: 12px;

  color: #ffffff;
`;

export const PasswordValue = styled(Animated.Text)`
  font-family: 'Inter';
  font-size: 16px;

  color: #ffffff;
`;

export const PasswordViewToggler = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})``;
