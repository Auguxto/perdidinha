import React, {createContext, ReactNode, useState} from 'react';

interface IMenuContext {
  tabActive: string;
  setTabActive: (tab_name: string) => void;
}

interface IMenuProvider {
  children: ReactNode;
}

export const MenuContext = createContext({} as IMenuContext);

const MenuProvider = ({children}: IMenuProvider) => {
  const [tabActive, setTabActive] = useState<string>('');

  function handleSetTab(tab_name: string) {
    setTabActive(tab_name);
  }

  return (
    <MenuContext.Provider value={{tabActive, setTabActive: handleSetTab}}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
