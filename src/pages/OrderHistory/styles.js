import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 11.4rem 1fr;
  grid-template-areas:
  "Header"
  "Main"
  "Footer";
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.title === 'light' ? theme.BACKGROUND.BG_PAGE : theme.BACKGROUND.BG_PAGE};
`

export const Content = styled.main`
  grid-area: Main;
  max-width: 100%;
  overflow-y: scroll;

  .container_main {
    display: flex;
    flex-direction: column;
    gap: 1.7rem;
    margin: 0 3.5rem 5rem 3.5rem;

    .content_title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 5.6rem 0 1.7rem 0;

    h2 {
      font-size: 3.2rem;
      font-style: normal;
      font-weight: 600;
      line-height: 140%;
      font-family: ${({ theme }) => theme.FONTS.FONTS_REQUEST_TITLE};
      color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_REQUEST_TITLE : theme.COLORS.TT_REQUEST_TITLE};
    }
  }

  .content_orders {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1.6rem;
    border: .2rem solid ${({ theme }) => theme.title === 'light' ? theme.COLORS.BORDER_ORDERS : theme.COLORS.BORDER_ORDERS};
    border-radius: .8rem;

    .orders {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 1.6rem;
      padding: 1.6rem 2rem;

      button {
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 1.9rem;
        font-family: ${({ theme }) => theme.FONTS.FONTS_REQUEST_ACTION};
        color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_REQUEST_ACTION : theme.COLORS.TT_REQUEST_ACTION};
      }

      .orders_title {
        display: flex;
        justify-content: space-between;
        gap: 3.1rem;

        span {
          display: flex;
          align-items: center;
          gap: .8rem;

          font-size: 1.4rem;
          font-weight: 400;
          line-height: 2.24rem;
          font-family: ${({ theme }) => theme.FONTS.FONTS_ORDERS_TITLE};
          color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_ORDERS_TITLE : theme.COLORS.TT_ORDERS_TITLE};

          svg {
            circle {
              fill: ${({ theme }) => theme.title === 'light' ? theme.COLORS.SVG_ORDERS_PENDING : theme.COLORS.SVG_ORDERS_PENDING};
            }
          }
        }
      }

      .orders_description {
        p {
          font-size: 1.4rem;
          font-weight: 400;
          line-height: 2.24rem;
          font-family: ${({ theme }) => theme.FONTS.FONTS_ORDERS_SUBTITLE};
          color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_ORDERS_SUBTITLE : theme.COLORS.TT_ORDERS_SUBTITLE};
      }
      }
    }
  }
  }
`