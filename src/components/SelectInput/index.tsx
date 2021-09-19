import React, {useReducer} from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import * as S from './styles.selectinput';

import useHeightLayout from '@hooks/useHeightLayout';

interface ISelectInput {
  data: any[];
  selected: string;
  onSelect: (selected: string) => void;
  width?: string;
}

const SelectInput = ({data, selected, onSelect, width}: ISelectInput) => {
  const [{height}, onLayout] = useHeightLayout(65);

  const [open, toggleOpen] = useReducer(s => !s, false);

  const renderItem = ({item}) => {
    return (
      <S.SelectItem
        onPress={() => {
          onSelect(item.name);
          toggleOpen();
        }}>
        <S.SelectItemName>{item.name}</S.SelectItemName>
      </S.SelectItem>
    );
  };

  return (
    <S.SelectInputContainer
      width={width}
      style={styles.shadow}
      animate={{height}}
      transition={{
        type: 'timing',
        duration: 350,
      }}>
      <S.AnimatedContainer onLayout={onLayout} open={open}>
        <S.Header>
          <S.SelectName>{selected}</S.SelectName>
          <S.ToggleSelectOpen onPress={toggleOpen}>
            <Icon
              name={open ? 'chevron-up' : 'chevron-down'}
              size={26}
              color="#be5deb"
            />
          </S.ToggleSelectOpen>
        </S.Header>
        <S.Bottom
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </S.AnimatedContainer>
    </S.SelectInputContainer>
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

export default SelectInput;
