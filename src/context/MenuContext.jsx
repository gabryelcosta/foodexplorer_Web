// MenuContext.js
import { createContext, useState } from 'react';

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(prevState => !prevState);
  };

  return (
    <MenuContext.Provider value={{ menuIsOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};