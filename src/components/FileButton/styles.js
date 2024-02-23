import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  height: 4.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: .8rem;
  background: ${({ theme }) => theme.title === 'light' ? theme.BACKGROUND.BT_EDIT_UPLOAD : theme.BACKGROUND.BT_EDIT_UPLOAD};
  color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_BUTTON : theme.COLORS.TT_BUTTON};

  .file_buttons {
    display: flex;
    align-items: center;
    gap: 1rem;
    .upload_button {
      display: flex;
      align-items: center;
      gap: 1rem;
      background: transparent;
      cursor: pointer;

      span {
        max-width: 20rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      svg {
        width: 2rem;
        height: 2rem;
      }
    }

    .cancel_button {
      color: white;
      cursor: pointer;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    .file_buttons {
      .upload_button {
        span {
          width: 100%;
          max-width: 10rem;
          font-size: 1.6rem;
        }
      }
    }
  }
`