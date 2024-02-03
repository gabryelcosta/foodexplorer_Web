import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints';

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${({ theme }) => theme.title === 'light' ? theme.BACKGROUND.BG_PAGE : theme.BACKGROUND.BG_PAGE}
`

export const Content = styled.div `
  width: 80%;
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  border-radius: 1.5rem;
  background: ${({ theme }) => theme.title === 'light' ? theme.BACKGROUND.BG_HEADER : theme.BACKGROUND.BG_HEADER};


  > h1 {
    color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_DEFAULT : theme.COLORS.TT_DEFAULT};
  }

  > button {
    color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_ADMIN : theme.COLORS.TT_ADMIN};
  }
`