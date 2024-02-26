import { useEffect, useRef, useContext } from 'react';
import { Content, ButtonDropDown } from './styles';
import { DropdownContent } from '../DropdownContent';
import { MenuContext } from '../../context/MenuContext';
import { UserAvatar } from '../UserAvatar';

export function ProfileImagem() {
  const dropdownRef = useRef(null);
  const { dropdownIsActive, toggleDropdown } = useContext(MenuContext);

  const handleProfileClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    toggleDropdown();
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      if (dropdownIsActive) {
        setTimeout(() => {
          event.preventDefault();
          toggleDropdown();
        }, 200);
      }
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [dropdownIsActive]);

  return (
      <Content onClick={handleProfileClick}>
        <UserAvatar />
        <ButtonDropDown isOpen={dropdownIsActive} ref={dropdownRef} onClick={(e) => {e.stopPropagation(); e.preventDefault();}}>
          <DropdownContent />
        </ButtonDropDown>
      </Content>
  );
}