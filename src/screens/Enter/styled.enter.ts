import {Animated} from 'react-native';
import styled from 'styled-components/native';

import Logo from '../../assets/images/svg/Logo.svg';

export const EnterContainer = styled.KeyboardAvoidingView`
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
  justify-content: flex-end;

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
  margin-bottom: 30%;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})<{backgroundColor: string}>`
  width: 100%;
  height: 70px;

  margin: 0px auto;
  margin-bottom: 30px;

  justify-content: center;
  align-items: center;

  background-color: ${props => props.backgroundColor};

  border-radius: 100px;
`;

export const ModalButtonContainer = styled.View`
  flex: 1;
  width: 100%;

  justify-content: flex-end;
`;

export const ModalButton = styled(Button)``;

export const IntroButton = styled(Button)`
  width: 90%;
`;

export const ButtonText = styled.Text<{textColor: string}>`
  font-family: 'Inter-ExtraLight';
  font-size: 22px;

  color: ${props => props.textColor};
`;

export const Modal = styled(Animated.View)`
  flex: 2;
  flex-direction: column;

  align-items: center;

  background-color: #ffffff;

  padding: 0px 20px;

  margin-top: -30px;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const ModalTitle = styled.Text`
  font-family: 'Inter-ExtraLight';
  font-size: 28px;

  align-self: flex-start;

  margin: 30px 20px;

  color: #191716;
`;

export const ModalInput = styled.TextInput.attrs({
  placeholder: 'Seu nome',
  placeholderTextColor: '#BCBBBB',
})`
  font-family: 'Inter-ExtraLight';
  font-size: 18px;
  color: #be5deb;

  width: 100%;
  height: 70px;

  border-width: 1px;
  border-color: #bcbbbb;

  border-radius: 10px;

  margin-top: 30px;

  padding-left: 20px;
`;

export const ModalCheckBox = styled.View`
  flex-direction: row;

  align-self: flex-start;

  margin-top: 20px;

  align-items: center;
`;

export const ModalCheckBoxText = styled.Text`
  font-family: 'Inter-ExtraLight';
  font-size: 16px;

  color: #be5deb;

  margin-left: 10px;
`;
