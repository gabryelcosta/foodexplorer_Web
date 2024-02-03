import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  display: inline-block;
  background: ${({ theme }) => theme.title === 'light' ? theme.BACKGROUND.BG_PAGE : theme.BACKGROUND.BG_PAGE};

  @media(max-width: 320px){
  width: 100vw;
  max-height: 100vh;
  font-size: 1rem
}
`

export const Header = styled.div `
  width: 100vw;
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
      color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_DEFAULT : theme.COLORS.TT_DEFAULT};
      font-family: ${({ theme }) => theme.FONTS.FONTS_LOGIN_TITLE};
    }
  }

  @media(max-width: 320px){
    width: 100vw;
    height: 2rem;
    margin: 12.5rem auto 7rem;

    > div {
      display: flex;
      gap: 1rem;
      justify-content: center;
      align-items: center;

      .svg_poligon {
        width: 2rem;
        height: 2rem;

      > h1 {
        color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_DEFAULT : theme.COLORS.TT_DEFAULT};
        font-family: ${({ theme }) => theme.FONTS.FONTS_LOGIN_TITLE};
      }
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

    label {
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 400;
      line-height: 100%;
      font-family: ${({ theme }) => theme.FONTS.FONTS_LOGIN_TITLE};
      color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_LOGIN_TITLE : theme.COLORS.TT_LOGIN_TITLE};
      > p {
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
    height: 4.5rem;
  }

  @media(max-width: 320px){
  .inputs {
    width: 25rem;
    gap: 2rem;

    label {
      font-size: 1.2rem;
      font-style: normal;
      font-weight: 400;
      line-height: 100%;
      font-family: ${({ theme }) => theme.FONTS.FONTS_LOGIN_TITLE};
      color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_LOGIN_TITLE : theme.COLORS.TT_LOGIN_TITLE};
      > p {
        margin-bottom: .5rem;
      }
    }

    ::-webkit-input-placeholder {
      font-size: 1.2rem;
      font-weight: 500;
      opacity: 0.6;
      color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_PLACEHOLDER : theme.COLORS.TT_PLACEHOLDER};
  }
}

  .btn_create {
    width: 25rem;
    height: 4rem;
  }
}
`