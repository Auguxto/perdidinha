import React, {useState} from 'react';
import {StyleSheet} from 'react-native';

import {
  AddPasswordContainer,
  Input,
  InputsContainer,
} from './styles.addpassword';

import Header from '@components/Header';
import SelectInput from '@components/SelectInput';

import {categories} from '@utils/categorie';

const AddPassword = ({navigation}) => {
  const [selected, setSelected] = useState('Categoria');

  return (
    <AddPasswordContainer>
      <Header navigation={navigation} />
      <InputsContainer>
        <Input style={styles.shadow} placeholder="Nome" />
        <SelectInput
          onSelect={setSelected}
          data={categories}
          selected={selected}
        />
        <Input
          style={styles.shadow}
          placeholder="Email / Username / Telefone"
        />
        <Input style={styles.shadow} placeholder="Senha" />
      </InputsContainer>
    </AddPasswordContainer>
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

export default AddPassword;
