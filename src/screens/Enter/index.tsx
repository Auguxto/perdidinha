import React, {useState, useRef} from 'react';
import {Animated, Dimensions} from 'react-native';

import {
  Button,
  ButtonText,
  EnterContainer,
  Introduction,
  IntroductionDesc,
  IntroductionTitle,
  LogoImage,
  Modal,
  ModalInput,
  ModalTitle,
} from './styled.enter';

const Enter = () => {
  const [modalActive, setModalActive] = useState(false);

  const windowHeight = Dimensions.get('window').height;

  const Animation = useRef(new Animated.Value(windowHeight)).current;
  const OpacityAnimation = useRef(new Animated.Value(1)).current;

  const active = () => {
    Animated.timing(Animation, {
      useNativeDriver: true,
      toValue: 0,
      duration: 1 * 1000,
    }).start();

    Animated.timing(OpacityAnimation, {
      useNativeDriver: true,
      toValue: 0,
      duration: 1 * 1000,
    }).start();
  };

  return (
    <EnterContainer>
      <LogoImage />
      {modalActive ? (
        <Modal style={{transform: [{translateY: Animation}]}}>
          <ModalTitle>Bem vinda</ModalTitle>
          <ModalInput />
        </Modal>
      ) : (
        <Introduction>
          <IntroductionTitle>Perdidinha?</IntroductionTitle>
          <IntroductionDesc>
            Minha namorada é muito perdida então decidi fazer esse Aplicativo
            para que ela possa guardar suas senhas ❤️
          </IntroductionDesc>
          <Button
            onPress={() => {
              setModalActive(true);
              active();
            }}
            backgroundColor="#FFFFFF">
            <ButtonText textColor="#BE5DEB">Entrar</ButtonText>
          </Button>
        </Introduction>
      )}
    </EnterContainer>
  );
};

export default Enter;
