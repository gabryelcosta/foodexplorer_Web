import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-areas:
  "Header"
  "Main"
  "Footer";
  grid-template-rows: 11.4rem;
  max-width: 100vw;
  min-height: 100vh;
  background: ${({ theme }) => theme.title === 'light' ? theme.BACKGROUND.BGL_900 : theme.BACKGROUND.BG_PAGE};
`

export const Header = styled.header`
  grid-area: Header;
  width: 100%;
  height: 11.4rem;
  background: ${({ theme }) => theme.title === 'light' ? theme.BACKGROUND.BGL_900 : theme.BACKGROUND.BG_HEADER};

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 6rem 3rem 3rem 2.5rem;

    .container_title {
      display: flex;
      gap: .8rem;
      align-items: center;
      justify-content: center;

      > h1 {
        font-size: 2.5rem;
        font-weight: 700;
        font-style: normal;
        line-height: normal;
        font-family: ${({ theme }) => theme.FONTS_HEADER_TITLE};
        color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.BGL_900 : theme.COLORS.TT_HEADER_TITLE};
      }
    }
  }
`

export const Content = styled.main`
  grid-area: Main;
  max-width: 100vw;
  min-height: 100vh;
  .banner {

    width: 35rem;
    height: 12rem;
    margin: 4.4rem auto;
    display: flex;
    background: ${({ theme }) => theme.title === 'light' ? theme.BACKGROUND.BGL_900 : theme.BACKGROUND.BG_BANNER};

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
      margin: 3.5rem .8rem 0 -2.5rem;

      > h2 {
        font-size: 1.8rem;
        font-style: normal;
        font-weight: 600;
        line-height: 140%;
        font-family: ${({ theme }) => theme.FONTS_BANNER_TITLE};
        color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.BGL_900 : theme.COLORS.TT_BANNER_TITLE};
      }

      > p {
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;
        font-family: ${({ theme }) => theme.FONTS_BANNER_TITLE};
        color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.BGL_900 : theme.COLORS.TT_BANNER_TITLE};
      }
    }
  }

  .card_refeicoes {
  overflow: hidden; // esconde qualquer conteúdo que ultrapasse o contêiner
  margin: 6rem 2rem 2.3rem 2rem;

  > h2 {
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    font-family: ${({ theme }) => theme.FONTS_CARD_TITLE};
    color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.BGL_900 : theme.COLORS.TT_CARD_TITLE};
    margin-bottom: 2.4rem;
  }

  .splide__list {
    display: flex;
    gap: 1.6rem;
  }

  .splide__slide {
    width: 21rem;
    height: 25rem;
    background-color: ${({ theme }) => theme.title === 'light' ? theme.BACKGROUND.BGL_900 : theme.BACKGROUND.BG_CARD};
    border: .1rem solid ${({ theme }) => theme.title === 'light' ? theme.BACKGROUND.BGL_900 : theme.BACKGROUND.BORDER_CARD};
    border-radius: .8rem;

    > .card {
      padding: 2.4rem;

      .svg_heart {
        position: absolute;
        width: 2.4rem;
        height: 2.2rem;
        right: 1rem;
        top: 1rem;
      }
    }

    .card_description {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;

      > img {
        border-radius: 5rem;
        width: 8rem;
        height: 8rem;
      }

      h3 {
        font-family: ${({ theme }) => theme.FONTS_CARD_TITLE};
        font-size: 1.4rem;
        font-weight: 500;
        font-style: normal;
        line-height: 2.4rem;
        color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.BGL_900 : theme.COLORS.TT_CARD_TITLE};
      }

      p {
        font-family: ${({ theme }) => theme.FONTS_CARD_MONEY};
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.BGL_900 : theme.COLORS.TT_CARD_MONEY};
      }

      .btn_inclusion {
        width: 16rem;
        height: 3rem;

        display: flex;
        justify-content: center;
        align-items: center;
      }

      .card_amount {
          input {
          font-family: ${({ theme }) => theme.FONTS_CARD_STEPPER};
          font-size: 1.6rem;
          font-style: normal;
          font-weight: 400;
          line-height: 100%;

          background: none;
          border: none;
          color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.GREEN_900 : theme.COLORS.TT_CARD_STEPPER};

          width: 2rem;
          height: 2rem;


          &::-webkit-inner-spin-button,
          &::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          &[type='number'] {
            -moz-appearance: textfield;
          }
        }

        ::-webkit-input-placeholder {
          font-family: ${({ theme }) => theme.FONTS_CARD_STEPPER};
          font-size: 1.6rem;
          font-style: normal;
          font-weight: 400;
          line-height: 100%;
          color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.GREEN_900 : theme.COLORS.TT_CARD_STEPPER};
        }
      }
    }
  }
}

