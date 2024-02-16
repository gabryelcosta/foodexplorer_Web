import { useEffect, useRef, useContext } from 'react';
import { Container, ButtonDropDown } from './styles';
import { DropdownContent } from '../DropdownContent';
import { MenuContext } from '../../context/MenuContext';
import { UserAvatar } from '../UserAvatar';

export function ProfileImagem() {
  const dropdownRef = useRef(null);
  const { dropdownIsActive, toggleDropdown } = useContext(MenuContext);

  const handleProfileClick = (event) => {
    event.stopPropagation();
    toggleDropdown();
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      if (dropdownIsActive) {
        setTimeout(() => {
          toggleDropdown();
        }, 200); // Ajuste o atraso conforme necessário
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
    <Container onClick={handleProfileClick}>
      <UserAvatar />
      <ButtonDropDown isOpen={dropdownIsActive} ref={dropdownRef} onClick={(e) => e.stopPropagation()}>
        <DropdownContent />
      </ButtonDropDown>
    </Container>
  );
}