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
  margin-left: 3.5rem;

  .content_title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 5.6rem 0 2.7rem 0;

    h2 {
      font-size: 3.2rem;
      font-style: normal;
      font-weight: 600;
      line-height: 140%;
      font-family: ${({ theme }) => theme.FONTS.FONTS_REQUEST_TITLE};
      color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_REQUEST_TITLE : theme.COLORS.TT_REQUEST_TITLE};
    }
  }

  .content_requests {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1.6rem;

    .requests {
      display: flex;
      justify-content: flex-start;

      img {
        width: 7rem;
        height: 7rem;
        margin-right: 1.3rem;
      }

      .request_title {
        display: flex;
        align-items: flex-start;
        flex-direction: column;

        .request_description {
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: .5rem;

          span {
            font-size: 1.6rem;
            font-weight: 500;
            line-height: 3.2rem;
            font-family: ${({ theme }) => theme.FONTS.FONTS_REQUEST_SUBTITLE};
            color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_REQUEST_SUBTITLE : theme.COLORS.TT_REQUEST_SUBTITLE};
          }

          p {
            font-size: 2rem;
            font-weight: 500;
            line-height: 3.2rem;
            font-family: ${({ theme }) => theme.FONTS.FONTS_REQUEST_SUBTITLE};
            color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_REQUEST_SUBTITLE : theme.COLORS.TT_REQUEST_SUBTITLE};
          }

          small {
            font-size: 1.2rem;
            font-weight: 500;
            line-height: 3.2rem;
            font-family: ${({ theme }) => theme.FONTS.FONTS_REQUEST_SUBTITLE};
            color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_REQUEST_SUBTITLE : theme.COLORS.TT_REQUEST_SUBTITLE};
          }
        }

        button {
          font-size: 1.2rem;
          font-weight: 400;
          line-height: 1.9rem;
          height: 4.8rem;
          font-family: ${({ theme }) => theme.FONTS.FONTS_REQUEST_ACTION};
          color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_REQUEST_ACTION : theme.COLORS.TT_REQUEST_ACTION};
          margin-top: -1.8rem;
        }
      }
    }
  }

  .request_total {
      display: flex;
      margin-bottom: 4.7rem;

      span {
        font-size: 2rem;
        font-weight: 500;
        line-height: 3.2rem;
        font-family: ${({ theme }) => theme.FONTS.FONTS_REQUEST_SUBTITLE};
        color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_REQUEST_SUBTITLE : theme.COLORS.TT_REQUEST_SUBTITLE};
      }
    }

  .btn_next {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin: 0 3.7rem 5.8rem 0;

      button {
        width: 21.6rem;
        height: 4.8rem;
      }
    }
`