import React, {useState, useEffect, createContext, ReactNode} from 'react';
import {v4 as uuid} from 'uuid';

import {getUser, saveUser} from '@utils/storage';

interface IUserContext {
  user: User;
  handleSetUser: (name_value: string, biometry_value: boolean) => void;
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
    await saveUser(user);
  }

  useEffect(() => {
    (async () => {
      let user_storage = await getUser();
      if (user_storage) {
        setUser(user_storage);
      } else {
        console.log('No user found on storage');
      }
    })();
  }, []);

  return (
    <UserContext.Provider value={{user, handleSetUser}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
