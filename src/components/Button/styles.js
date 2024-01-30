import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.GREEN_900 : theme.COLORS.TT_BUTTON};
  background: ${({ theme }) => theme.title === 'light' ? theme.BACKGROUND.BGL_860 : theme.BACKGROUND.BT_DEFAULT};

  height: 2.4rem;
  border: 0;
  padding: 1.2rem 3.2rem;
  border-radius: .5rem;
  font-weight: 500;

  &disabled {
    opacity: 0.5;
  }
`