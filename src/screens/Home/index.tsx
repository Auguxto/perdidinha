import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {StyleSheet} from 'react-native';

import {AddButton, HomeContainer} from './styles.home';

import Header from '@components/Header';
import Categories from '@components/Categories';
import Passwords from '@components/Passwords';

const Home = ({navigation}) => {
  const [categorie, setCategorie] = useState<Categories>('Todos');

  return (
    <HomeContainer>
      <Header navigation={navigation} />
      <Categories categorie={categorie} setCategorie={setCategorie} />
      <Passwords categorie={categorie} />
      <AddButton
        onPress={() => navigation.navigate('AddPassword')}
        style={styles.shadow}>
        <Icon name="plus" size={25} color="#FFFFFF" />
      </AddButton>
    </HomeContainer>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 5,
  },
});

export default Home;
