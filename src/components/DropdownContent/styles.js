import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Dropdown = styled.ul`
  li {
    padding: 1.5rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;
    align-items: flex-start;

    svg {
    width: 2rem;
    height: 2rem;
    }

    > img {
      width: 2rem;
      height: 2rem;
    }

    p {
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 100%;
    font-family: ${({ theme }) => theme.FONTS.FONTS_MENU_CONTENT_NAV};
    color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_MENU_HEADER_TITLE : theme.COLORS.TT_MENU_HEADER_TITLE};
  }

  .container_theme {
    display: flex;
    align-items: center;
    cursor: pointer;

    div {
      display: flex;
      justify-content: flex-end;
      align-items: center;

      div {
        width: 12.5rem;
      }
    }

    .switch {
      width: 6rem;
      height: 2.5rem;
    }

    .slider:before {
      height: 1.5rem;
      width: 1.5rem;
      left: .4rem;
      bottom: .3rem;
    }

    input:checked + .slider:before {
      transform: translateX(3.2rem);
    }

    input:checked + .slider:after {
      content: "✔";
      position: absolute;
      top: 50%;
      left: 1.5rem;
      transform: translate(-50%, -50%);
      font-size: 1.2rem;
      color: ${({ theme }) => theme.title === 'light' ? theme.BACKGROUND.BG_TOGGLE_BUTTON_ICON : theme.BACKGROUND.BG_TOGGLE_BUTTON_ICON};
    }
  }
}

.desktop_logout {
    display: none;
}

@media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
  .desktop_logout {
    display: flex;
    align-items: flex-start;

    div {
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;

      .svg_logout {
        svg {
          width: 3rem;
          height: 3rem;
        }
      }
    }
  }
}
`