.card_pratos_principais, .card_pratos_principais_second {
  overflow: hidden; // esconde qualquer conteúdo que ultrapasse o contêiner
  margin: 0rem 2rem 2.3rem 2rem;

  > h2 {
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    font-family: ${({ theme }) => theme.FONTS_CARD_TITLE};
    color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.BGL_900 : theme.COLORS.TT_CARD_TITLE};
    margin-bottom: 2.4rem;
  }

  .splide__list {
    display: flex;
    gap: 1.6rem;
  }

  .splide__slide {
    width: 21rem;
    height: 25rem;
    background-color: ${({ theme }) => theme.title === 'light' ? theme.BACKGROUND.BGL_900 : theme.BACKGROUND.BG_CARD};
    border: .1rem solid ${({ theme }) => theme.title === 'light' ? theme.BACKGROUND.BGL_900 : theme.BACKGROUND.BORDER_CARD};
    border-radius: .8rem;

    > .card {
      padding: 2.4rem;

      .svg_heart {
        position: absolute;
        width: 2.4rem;
        height: 2.2rem;
        right: 1rem;
        top: 1rem;
      }
    }

    .card_description {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;

      > img {
        border-radius: 5rem;
        width: 8rem;
        height: 8rem;
      }

      h3 {
        font-family: ${({ theme }) => theme.FONTS_CARD_TITLE};
        font-size: 1.4rem;
        font-weight: 500;
        font-style: normal;
        line-height: 2.4rem;
        color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.BGL_900 : theme.COLORS.TT_CARD_TITLE};
      }

      p {
        font-family: ${({ theme }) => theme.FONTS_CARD_MONEY};
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.BGL_900 : theme.COLORS.TT_CARD_MONEY};
      }

      .btn_inclusion {
        width: 16rem;
        height: 3rem;

        display: flex;
        justify-content: center;
        align-items: center;
      }

      .card_amount {
          input {
          font-family: ${({ theme }) => theme.FONTS_CARD_STEPPER};
          font-size: 1.6rem;
          font-style: normal;
          font-weight: 400;
          line-height: 100%;

          background: none;
          border: none;
          color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.GREEN_900 : theme.COLORS.TT_CARD_STEPPER};

          width: 2rem;
          height: 2rem;


          &::-webkit-inner-spin-button,
          &::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          &[type='number'] {
            -moz-appearance: textfield;
          }
        }

        ::-webkit-input-placeholder {
          font-family: ${({ theme }) => theme.FONTS_CARD_STEPPER};
          font-size: 1.6rem;
          font-style: normal;
          font-weight: 400;
          line-height: 100%;
          color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.GREEN_900 : theme.COLORS.TT_CARD_STEPPER};
        }
      }
    }
  }
}
`

export const Footer = styled.footer`
  grid-area: Footer;
  background: ${({ theme }) => theme.title === 'light' ? theme.BACKGROUND.BGL_900 : theme.BACKGROUND.BG_FOOTER};
  max-width: 100vw;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;

    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: .6rem;
      margin-right: .8rem;

      h4 {
        font-family: ${({ theme }) => theme.FONTS_FOOTER_TITLE};
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.BGL_900 : theme.COLORS.TT_FOOTER_TITLE};
      }
      svg {
        width: 2.2rem;
        height: 2rem;

        > path {
          fill: ${({ theme }) => theme.title === 'light' ? theme.COLORS.BGL_900 : theme.COLORS.SVG_FOOTER_TITLE};
        }
      }
    }

    p {
        font-family: ${({ theme }) => theme.FONTS_FOOTER_SUBTITLE};
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.BGL_900 : theme.COLORS.TT_FOOTER_SUBTITLE};
      }
  }
`