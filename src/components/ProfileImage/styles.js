import styled from "styled-components";

export const Container = styled.div`
  position: relative; // Adicione esta linha
  border: none;
  background: transparent;
  max-width: 100vw;
`

export const ButtonDropDown = styled.div`
  position: absolute;
  width: 22rem;
  right: 0;
  border-radius:.5rem;
  border: ${({ theme, isOpen }) => isOpen ? `.1rem solid ${theme.title === 'light' ? theme.COLORS.BORDER_MENU_NAV : theme.COLORS.BORDER_MENU_NAV}` : 'none'};
  background: ${({ theme }) => theme.title === 'light' ? theme.BACKGROUND.BG_MENU : theme.BACKGROUND.BG_MENU};
`