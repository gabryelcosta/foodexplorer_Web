import styled from "styled-components";

export const Content = styled.div`
  position: relative; // Adicione esta linha
  border: none;
  background: transparent;
  cursor: pointer;
  width: 5rem;
  z-index: 1000;
`

export const ButtonDropDown = styled.div`
  position: absolute;
  width: 25rem;
  right: 0;
  border-radius:.5rem;
  border: ${({ theme, isOpen }) => isOpen ? `.1rem solid ${theme.title === 'light' ? theme.COLORS.BORDER_MENU_NAV : theme.COLORS.BORDER_MENU_NAV}` : 'none'};
  background: ${({ theme }) => theme.title === 'light' ? theme.BACKGROUND.BG_MENU : theme.BACKGROUND.BG_MENU};

`