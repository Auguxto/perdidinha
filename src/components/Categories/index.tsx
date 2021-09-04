import React from 'react';
import {StyleSheet} from 'react-native';

import {categories} from '@utils/categorie';

import {
  Button,
  ButtonText,
  CategoriesButtons,
  CategoriesContainer,
  Title,
} from './styled.categories';

interface ICategories {
  categorie: string;
  setCategorie: (categorie: Categories) => void;
}

const Categories = ({setCategorie}: ICategories) => {
  const renderItem = ({item}) => (
    <Button onPress={() => setCategorie(item.name)} style={styles.shadow}>
      <ButtonText>{item.name}</ButtonText>
    </Button>
  );

  return (
    <CategoriesContainer>
      <Title>Categorias</Title>
      <CategoriesButtons
        showsHorizontalScrollIndicator={false}
        horizontal
        data={categories}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </CategoriesContainer>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default Categories;
