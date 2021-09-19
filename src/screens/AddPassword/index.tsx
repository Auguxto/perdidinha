import React, {useReducer, useState} from 'react';

import * as S from './styles.addpassword';

import {inputCategories} from '@utils/categorie';

import Header from '@components/Header';
import SelectInput from '@components/SelectInput';
import ColorPicker from '@components/ColorPicker';
import CardInput from '@components/Inputs/Card';
import SiteInput from '@components/Inputs/Site';
import BankInput from '@components/Inputs/Bank';
import SocialInput from '@components/Inputs/Social';
import AppInput from '@components/Inputs/App';

const AddPassword = ({navigation}) => {
  const [selected, setSelected] = useState('Cartão');
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
      <S.AddPasswordContainer>
        <Header navigation={navigation} />
        <S.InputsContainer>
          <SelectInput
            onSelect={setSelected}
            data={inputCategories}
            selected={selected}
          />
          {selected === 'Categoria' && (
            <SiteInput
              setColor={setColor}
              navigation={navigation}
              color={color}
              selectedIcon={selectedIcon}
              setSelectedIcon={setSelectedIcon}
              toggleColorPicker={toggleColorPicker}
            />
          )}
          {selected === 'Cartão' && (
            <CardInput
              setColor={setColor}
              navigation={navigation}
              color={color}
              selectedIcon={selectedIcon}
              setSelectedIcon={setSelectedIcon}
              toggleColorPicker={toggleColorPicker}
            />
          )}
          {selected === 'Site' && (
            <SiteInput
              setColor={setColor}
              navigation={navigation}
              color={color}
              selectedIcon={selectedIcon}
              setSelectedIcon={setSelectedIcon}
              toggleColorPicker={toggleColorPicker}
            />
          )}
          {selected === 'Banco' && (
            <BankInput
              setColor={setColor}
              navigation={navigation}
              color={color}
              selectedIcon={selectedIcon}
              setSelectedIcon={setSelectedIcon}
              toggleColorPicker={toggleColorPicker}
            />
          )}
          {selected === 'Rede Social' && (
            <SocialInput
              navigation={navigation}
              setColor={setColor}
              color={color}
              selectedIcon={selectedIcon}
              setSelectedIcon={setSelectedIcon}
              toggleColorPicker={toggleColorPicker}
            />
          )}
          {selected === 'Aplicativo' && (
            <AppInput
              navigation={navigation}
              color={color}
              setColor={setColor}
              selectedIcon={selectedIcon}
              setSelectedIcon={setSelectedIcon}
              toggleColorPicker={toggleColorPicker}
            />
          )}
        </S.InputsContainer>
      </S.AddPasswordContainer>
    </>
  );
};

export default AddPassword;
