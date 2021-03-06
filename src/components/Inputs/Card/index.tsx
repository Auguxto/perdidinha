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

import Masks from '@utils/masks';

interface ICardInput {
  color: string;
  selectedIcon: string;
  navigation: DrawerNavigationProp<RootDrawerNavigation>;
  setSelectedIcon: Dispatch<SetStateAction<string>>;
  setColor: Dispatch<SetStateAction<string>>;
  toggleColorPicker: () => void;
}

const CardInput = ({
  color,
  selectedIcon,
  navigation,
  setColor,
  setSelectedIcon,
  toggleColorPicker,
}: ICardInput) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [date, setDate] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');

  const [viewPassword, toggleViewPassword] = useReducer(s => !s, true);

  const {handleAddPassword} = useContext(UserContext);

  function addPassword() {
    if (
      name.length >= 3 &&
      number.length >= 3 &&
      date.length === 5 &&
      code.length >= 2
    ) {
      handleAddPassword({
        name,
        enter_value: number,
        second_value: date,
        password_value: password + ' Cód: ' + code,
        background: color,
        categorie: 'Cartão',
        favorite: false,
        icon: selectedIcon,
      });

      setName('');
      setNumber('');
      setDate('');
      setCode('');
      setPassword('');
      setSelectedIcon('');
      setColor('#FFFFFF');

      navigation.navigate('Home');
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
      <S.InputMask
        style={styles.shadow}
        value={number}
        onChangeText={(masked: string) => {
          setNumber(masked);
        }}
        mask={Masks.card}
        keyboardType="numeric"
        placeholder="Número"
      />
      <S.InputMask
        style={styles.shadow}
        value={date}
        onChangeText={(masked: string) => {
          setDate(masked);
        }}
        keyboardType="numeric"
        mask={Masks.validThru}
        placeholder="00/00"
      />
      <S.InputGroup style={styles.shadow}>
        <S.Input
          value={password}
          keyboardType="numeric"
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
      <S.Input
        style={styles.shadow}
        value={code}
        keyboardType="numeric"
        onChangeText={setCode}
        maxLength={4}
        placeholder="Codigo se segurança"
      />
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

export default CardInput;
