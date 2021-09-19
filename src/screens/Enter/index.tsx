import React, {useState, useRef, useContext} from 'react';
import {Animated, useWindowDimensions} from 'react-native';
import {DrawerNavigationProp} from '@react-navigation/drawer';

import * as S from './styled.enter';

import CheckBox from '@components/CheckBox';

import {UserContext} from '@contexts/UserContext';

interface IEnter {
  navigation: DrawerNavigationProp<RootDrawerNavigation, 'Enter'>;
}

const Enter = ({navigation}: IEnter) => {
  const [modalActive, setModalActive] = useState(false);
  const [name, setName] = useState<string>();
  const [checked, setChecked] = useState(false);

  const {handleSetUser} = useContext(UserContext);

  const {height} = useWindowDimensions();

  const Animation = useRef(new Animated.Value(height)).current;

  const active = () => {
    Animated.timing(Animation, {
      useNativeDriver: true,
      toValue: 0,
      duration: 1 * 1000,
    }).start();
  };

  function handleLogin() {
    if (name.length >= 3) {
      handleSetUser(name, checked);
      navigation.navigate('Home');
    }
  }

  return (
    <S.EnterContainer behavior="height">
      <S.LogoImage />
      {modalActive ? (
        <S.Modal style={{transform: [{translateY: Animation}]}}>
          <S.ModalTitle>Bem vinda</S.ModalTitle>
          <S.ModalInput value={name} onChangeText={text => setName(text)} />
          <S.ModalCheckBox>
            <CheckBox
              onPress={() => setChecked(!checked)}
              checked={checked}
              width={30}
              height={30}
              color="#BE5DEB"
            />
            <S.ModalCheckBoxText>usar biometria?</S.ModalCheckBoxText>
          </S.ModalCheckBox>
          <S.ModalButtonContainer>
            <S.ModalButton
              onPress={() => {
                handleLogin();
              }}
              backgroundColor="#BE5DEB">
              <S.ButtonText textColor="#FFFFFF">Entrar</S.ButtonText>
            </S.ModalButton>
          </S.ModalButtonContainer>
        </S.Modal>
      ) : (
        <S.Introduction>
          <S.IntroductionTitle>Perdidinha?</S.IntroductionTitle>
          <S.IntroductionDesc>
            Minha namorada é muito perdida então decidi fazer esse Aplicativo
            para que ela possa guardar suas senhas ❤️
          </S.IntroductionDesc>
          <S.IntroButton
            onPress={() => {
              setModalActive(true);
              active();
            }}
            backgroundColor="#FFFFFF">
            <S.ButtonText textColor="#BE5DEB">Entrar</S.ButtonText>
          </S.IntroButton>
        </S.Introduction>
      )}
    </S.EnterContainer>
  );
};

export default Enter;
