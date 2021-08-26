import React, {useState, createContext, ReactNode} from 'react';
import {v4 as uuid} from 'uuid';

import {removeUser, saveUser} from '@utils/storage';

interface IUserContext {
  user: User;
  load: (user: User) => void;
  handleSetUser: (name_value: string, biometry_value: boolean) => void;
  handleRemoveUser: () => void;
}

interface IUserProvider {
  children: ReactNode;
}

export const UserContext = createContext({} as IUserContext);

const UserProvider = ({children}: IUserProvider) => {
  const [user, setUser] = useState<User>();

  async function handleSetUser(name_value: string, biometry_value: boolean) {
    const id = uuid();
    setUser({name: name_value, biometry: biometry_value, id});
    await saveUser({name: name_value, biometry: biometry_value, id});
  }

  function load(local_user: User) {
    setUser(local_user);
  }

  function handleRemoveUser() {
    setUser(null);
    removeUser();
  }

  return (
    <UserContext.Provider value={{user, load, handleSetUser, handleRemoveUser}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
