// MenuContext.js
import { createContext, useState } from 'react';


export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [dropdownIsActive, setDropdownIsActive] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(prevState => !prevState);
  };

  const toggleDropdown = () => {
    setDropdownIsActive(prevState => !prevState);
  };

  return (
    <MenuContext.Provider value={{ menuIsOpen, toggleMenu, dropdownIsActive, toggleDropdown }}>
      {children}
    </MenuContext.Provider>
  );
};