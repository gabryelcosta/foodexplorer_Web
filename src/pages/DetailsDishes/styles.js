import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 11.4rem 1fr;
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
  width: 100%;
  overflow-y: scroll;

  .nav_text {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 3.4rem;
    margin: 3.7rem 0rem 0rem 5.6rem;

    button {
      font-size: 2.4rem;
      font-weight: 500;
      line-height: 33.6rem;
      font-family: ${({ theme }) => theme.FONTS.FONTS_DETALHES_NAV_TITLE};
      color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_DETALHES_NAV_TITLE : theme.COLORS.TT_DETALHES_NAV_TITLE};

        svg {
        width: 3.2rem;
        height: 3.2rem;
      }
    }
  }

  .details_content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 31.6rem;

    margin: 0 auto;

    .details_image{
      margin: 1.6rem;
      width: 26.4rem;
      height: 26.4rem;
    }

    .details_text {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2.4rem;

      h2 {
        font-size: 2.7rem;
        font-weight: 500;
        line-height: 3.7rem;
        font-family: ${({ theme }) => theme.FONTS.FONTS_DETALHES_TEXT_TITLE};
        color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_DETALHES_TEXT_TITLE : theme.COLORS.TT_DETALHES_TEXT_TITLE};
      }

      p {
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 2.2rem;
        text-align: center;
        font-family: ${({ theme }) => theme.FONTS.FONTS_DETALHES_TEXT_DESCRIPTION};
        color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_DETALHES_TEXT_DESCRIPTION : theme.COLORS.TT_DETALHES_TEXT_DESCRIPTION};
        margin-bottom: 2.4rem;
      }
    }

    .details_tag {
      width: 31.6rem;
      height: 8.8rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 2.4rem;
    }
  }

  .details_buttons {
    width: 31.6rem;
    display: flex;
    gap: 1.6rem;
    align-items: center;
    justify-content: center;
    margin: 4.8rem auto 0;


    .btn_order {
      width: 100%;
      height: 4rem;
      border-radius: .3rem;
      padding: .8rem 1.6rem .8rem 1.6rem;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: .5rem;

      svg {
        width: 2.5rem;
        height: 2.5rem;
      }

      span {
        font-family: ${({ theme }) => theme.FONTS.FONTS_DETALHES_BT_TEXT};
        font-size: 1.2rem;
        font-weight: 500;
        line-height: 1.6rem;
        text-align: center;
        color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_DETALHES_BT_TEXT : theme.COLORS.TT_DETALHES_BT_TEXT};
      }
    }
}
`