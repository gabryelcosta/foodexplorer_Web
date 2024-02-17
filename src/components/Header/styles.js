import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.header`
  grid-area: Header;
  width: 100vw;
  height: 11.4rem;
  background: ${({ theme }) => theme.title === 'light' ? theme.BACKGROUND.BG_HEADER : theme.BACKGROUND.BG_HEADER};

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    height: 9.6rem;
  }

  .container_navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 6rem 2.8rem 3rem 2.8rem;

    .btn_container {
      background: transparent;
      border: 0;

      p {
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 2.4rem;
        font-family: ${({ theme }) => theme.FONTS.FONTS_HEADER_TEXTBUTTON};
        color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_HEADER_TITLE : theme.COLORS.TT_HEADER_TITLE};

        background: ${({ theme }) => theme.title === 'light' ? theme.BACKGROUND.BT_DEFAULT : theme.BACKGROUND.BT_DEFAULT};
        border-radius: 8rem;
        width: 2rem;
        height: 2rem;

        position: absolute;
        margin: -.3rem 1.6rem 0;

        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .container_title {
      margin: 0 auto;

      .container_svg_text {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .3rem;

        > svg {
          width: 2.5rem;
          height: 2.5rem;
        }

          .title {
          display: flex;
          gap: .8rem;
          align-items: center;

          > h1 {
            font-size: 2.1rem;
            font-weight: 700;
            font-style: normal;
            line-height: normal;
            font-family: ${({ theme }) => theme.FONTS.FONTS_HEADER_TITLE};
            color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_HEADER_TITLE : theme.COLORS.TT_HEADER_TITLE};
          }

          > p {
            font-size: 1.2rem;
            font-weight: 400;
            line-height: 1.9rem;
            font-family: ${({ theme }) => theme.FONTS.FONTS_HEARDER_ADMIN};
            color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_ADMIN : theme.COLORS.TT_ADMIN};
          }
        }
      }

      .container_desktop {
        display: none;
      }
    }
}

@media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
  .container_navbar {
    height: 4.8rem;
    margin: 2.4rem auto;

    .btn_container {
      display: none;
    }

    .container_title {
      display: flex;
      align-items: center;
      gap: 2rem;

      .container_svg_text {
        display: flex;
        align-items: flex-start;
        height: 3.9rem;
        width: 19.7rem;

        > svg {
          width: 3rem;
          height: 3rem;
        }

        .title{
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0;

          > h1 {
            font-size: 2.4rem;
            line-height: 2.8rem;
          }

          > p {
            margin-top: -.7rem;
          }
        }
      }

      .container_desktop {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;

        .container_input {
          display: flex;
          div {
            display: flex;
            align-items: center;
            gap: .2rem;
            height: 4.8rem;
            padding: 1rem 1.4rem;
            width: calc(100vw - 50rem);

            svg {
              width: 2rem;
              height: 2rem;
            }

            input {
              font-size: 1.3rem;
            }
          }
        }

        .btn_container_desktop {
          width: 18rem;
          height: 4.8rem;

          display: flex;
          align-items: center;
          gap: .4rem;

          font-size: 1.6rem;

          svg {
            width: 3rem;
            height: 3rem;
          }
        }

        button {
          width: 18rem;
          height: 4.8rem;
        }

        svg {
            width: 3rem;
            height: 3rem;
          }
      }
    }
  }
}

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    .container_navbar {
      .container_title {
        gap: 3.2rem;

        .container_desktop {
          gap: 3.2rem;

          .container_input {
            div {
              gap: 1.6rem;
              padding: 1.6rem 2.4rem;
              width: calc(100vw - 60rem);

              svg {
                width: 2.5rem;
                height: 2.5rem;
              }

              input {
                font-size: 1.6rem;
              }
            }

            button {
              width: 21rem;
              height: 4.8rem;
            }

            svg {
              width: 3.5rem;
              height: 3.5rem;
            }
          }
        }
      }
}
}
`

export const Menu = styled.button`
  display: block;
  background: none;
  border: none;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: none;
  }
`