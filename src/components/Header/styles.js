import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.header`
  grid-area: Header;
  width: 100%;
  height: 11.4rem;
  background: ${({ theme }) => theme.title === 'light' ? theme.BACKGROUND.BG_HEADER : theme.BACKGROUND.BG_HEADER};

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 6rem 3rem 3rem 2.5rem;

    .btn_container {
      background: transparent;
      border: 0;

      p {
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 2.4rem;
        font-family: ${({ theme }) => theme.FONTS.FONTS_HEADER_TEXTBUTTON};
        color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_HEADER_TITLE : theme.COLORS.TT_HEADER_TITLE};

        background: ${({ theme }) => theme.title === 'light' ? theme.BACKGROUND.BT_DEFAULT : theme.BACKGROUND.BT_DEFAULT};
        border-radius: 8rem;
        width: 2rem;
        height: 2rem;

        position: absolute;
        margin: -.3rem 1.6rem 0;

        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .container_title {
      display: flex;
      gap: .8rem;
      align-items: center;
      justify-content: center;
      margin: 0 auto;

      > h1 {
        font-size: 2.5rem;
        font-weight: 700;
        font-style: normal;
        line-height: normal;
        font-family: ${({ theme }) => theme.FONTS.FONTS_HEADER_TITLE};
        color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_HEADER_TITLE : theme.COLORS.TT_HEADER_TITLE};
      }

      > p {
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 1.9rem;
        font-family: ${({ theme }) => theme.FONTS.FONTS_HEARDER_ADMIN};
        color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_ADMIN : theme.COLORS.TT_ADMIN};
      }
    }
  }
`

export const Menu = styled.button`
  border: none;
  background: none;
  display: none;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: block;
  }
`