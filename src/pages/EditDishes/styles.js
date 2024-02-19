import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

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

export const Content = styled.form`
  grid-area: Main;
  width: 100%;
  overflow-y: scroll;

  .nav_text {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 3.4rem;
    margin: 1rem 0rem 2.4rem 2.4rem;

    button {
      font-size: 1.6rem;
      font-weight: 500;
      line-height: 23rem;
      font-family: ${({ theme }) => theme.FONTS.FONTS_DETALHES_NAV_TITLE};
      color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_DETALHES_NAV_TITLE : theme.COLORS.TT_DETALHES_NAV_TITLE};

        svg {
        width: 2.2rem;
        height: 2.2rem;
      }
    }
  }

  .edit_content {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    width: 36.4rem;
    margin: 0 auto;

    h2 {
        font-size: 3.2rem;
        font-weight: 500;
        line-height: 4.4rem;
        font-family: ${({ theme }) => theme.FONTS.FONTS_EDIT_NAV_TITLE};
        color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_EDIT_NAV_TITLE : theme.COLORS.TT_EDIT_NAV_TITLE};

        margin-bottom: 2.4rem;
      }

    .content_label {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      width: 100%;

      label {
        display: flex;
        flex-direction: column;
        gap: 1.6rem;

        .container_tags {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          width: 36.4rem;
          height: 4.8rem;
          padding: .8rem;
          gap: 1.6rem;
          border-radius: .8rem;
          background: ${({ theme }) => theme.title === 'light' ? theme.BACKGROUND.BG_EDIT_INPUT : theme.BACKGROUND.BG_EDIT_INPUT};

        div {
          width: 100%;
          max-width: 12.5rem;
          height: 3.2rem;
          border-radius: .8rem;

          input {
            max-width: 9.5rem;
            padding: .8rem 0rem .8rem 1.6rem;
            font-size: 1.6rem;
            font-weight: 400;
            line-height: 1.6rem;
            font-family: ${({ theme }) => theme.FONTS.FONTS_EDIT_TAG_TEXT};
          }

          button {
            width: 2rem;
            height: 2rem;
            background: transparent;
          }
        }

          button {
            background: ${({ theme }) => theme.title === 'light' ? theme.BACKGROUND.BT_EDIT_UPLOAD : theme.BACKGROUND.BT_EDIT_UPLOAD};
          }
        }
      }

    .container_label {
      div {
      padding: 1.5rem 1.4rem;
      border-radius: .8rem;
      background: ${({ theme }) => theme.title === 'light' ? theme.BACKGROUND.BG_EDIT_INPUT : theme.BACKGROUND.BG_EDIT_INPUT};

        input {
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 1.6rem;
        font-family: ${({ theme }) => theme.FONTS.FONTS_EDIT_INPUT_TEXT};
        color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_EDIT_INPUT_TEXT : theme.COLORS.TT_EDIT_INPUT_TEXT};
        }
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: .8rem;
      height: 4.8rem;
      background: ${({ theme }) => theme.title === 'light' ? theme.BACKGROUND.BT_EDIT_UPLOAD : theme.BACKGROUND.BT_EDIT_UPLOAD};

      svg {
        width: 2rem;
        height: 2rem;
      }
    }

    span {
      font-size: 1.6rem;
      font-weight: 400;
      font-weight: 400;
      line-height: 1.6rem;
      font-family: ${({ theme }) => theme.FONTS.FONTS_EDIT_CONTENT_SUBTITLE};
      color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_EDIT_CONTENT_SUBTITLE : theme.COLORS.TT_EDIT_CONTENT_SUBTITLE};
    }
    }

    textarea {
      height: 17.2rem;
      border-radius: .8rem;
    }

  .btn_container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3.2rem;
    margin-bottom: 5.3rem;

    .btn_submit {
      height: 4.8rem;
      padding: 1.2rem 2.4rem;

      border-radius: .5rem;
      color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_DEFAULT : theme.COLORS.TT_DEFAULT};
      background: ${({ theme }) => theme.title === 'light' ? theme.BACKGROUND.BT_DISABLE : theme.BACKGROUND.BT_DISABLE};

      font-size: 1.4rem;
      font-weight: 500;
      line-height: 2.4rem;
    }

    .btn_remove {
      height: 4.8rem;
      padding: 1.2rem 2.4rem;

      border-radius: .5rem;
      color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_DEFAULT : theme.COLORS.TT_DEFAULT};
      background: ${({ theme }) => theme.title === 'light' ? theme.BACKGROUND.BT_EDIT_REMOVE : theme.BACKGROUND.BT_EDIT_REMOVE};

      font-size: 1.4rem;
      font-weight: 500;
      line-height: 2.4rem;
    }
  }
}

@media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
  .edit_content{
    width: calc(100vw - 10rem);
    margin: 0 auto;

    h2 {
      font-size: 3.2rem;
      font-weight: 500;
      line-height: 4.48rem;
    }

    .content_label {
      flex-direction: row;
      flex-wrap: wrap;

      .name_label{
        .container_label {
          width: 20.5rem;
        }
      }

      .category_label {
        width: 20.7rem;
      }

      .ingredients_label {
        width: 43.7rem;
        .container_tags {
          width: 100%;
        }
      }

      .textarea_label {
        width: 100%;
      }
    }

    .btn_container {
      justify-content: flex-end;

      .btn_submit {
        width: 17.2rem;
      }

      .btn_remove {
        width: 17.2rem;
      }
    }
  }
}

@media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
  .edit_content{
    width: calc(100vw - 20rem);

    h2 {
      font-size: 4.2rem;
      font-weight: 500;
      line-height: 4.48rem;
    }

    .content_label {
      .name_label{
        .container_label {
          width: 36.4rem;
        }
      }

      .category_label {
        width: 20.4rem;
      }

      .ingredients_label {
        width: 59.3rem;
        .container_tags {
          width: 100%;
        }
      }

      .textarea_label {
        width: 100%;
      }
    }

    .btn_container {
      justify-content: flex-end;

      .btn_submit {
        width: 17.2rem;
      }

      .btn_remove {
        width: 17.2rem;
      }
    }
  }
}

@media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
  .new_content{
    width: calc(100vw - 25rem);

    .content_label {
      .name_label{
        .container_label {
          width: 60rem;
        }
      }

      .category_label {
        width: 33.4rem;
      }

      .ingredients_label {
        width: 95.9rem;
        .container_tags {
          width: 100%;
        }
      }

      .textarea_label {
        width: 100%;
      }
    }

    .btn_container {
      justify-content: flex-end;

      .btn_submit {
        width: 17.2rem;
      }

      .btn_remove {
        width: 17.2rem;
      }
    }
  }
}

@media (min-width: ${DEVICE_BREAKPOINTS.XXL}) {
  .edit_content{
    width: calc(100vw - 25rem);

    .content_label {
      .name_label{
        .container_label {
          width: 90rem;
        }
      }

      .category_label {
        width: 47.3rem;
      }

      .ingredients_label {
        width: 139.8rem;
        .container_tags {
          width: 100%;
        }
      }

      .textarea_label {
        width: 100%;
      }
    }

    .btn_container {
      justify-content: flex-end;

      .btn_submit {
        width: 17.2rem;
      }

      .btn_remove {
        width: 17.2rem;
      }
    }
  }
}
`