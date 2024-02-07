import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.aside`
  display: grid;
  grid-template-areas:
  "Header"
  "Content"
  "Footer";
  grid-template-rows: 11.4rem 1fr;
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 1;

  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;

  background: ${({ theme }) => theme.title === 'light' ? theme.BACKGROUND.BG_MENU : theme.BACKGROUND.BG_MENU};

  &[data-menu-is-open="true"] {
    transform: translateX(0);
  }


`

export const Header = styled.header`
  grid-area: Header;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 11.4rem;
  background: ${({ theme }) => theme.title === 'light' ? theme.BACKGROUND.BG_MENU_HEADER : theme.BACKGROUND.BG_MENU_HEADER};
  padding: 5.6rem 2.8rem 2.4rem;

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    height: 100%;

  h2 {
    font-family: ${({ theme }) => theme.FONTS.FONTS_MENU_HEADER_TITLE};
    font-size: 2.1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_MENU_HEADER_TITLE : theme.COLORS.TT_MENU_HEADER_TITLE};
  }
}
`

export const Button = styled.button`
  border: none;
  background: transparent;

  svg {
    width: 1.8rem;
    height: 1.8rem;
  }
`

export const Content = styled.div`
  grid-area: Content;
  width: 100%;

  div {
    border-radius: .5rem;
    padding: 1.2rem 1.4rem;
    height: 4.8rem;
    width: 34.4rem;
    display: flex;
    align-items: center;
    margin: 3.6rem auto;
  }

  ::-webkit-input-placeholder {
      font-size: 1.6rem;
      font-weight: 500;
      opacity: 0.6;
      color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_PLACEHOLDER : theme.COLORS.TT_PLACEHOLDER};
  }

  .nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    margin: 0 auto;

    button {
      width: 100%;
      font-family: ${({ theme }) => theme.FONTS.FONTS_MENU_CONTENT_NAV};
      font-size: 2.4rem;
      line-height: 3.36rem;
      font-weight: 300;
      padding: 1rem;
      color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_MENU_HEADER_TITLE : theme.COLORS.TT_MENU_HEADER_TITLE};
      border-bottom: .1rem solid ${({ theme }) => theme.title === 'light' ? theme.COLORS.BORDER_MENU_NAV : theme.COLORS.BORDER_MENU_NAV};
    }
  }
`