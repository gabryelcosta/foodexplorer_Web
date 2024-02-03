import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex: 1 0 0;
  width: 100%;
  padding: 1.2rem 1.4rem;

  border-radius: .8rem;
  color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_PLACEHOLDER : theme.COLORS.TT_PLACEHOLDER};
  background-color: ${({ theme }) => theme.title === 'light' ? theme.BACKGROUND.BG_INPUT : theme.BACKGROUND.BG_INPUT};

  > input {
    width: 100%;
    background: transparent;
    border: 0;
    margin-left: .5rem;
    color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.COLORS.TT_PLACEHOLDER: theme.COLORS.TT_PLACEHOLDER};

    > svg {
      margin-left: 1.6rem;
    }
  }
`;