import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 11.4rem auto;
  grid-template-areas:
  "Header"
  "Main"
  "Footer";
  max-width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.title === 'light' ? theme.BACKGROUND.BG_PAGE : theme.BACKGROUND.BG_PAGE};
`

export const Content = styled.main`
  grid-area: Main;
  max-width: 100vw;
  overflow-y: scroll;

  .banner {
    width: 37.6rem;
    height: 12rem;
    margin: 4.4rem auto;
    display: flex;
    background: ${({ theme }) => theme.title === 'light' ? theme.BACKGROUND.BG_BANNER : theme.BACKGROUND.BG_BANNER};

    > img {
      width: 19rem;
      height: 14rem;
      position: relative;
      top: -2rem;
      left: -3rem;
    }

    > div {
      display: flex;
      flex-direction: column;
      gap: .3rem;
      margin: 3rem 1rem 0rem -3.5rem;

      > h2 {
        font-size: 1.8rem;
        font-style: normal;
        font-weight: 600;
        line-height: 140%;
        font-family: ${({ theme }) => theme.FONTS.FONTS_BANNER_TITLE};
        color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_BANNER_TITLE : theme.COLORS.TT_BANNER_TITLE};
      }

      > p {
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.68rem;
        font-family: ${({ theme }) => theme.FONTS.FONTS_BANNER_TITLE};
        color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_BANNER_TITLE : theme.COLORS.TT_BANNER_TITLE};
      }
    }
  }
`