import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useState,
  useReducer,
} from 'react';
import {StyleSheet} from 'react-native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import Feather from 'react-native-vector-icons/Feather';

import * as S from '../styles.inputs';

import SelectInput from '@components/SelectInput';

import {UserContext} from '@contexts/UserContext';

import {icons} from '@lib/icons';

interface ISocialInput {
  color: string;
  selectedIcon: string;
  navigation: DrawerNavigationProp<RootDrawerNavigation>;
  setSelectedIcon: Dispatch<SetStateAction<string>>;
  setColor: Dispatch<SetStateAction<string>>;
  toggleColorPicker: () => void;
}

const SocialInput = ({
  color,
  selectedIcon,
  navigation,
  setColor,
  toggleColorPicker,
  setSelectedIcon,
}: ISocialInput) => {
  const [name, setName] = useState('');
  const [enter, setEnter] = useState('');
  const [password, setPassword] = useState('');

  const [viewPassword, toggleViewPassword] = useReducer(s => !s, true);

  const {handleAddPassword} = useContext(UserContext);

  function addPassword() {
    if (name.length >= 3 && password.length >= 1 && enter.length >= 3) {
      handleAddPassword({
        name,
        enter_value: enter,
        password_value: password,
        background: color,
        categorie: 'Rede Social',
        favorite: false,
        icon: selectedIcon,
      });

      navigation.navigate('Home');

      setName('');
      setEnter('');
      setPassword('');
      setSelectedIcon('');
      setColor('#FFFFFF');
    }
  }

  return (
    <>
      <S.Input
        style={styles.shadow}
        value={name}
        onChangeText={setName}
        placeholder="Nome"
      />
      <S.Input
        style={styles.shadow}
        value={enter}
        onChangeText={setEnter}
        placeholder="Email / Username / Telefone"
      />
      <S.InputGroup style={styles.shadow}>
        <S.Input
          value={password}
          onChangeText={setPassword}
          placeholder="Senha"
          secureTextEntry={viewPassword}
        />
        <S.InputEye onPress={toggleViewPassword}>
          <Feather
            name={viewPassword ? 'eye' : 'eye-off'}
            color="#BE5DEB"
            size={30}
          />
        </S.InputEye>
      </S.InputGroup>
      <S.SelectContainer>
        <SelectInput
          width="60%"
          selected={selectedIcon}
          data={icons}
          onSelect={setSelectedIcon}
        />
        <S.ColorInput onPress={toggleColorPicker} style={styles.shadow}>
          <S.ColorInputText>Cor</S.ColorInputText>
          <S.ColorPreview color={color} />
        </S.ColorInput>
      </S.SelectContainer>
      <S.Button onPress={addPassword}>
        <S.ButtonText>Salvar</S.ButtonText>
      </S.Button>
    </>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 5,
  },
});

export default SocialInput;
