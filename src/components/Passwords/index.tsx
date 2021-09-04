import React from 'react';

import {passwords} from '@utils/password';

import {PasswordsContainer, PasswordList} from './styles.passwords';

import Password from '@components/Password';

interface IPasswords {
  categorie: Categories;
}

const Passwords = ({categorie}: IPasswords) => {
  const renderItem = ({item}) => {
    return <Password {...item} />;
  };

  return (
    <PasswordsContainer>
      <PasswordList
        showsVerticalScrollIndicator={false}
        data={
          categorie === 'Todos'
            ? passwords
            : passwords.filter(password => password.categorie === categorie)
        }
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </PasswordsContainer>
  );
};

export default Passwords;
