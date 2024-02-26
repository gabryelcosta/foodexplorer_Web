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

export const ContentUser = styled.main`
  grid-area: Main;
  max-width: 100%;
  overflow-y: scroll;
  margin-left: 3.5rem;

  .nav_text {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 3.4rem;
    margin: 5.6rem 0 2.7rem -.4rem;

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

  .content_title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 2.7rem;

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

export const ContentAdmin = styled.main`
  grid-area: Main;
  max-width: 100%;
  overflow-y: scroll;
  margin-left: 3.5rem;

  .nav_text {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 3.4rem;
    margin: 5.6rem 0 2.7rem -.4rem;

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

  .container_main_desktop {
    display: none;
  }

  .container_main {
    display: flex;
    flex-direction: column;
    gap: 1.7rem;
    margin: 0 3.5rem 0rem 3.5rem;

    .content_title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    h2 {
      font-size: 3.2rem;
      font-style: normal;
      font-weight: 600;
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
        gap: 1rem;

        span {
          display: flex;
          align-items: center;
          gap: .5rem;

          font-size: 1.2rem;
          font-weight: 400;
          line-height: 2.24rem;
          font-family: ${({ theme }) => theme.FONTS.FONTS_ORDERS_TITLE};
          color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_ORDERS_TITLE : theme.COLORS.TT_ORDERS_TITLE};
        }

        svg {
          svg {
            circle {
              fill: inherit;
            }
          }
        }
      }

      .orders_description {
        span {
          font-size: 1.2rem;
          font-weight: 400;
          line-height: 2.24rem;
          text-align: justify;
          font-family: ${({ theme }) => theme.FONTS.FONTS_ORDERS_SUBTITLE};
          color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_ORDERS_SUBTITLE : theme.COLORS.TT_ORDERS_SUBTITLE};
      }
      }

      .orders_select {
        width: 100%;
      }
    }
  }
  }

  @media(min-width: ${DEVICE_BREAKPOINTS.MD}){
    .container_main {
      display: none;
    }

    .container_main_desktop {
      display: block;
      width: calc(100vw - 10rem);
      margin: 0 auto;
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

        .content_orders.first {
            .orders {
              .orders_title {
                border-radius: .8rem .8rem 0 0;
              }
              .orders_description {
                border-top: none;
              }
            }
          }

        .content_orders {
          .orders {
            display: flex;
            flex-direction: column;

            .orders_title, .orders_description {
              display: flex;
              justify-content: space-between;
              align-items: stretch;
              border: .2rem solid ${({ theme }) => theme.title === 'light' ? theme.COLORS.BORDER_HISTORY_DESKTOP : theme.COLORS.BORDER_HISTORY_DESKTOP};
              border-radius: 0;
              width: 100%;

              div {
                width: 15%;
                padding: 2rem;
                flex-grow: 1;
                display: flex;
                align-items: center;
                justify-content: center;

                h3 {
                  font-size: 1.4rem;
                  font-weight: 700;
                  line-height: 2.24rem;
                  font-family: ${({ theme }) => theme.FONTS.FONTS_ORDERS_TITLE};
                  color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_ORDERS_TITLE : theme.COLORS.TT_ORDERS_TITLE};
                }

                span {
                  display: flex;
                  align-items: center;
                  gap: .5rem;

                  font-size: 1.4rem;
                  font-weight: 400;
                  line-height: 2.24rem;
                  text-align: justify;
                  font-family: ${({ theme }) => theme.FONTS.FONTS_ORDERS_SUBTITLE};
                  color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_ORDERS_SUBTITLE : theme.COLORS.TT_ORDERS_SUBTITLE};

                  svg {
                    svg {
                      circle {
                        fill: inherit;
                      }
                    }
                  }

                  div {
                    width: 14rem;
                  }
                }

                &:not(:first-child) {
                  border-left: .2rem solid ${({ theme }) => theme.title === 'light' ? theme.COLORS.BORDER_HISTORY_DESKTOP : theme.COLORS.BORDER_HISTORY_DESKTOP};
                }

                &:nth-child(3) {
                  flex-grow: 15;
                }

                &:first-child {
                  flex-grow: 3; // Ajuste este valor conforme necessário
                }
              }
            }

            .orders_description:not(.first) {
              border-top: none;
            }
            .orders_description {
              border-radius: 0;
            }
        }
      }
    }
}
`