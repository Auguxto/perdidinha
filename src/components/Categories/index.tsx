import React from 'react';
import {StyleSheet} from 'react-native';

import * as S from './styled.categories';

import {categories} from '@utils/categorie';

interface ICategories {
  categorie: string;
  setCategorie: (categorie: Categories) => void;
}

const Categories = ({setCategorie}: ICategories) => {
  const renderItem = ({item}) => (
    <S.Button onPress={() => setCategorie(item.name)} style={styles.shadow}>
      <S.ButtonText>{item.name}</S.ButtonText>
    </S.Button>
  );

  return (
    <S.CategoriesContainer>
      <S.Title>Categorias</S.Title>
      <S.CategoriesButtons
        showsHorizontalScrollIndicator={false}
        horizontal
        data={categories}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </S.CategoriesContainer>
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
