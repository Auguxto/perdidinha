import React, {useState, useEffect, createContext, ReactNode} from 'react';

import {getFromStorage} from '@utils/storage';

interface IUserContext extends User {
  handleSetName: (name_value: string) => void;
}

interface IUserProvider {
  children: ReactNode;
}

export const UserContext = createContext({} as IUserContext);

const UserProvider = ({children}: IUserProvider) => {
  const [name, setName] = useState<string>('Victor');

  function handleSetName(name_value: string) {
    setName(name_value);
  }

  useEffect(() => {
    (async () => {
      let name_storage = await getFromStorage(name);
      if (name_storage) {
        setName(name_storage);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UserContext.Provider value={{name, handleSetName}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
