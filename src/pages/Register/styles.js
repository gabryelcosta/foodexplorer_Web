import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: inline-block;
  background: ${({ theme }) => theme.title === 'light' ? theme.BACKGROUND.BG_PAGE : theme.BACKGROUND.BG_PAGE};

  @media(min-width: ${DEVICE_BREAKPOINTS.LG}){
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const Header = styled.div `
  height: 4rem;
  margin: 15rem auto 7rem;


  > div {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;

    .svg_poligon {
      width: 4rem;
      height: 4rem;

      path {
        fill: ${({ theme }) => theme.title === 'light' ? theme.COLORS.SVG_POLYGON_HEADER : theme.COLORS.SVG_POLYGON_HEADER};
      }
    }

    > h1 {
      font-size: 3.5rem;
      font-weight: 700;
      line-height: 4.3rem;
      color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_DEFAULT : theme.COLORS.TT_DEFAULT};
      font-family: ${({ theme }) => theme.FONTS.FONTS_LOGIN_TITLE};
    }
  }

  @media(min-width: ${DEVICE_BREAKPOINTS.MD}){
    div {
      gap: 2rem;

      .svg_poligon {
        width: 5rem;
        height: 5rem;
      }

      h1 {
        font-size: 4.2rem;
        line-height: 5rem;
      }
    }
  }
`
export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: 0 auto;
  align-items: center;
  justify-content: center;

    .inputs {
      display: flex;
      flex-direction: column;
      width: 30rem;
      gap: 3rem;

      .inputs_title_desktop {
        display: none;
      }

      label {
        > p {
          font-size: 1.6rem;
          font-style: normal;
          font-weight: 400;
          line-height: 100%;
          font-family: ${({ theme }) => theme.FONTS.FONTS_LOGIN_TITLE};
          color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_LOGIN_TITLE : theme.COLORS.TT_LOGIN_TITLE};
          margin-bottom: .8rem;
        }
      }

      ::-webkit-input-placeholder {
        font-size: 1.6rem;
        font-weight: 500;
        opacity: 0.6;
        color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_PLACEHOLDER : theme.COLORS.TT_PLACEHOLDER};
    }
  }

  .btn_create {
    width: 30rem;
    height: 4.8rem;
  }

  @media(min-width: ${DEVICE_BREAKPOINTS.MD}){
    width: 47rem;
    height: 63rem;
    gap: 3.2rem;
    border-radius: 1.6rem;
    padding: 6.4rem;
    background: ${({ theme }) => theme.title === 'light' ? theme.BACKGROUND.BG_LOGIN_DESKTOP : theme.BACKGROUND.BG_LOGIN_DESKTOP};
  .inputs {
    width: 100%;
    .inputs_title_desktop {
      display: flex;
      justify-content: center;

      h2 {
        font-size: 3.2rem;
        font-weight: 500;
        line-height: 4.48rem;
        font-family: ${({ theme }) => theme.FONTS.FONTS_LOGIN_TITLE_DESKTOP};
        color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_LOGIN_TITLE_DESKTOP : theme.COLORS.TT_LOGIN_TITLE_DESKTOP};
      }
    }

    label {
      div {
        width: 34.8rem;
        border-radius: .5rem;
        border: .1rem solid ${({ theme }) => theme.title === 'light' ? theme.COLORS.BORDER_LOGIN_DESKTOP : theme.COLORS.BORDER_LOGIN_DESKTOP};
      }
      > p {
        font-size: 1.6rem;
      }
    }

    ::-webkit-input-placeholder {
      font-size: 1.6rem;
    }
  }

  .btn_create {
    width: 34.8rem;
    height: 4.8rem;
  }
}
`