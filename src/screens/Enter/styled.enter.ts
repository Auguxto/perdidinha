import {Animated} from 'react-native';
import styled from 'styled-components/native';

import Logo from '../../assets/images/svg/Logo.svg';

export const EnterContainer = styled.View`
  flex: 1;

  background-color: #be5deb;
`;

export const LogoImage = styled(Logo)`
  width: 100%;

  margin-top: 50px;
`;

export const Introduction = styled.View`
  flex: 2;

  align-items: center;

  position: relative;
`;

export const IntroductionTitle = styled.Text`
  font-family: 'Inter-ExtraLight';
  font-size: 38px;

  color: #ffffff;

  margin-top: 30px;
`;

export const IntroductionDesc = styled.Text`
  font-family: 'Inter-Thin';
  font-size: 20px;

  text-align: center;

  width: 80%;

  color: #ffffff;

  margin-top: 30px;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})<{backgroundColor: string}>`
  width: 90%;
  height: 70px;

  position: absolute;

  bottom: 40px;

  justify-content: center;
  align-items: center;

  background-color: ${props => props.backgroundColor};

  border-radius: 10px;
`;

export const ButtonText = styled.Text<{textColor: string}>`
  font-family: 'Inter-ExtraLight';
  font-size: 22px;

  color: ${props => props.textColor};
`;

export const Modal = styled(Animated.View)`
  flex: 2;

  background-color: #ffffff;

  margin-top: -30px;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const ModalTitle = styled.Text`
  font-family: 'Inter-ExtraLight';
  font-size: 28px;

  margin: 30px 40px;

  color: #191716;
`;

export const ModalInput = styled.TextInput.attrs({
  placeholder: 'Seu nome',
  placeholderTextColor: '#BCBBBB',
})`
  font-family: 'Inter-ExtraLight';
  font-size: 18px;
  color: #be5deb;

  width: 90%;
  height: 70px;

  border-width: 1px;
  border-color: #bcbbbb;

  border-radius: 10px;

  margin: 0 auto;
  margin-top: 30px;

  padding-left: 20px;
`;
