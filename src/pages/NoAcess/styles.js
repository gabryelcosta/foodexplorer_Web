import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Content = styled.div `
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  border-radius: 1.5rem;
  background: ${({ theme }) => theme.title === 'light' ? theme.BACKGROUND.BGL_900 : theme.BACKGROUND.BG_800};


  > h1 {
    color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.GREEN_900 : theme.COLORS.CIANO_900};
  }

  > span {
    color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.GRAY_800 : theme.COLORS.GRAY_800};
  }

`