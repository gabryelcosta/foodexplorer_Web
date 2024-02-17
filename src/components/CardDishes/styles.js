import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const CardContainer = styled.section`
  margin-top: 6rem;

  .card_refeicoes, .card_pratos_principais, .card_pratos_sobremesa {
  overflow: hidden; // esconde qualquer conteúdo que ultrapasse o contêiner
  margin: 0rem 2rem 2.3rem 2rem;

  > h2 {
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    font-family: ${({ theme }) => theme.FONTS.FONTS_CARD_TITLE};
    color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_CARD_TITLE : theme.COLORS.TT_CARD_TITLE};
    margin-bottom: 2.4rem;
  }

  .splide__list {
    display: flex;
    gap: 1.6rem;
  }

  .splide__slide {
    width: 21rem !important;
    height: 25rem !important;
    background-color: ${({ theme }) => theme.title === 'light' ? theme.BACKGROUND.BG_CARD : theme.BACKGROUND.BG_CARD};
    border: .1rem solid ${({ theme }) => theme.title === 'light' ? theme.BACKGROUND.BORDER_CARD : theme.BACKGROUND.BORDER_CARD};
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

      .svg_pencil {
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
        font-family: ${({ theme }) => theme.FONTS.FONTS_CARD_TITLE};
        font-size: 1.4rem;
        font-weight: 500;
        font-style: normal;
        line-height: 2.4rem;
        color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_CARD_TITLE : theme.COLORS.TT_CARD_TITLE};
      }

      p {
        font-family: ${({ theme }) => theme.FONTS.FONTS_CARD_MONEY};
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_CARD_MONEY : theme.COLORS.TT_CARD_MONEY};
      }

      .btn_inclusion {
        width: 16rem;
        height: 3rem;

        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .card_description_admin {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 3rem auto;
      gap: 1rem;

      > img {
        border-radius: 5rem;
        width: 8rem;
        height: 8rem;
      }

      h3 {
        font-family: ${({ theme }) => theme.FONTS.FONTS_CARD_TITLE};
        font-size: 1.4rem;
        font-weight: 500;
        font-style: normal;
        line-height: 2.4rem;
        color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_CARD_TITLE : theme.COLORS.TT_CARD_TITLE};
      }

      p {
        font-family: ${({ theme }) => theme.FONTS.FONTS_CARD_MONEY};
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_CARD_MONEY : theme.COLORS.TT_CARD_MONEY};
      }
  }
}

@media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
  .card_refeicoes, .card_pratos_principais, .card_pratos_sobremesa {
    width: calc(100vw - 13rem);
    margin: 6.3rem auto;

    > h2 {
      font-size: 3.2rem;
      line-height: 4.5rem;
    }

    .splide__slide:not(.is-active) {
      opacity: 0.5;  // ajuste este valor conforme necessário
    }

    .splide__list {
      gap: 2.7rem;
    }

    .splide__slide {
      width: 30.4rem !important;
      height: 46.2rem !important;

        > .card {
          padding: 6.65rem;

          .svg_heart {
            position: absolute;
            width: 2.4rem;
            height: 2.4rem;
            right: 2rem;
            top: 2rem;
          }

          .svg_pencil {
            position: absolute;
            width: 2.4rem;
            height: 2.4rem;
            right: 2rem;
            top: 2rem;
          }
        }

        .card_description {
          gap: 1.5rem;
          > img {
            width: 17.6rem;
            height: 17.6rem;
          }
        }

        .card_description_admin {
          gap: 1.5rem;

          > img {
            width: 17.6rem;
            height: 17.6rem;
          }

          h3 {
            font-size: 2.4rem;
            line-height: 3.36rem;
          }
        }
    }
  }
}

@media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
  .card_refeicoes, .card_pratos_principais, .card_pratos_sobremesa {
    width: calc(100vw - 18rem);
  }
}

@media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
  .card_refeicoes, .card_pratos_principais, .card_pratos_sobremesa {
    width: calc(100vw - 22rem);
  }
}
`