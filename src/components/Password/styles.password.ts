import styled from 'styled-components/native';
import {View as MotiView} from 'moti';

export const PasswordContainer = styled(MotiView)`
  width: 90%;

  margin: 12px auto;

  border-radius: 12px;

  background: #ffffff;

  overflow: hidden;
`;

export const AnimatedContainer = styled.View<{open: boolean}>`
  height: ${props => (props.open ? '150px' : '100px')};
`;

export const Header = styled.View`
  flex-direction: row;

  align-items: center;

  width: 100%;
  height: 100px;

  padding: 20px;
`;

export const PasswordInfos = styled.View`
  flex: 1;

  margin: 0 17px;
`;

export const Name = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-family: 'Ubuntu-Medium';
  font-size: 20px;

  color: #373a4d;
`;

export const EnterValue = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-family: 'Ubuntu-Medium';
  font-size: 14px;

  color: #747474;
`;

export const SecondValue = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-family: 'Ubuntu-Medium';
  font-size: 12px;

  color: #373a4d;
`;

export const Buttons = styled.View`
  flex-direction: column;

  justify-content: space-between;

  height: 100%;
`;

export const Favorite = styled.TouchableOpacity`
  margin-bottom: 5px;
`;

export const ToggleView = styled.TouchableOpacity`
  margin-top: 5px;
`;

export const Bottom = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  padding: 0px 20px;

  width: 100%;
  height: 50px;
`;

export const PasswordValue = styled.Text.attrs({
  numberOfLines: 1,
})`
  flex: 1;

  font-family: 'Ubuntu-Medium';
  font-size: 14px;

  color: #747474;
`;

export const Delete = styled.TouchableOpacity``;
