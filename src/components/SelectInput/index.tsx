import React, {useReducer} from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import useHeightLayout from '@hooks/useHeightLayout';

import {
  AnimatedContainer,
  Bottom,
  Header,
  SelectInputContainer,
  SelectItem,
  SelectItemName,
  SelectName,
  ToggleSelectOpen,
} from './styles.selectinput';

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
      <SelectItem
        onPress={() => {
          onSelect(item.name);
          toggleOpen();
        }}>
        <SelectItemName>{item.name}</SelectItemName>
      </SelectItem>
    );
  };

  return (
    <SelectInputContainer
      width={width}
      style={styles.shadow}
      animate={{height}}
      transition={{
        type: 'timing',
        duration: 350,
      }}>
      <AnimatedContainer onLayout={onLayout} open={open}>
        <Header>
          <SelectName>{selected}</SelectName>
          <ToggleSelectOpen onPress={toggleOpen}>
            <Icon
              name={open ? 'chevron-up' : 'chevron-down'}
              size={26}
              color="#be5deb"
            />
          </ToggleSelectOpen>
        </Header>
        <Bottom
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </AnimatedContainer>
    </SelectInputContainer>
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
