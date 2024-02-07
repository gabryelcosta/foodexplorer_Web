import styled from "styled-components";

export const Container = styled.button`
  border: none;
  background: transparent;
  max-width: 100vw;

    svg {
    width: 5rem;
    height: 5rem;
    border: .5rem solid ${({ theme }) => theme.title === 'light' ? theme.COLORS.BORDER_DEFAULT : theme.COLORS.BORDER_DEFAULT};
    border-radius: 8rem;

      path {
        fill: white;
      }
    }
`

export const DropdownMenu = styled.ul`
  position: absolute;
  background-color: red;
  list-style: none;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
  right: 0;
  top: 100%;

  li {
    padding: 10px;
    cursor: pointer;

    &:hover {
      background-color: #f0f0f0;
    }

      span {
        font-size: 1.6rem;
        font-weight: 500;
        line-height: 100%;
        font-family: ${({ theme }) => theme.FONTS.FONTS_MENU_CONTENT_NAV};
        color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_MENU_HEADER_TITLE : theme.COLORS.TT_MENU_HEADER_TITLE};
      }

      .container_theme {
        display: inline-flex;
        width: 5rem;
        border-bottom: none;
        padding: 0;

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
          transform: translateX(2.2rem);
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
`