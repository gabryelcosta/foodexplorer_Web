import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  height: 27.4rem;

  display: flex;
  gap: .8rem;
  padding: 1.4rem;
  border-radius: .8rem;
  border: none;
  resize: none;

  color: ${({ theme }) => theme.COLORS.TT_EDIT_TEXTAREA};
  background-color: ${({ theme }) => theme.BACKGROUND.BG_EDIT_TEXTAREA};

  &placeholder {
    color: ${({ theme }) => theme.COLORS.TT_EDIT_TEXTAREA};
  }
`