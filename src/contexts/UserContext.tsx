import React, {useState, createContext, ReactNode} from 'react';
import {v4 as uuid} from 'uuid';

import {
  favoritePassword,
  loadPasswords,
  removePassword,
  removeUser,
  savePassword,
  saveUser,
} from '@utils/storage';

interface IUserContext {
  user: User;
  passwords: Password[];
  load: (user: User) => void;
  handleSetUser: (name_value: string, biometry_value: boolean) => void;
  handleRemoveUser: () => void;
  handleAddPassword: (password: Password) => void;
  handleRemovePassword: (id: string) => void;
  handleFavoritePassword: (id: string) => void;
}

interface IUserProvider {
  children: ReactNode;
}

export const UserContext = createContext({} as IUserContext);

const UserProvider = ({children}: IUserProvider) => {
  const [user, setUser] = useState<User>();
  const [passwords, setPasswords] = useState<Password[]>();

  async function handleSetUser(name_value: string, biometry_value: boolean) {
    const id = uuid();
    setUser({name: name_value, biometry: biometry_value, id});
    await saveUser({name: name_value, biometry: biometry_value, id});
  }

  async function load(local_user: User) {
    setUser(local_user);
    const local_passwords = await loadPasswords();
    setPasswords(local_passwords);
  }

  function handleRemoveUser() {
    setUser(null);
    removeUser();
  }

  async function handleAddPassword({
    name,
    second_value,
    password_value,
    categorie,
    enter_value,
    background,
    favorite,
    icon,
  }: Password) {
    const id = uuid();

    const new_passwords = await savePassword({
      name,
      second_value,
      password_value,
      categorie,
      enter_value,
      background,
      favorite,
      icon,
      id,
    });

    setPasswords(new_passwords);
  }

  async function handleRemovePassword(id: string) {
    const new_passwords = await removePassword(id);
    setPasswords(new_passwords);
  }

  async function handleFavoritePassword(id: string) {
    const new_passwords = await favoritePassword(id);
    setPasswords(new_passwords);
  }

  return (
    <UserContext.Provider
      value={{
        user,
        passwords,
        load,
        handleSetUser,
        handleRemoveUser,
        handleAddPassword,
        handleRemovePassword,
        handleFavoritePassword,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
