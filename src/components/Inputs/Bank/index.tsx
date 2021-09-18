import React, {Dispatch, SetStateAction, useContext, useState} from 'react';
import {StyleSheet} from 'react-native';
import {icons} from '@utils/icon';
import {DrawerNavigationProp} from '@react-navigation/drawer';

import SelectInput from '@components/SelectInput';

interface IBankInput {
  color: string;
  setSelectedIcon: Dispatch<SetStateAction<string>>;
  setColor: Dispatch<SetStateAction<string>>;
  selectedIcon: string;
  toggleColorPicker: () => void;
  navigation: DrawerNavigationProp<RootDrawerNavigation>;
}

import * as S from '../styles.inputs';

import {UserContext} from '@contexts/UserContext';

const BankInput = ({
  color,
  selectedIcon,
  navigation,
  setColor,
  toggleColorPicker,
  setSelectedIcon,
}: IBankInput) => {
  const [name, setName] = useState('');
  const [agency, setAgency] = useState('');
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');

  const {handleAddPassword} = useContext(UserContext);

  function addPassword() {
    if (
      name.length >= 3 &&
      agency.length >= 3 &&
      password.length >= 1 &&
      account.length >= 3
    ) {
      handleAddPassword({
        name,
        enter_value: agency,
        second_value: account,
        password_value: password,
        background: color,
        categorie: 'Banco',
        favorite: false,
        icon: selectedIcon,
      });

      navigation.navigate('Home');

      setName('');
      setAgency('');
      setAccount('');
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
        value={agency}
        keyboardType="numeric"
        maxLength={5}
        onChangeText={setAgency}
        placeholder="Agencia"
      />
      <S.Input
        style={styles.shadow}
        value={account}
        keyboardType="numeric"
        onChangeText={setAccount}
        placeholder="Conta"
      />
      <S.Input
        style={styles.shadow}
        value={password}
        onChangeText={setPassword}
        placeholder="Senha"
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

export default BankInput;
