import styled from "styled-components";

export const CardContainer = styled.section`
  margin-top: 6rem;

  .card_refeicoes, .card_pratos_principais, .card_pratos_sobremesa {
  overflow: hidden; // esconde qualquer conteúdo que ultrapasse o contêiner
  margin: 0rem 2rem 2.3rem 2rem;

  > h2 {
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 600;
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
    width: 21rem;
    height: 25rem;
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
}
`