import React, {useReducer, useState} from 'react';
import {StyleSheet} from 'react-native';

import {
  AddPasswordContainer,
  ColorInput,
  ColorInputText,
  ColorPreview,
  Input,
  InputsContainer,
  SelectContainer,
} from './styles.addpassword';

import Header from '@components/Header';
import SelectInput from '@components/SelectInput';

import {inputCategories} from '@utils/categorie';
import {icons} from '@utils/icon';
import ColorPicker from '@components/ColorPicker';

const AddPassword = ({navigation}) => {
  const [selected, setSelected] = useState('Categoria');
  const [selectedIcon, setSelectedIcon] = useState('Icone');
  const [color, setColor] = useState('#FFFFFF');
  const [openColorPicker, toggleColorPicker] = useReducer(s => !s, false);

  return (
    <>
      {openColorPicker && (
        <ColorPicker
          onCloseButton={toggleColorPicker}
          color={color}
          onChangeColor={setColor}
        />
      )}
      <AddPasswordContainer>
        <Header navigation={navigation} />
        <InputsContainer>
          <SelectInput
            onSelect={setSelected}
            data={inputCategories}
            selected={selected}
          />
          <Input style={styles.shadow} placeholder="Nome" />
          <Input
            style={styles.shadow}
            placeholder="Email / Username / Telefone"
          />
          <Input style={styles.shadow} placeholder="Senha" />
          <SelectContainer>
            <SelectInput
              width="60%"
              selected={selectedIcon}
              data={icons}
              onSelect={setSelectedIcon}
            />
            <ColorInput onPress={toggleColorPicker} style={styles.shadow}>
              <ColorInputText>Cor</ColorInputText>
              <ColorPreview color={color} />
            </ColorInput>
          </SelectContainer>
        </InputsContainer>
      </AddPasswordContainer>
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

export default AddPassword;
