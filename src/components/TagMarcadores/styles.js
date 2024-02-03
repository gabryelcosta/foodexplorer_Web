import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  background: ${({ theme, isNew }) => isNew ? "transparent" : theme.BACKGROUND.BG_EDIT_TAG};
  color: ${({ theme }) => theme.COLORS.TT_EDIT_TAG_TEXT};

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.BACKGROUND.BG_EDIT_TAG_BORDER}` : "none"};

  border-radius: 1rem;
  padding-right: 1rem;

  > button {
    border: none;
    background: none;
  }

  .button-delete{
    color: ${({ theme }) => theme.COLORS.SVG_EDIT_TAG_REMOVE};
  }

  .button-add{
    color: ${({ theme }) => theme.COLORS.SVG_EDIT_TAG_ADD};
  }

  > input {
    padding: 1.6rem;

    color: ${({ theme }) => theme.COLORS.TT_EDIT_TAG_TEXT};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.TT_EDIT_TAG_TEXTADD};
    }
  }
`