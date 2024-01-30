import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex: 1 0 0;
  width: 100%;
  padding: 1.2rem 1.4rem;

  border-radius: .8rem;
  color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.GREEN_900 : theme.COLORS.TT_PLACEHOLDER};
  background-color: ${({ theme }) => theme.title === 'light' ? theme.BACKGROUND.BGL_860 : theme.BACKGROUND.BG_INPUT};

  > input {
    width: 100%;
    background: transparent;
    border: 0;
    margin-left: .5rem;
    color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.GREEN_900 : theme.COLORS.TT_PLACEHOLDER};

    > svg {
      margin-left: 1.6rem;
    }
  }
`;