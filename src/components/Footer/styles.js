import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.footer`
  grid-area: Footer;
  background: ${({ theme }) => theme.title === 'light' ? theme.BACKGROUND.BG_FOOTER : theme.BACKGROUND.BG_FOOTER};
  max-width: 100vw;
  height: 7.7rem;

  .footer_content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 2rem;

    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: .1rem;
      margin-right: 1.5rem;

      h4 {
        font-family: ${({ theme }) => theme.FONTS.FONTS_FOOTER_TITLE};
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_FOOTER_TITLE : theme.COLORS.TT_FOOTER_TITLE};
      }
      svg {
        width: 2.2rem;
        height: 2rem;

        > path {
          fill: ${({ theme }) => theme.title === 'light' ? theme.COLORS.SVG_FOOTER_TITLE : theme.COLORS.SVG_FOOTER_TITLE};
        }
      }
    }

    p {
        font-family: ${({ theme }) => theme.FONTS.FONTS_FOOTER_SUBTITLE};
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_FOOTER_SUBTITLE : theme.COLORS.TT_FOOTER_SUBTITLE};
      }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    height: 7.7rem;

    .footer_content {
      padding: 2.5rem 12.3rem;
      justify-content: space-between;

      > div {
        gap: 1rem;

        > svg {
          width: 3rem;
          height: 3rem;
        }

        > h4 {
        font-size: 2.4rem;
        line-height: 2.8rem;
        }

        > p {
          font-size: 1.4rem;
          line-height: 22rem;
        }
      }
    }
  }
`