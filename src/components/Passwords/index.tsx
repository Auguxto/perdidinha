import React, {useContext} from 'react';

import * as S from './styles.passwords';

import Password from '@components/Password';

import {UserContext} from '@contexts/UserContext';

interface IPasswords {
  categorie: Categories;
}

const Passwords = ({categorie}: IPasswords) => {
  const {passwords} = useContext(UserContext);

  const renderItem = ({item}) => {
    return <Password {...item} />;
  };

  let selected =
    categorie === 'Favoritos'
      ? passwords.filter(password => password.favorite === true)
      : categorie === 'Todos'
      ? passwords
      : passwords.filter(password => password.categorie === categorie);

  return (
    <S.PasswordsContainer>
      <S.PasswordList
        showsVerticalScrollIndicator={false}
        data={selected}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </S.PasswordsContainer>
  );
};

export default Passwords;
