import React, {useState, useRef, useContext} from 'react';
import {Animated, Dimensions} from 'react-native';
import {DrawerNavigationProp} from '@react-navigation/drawer';

import CheckBox from '@components/CheckBox';

import {UserContext} from '@contexts/UserContext';

import {
  ButtonText,
  EnterContainer,
  IntroButton,
  Introduction,
  IntroductionDesc,
  IntroductionTitle,
  LogoImage,
  Modal,
  ModalButton,
  ModalCheckBox,
  ModalCheckBoxText,
  ModalInput,
  ModalButtonContainer,
  ModalTitle,
} from './styled.enter';

interface IEnter {
  navigation: DrawerNavigationProp<RootDrawerNavigation, 'Enter'>;
}

const Enter = ({navigation}: IEnter) => {
  const [modalActive, setModalActive] = useState(false);
  const [name, setName] = useState<string>();
  const [checked, setChecked] = useState(false);

  const {handleSetUser} = useContext(UserContext);

  const windowHeight = Dimensions.get('window').height;

  const Animation = useRef(new Animated.Value(windowHeight)).current;

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
    <EnterContainer behavior="height">
      <LogoImage />
      {modalActive ? (
        <Modal style={{transform: [{translateY: Animation}]}}>
          <ModalTitle>Bem vinda</ModalTitle>
          <ModalInput value={name} onChangeText={text => setName(text)} />
          <ModalCheckBox>
            <CheckBox
              onPress={() => setChecked(!checked)}
              checked={checked}
              width={30}
              height={30}
              color="#BE5DEB"
            />
            <ModalCheckBoxText>usar biometria?</ModalCheckBoxText>
          </ModalCheckBox>
          <ModalButtonContainer>
            <ModalButton
              onPress={() => {
                handleLogin();
              }}
              backgroundColor="#BE5DEB">
              <ButtonText textColor="#FFFFFF">Entrar</ButtonText>
            </ModalButton>
          </ModalButtonContainer>
        </Modal>
      ) : (
        <Introduction>
          <IntroductionTitle>Perdidinha?</IntroductionTitle>
          <IntroductionDesc>
            Minha namorada é muito perdida então decidi fazer esse Aplicativo
            para que ela possa guardar suas senhas ❤️
          </IntroductionDesc>
          <IntroButton
            onPress={() => {
              setModalActive(true);
              active();
            }}
            backgroundColor="#FFFFFF">
            <ButtonText textColor="#BE5DEB">Entrar</ButtonText>
          </IntroButton>
        </Introduction>
      )}
    </EnterContainer>
  );
};

export default Enter;
