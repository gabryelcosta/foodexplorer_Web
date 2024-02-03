import styled from "styled-components";

export const Select = styled.select`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.55rem 1.6rem;
  border: none;
  border-radius: .5rem;
  box-sizing: border-box;
  outline: none;

  background: ${({ theme }) => theme.title === 'light' ? theme.BACKGROUND.BG_EDIT_SELECT : theme.BACKGROUND.BG_EDIT_SELECT};
  background-image: ${({ theme }) => theme.title === 'light' ? `url(${theme.IMAGES.DROPDOWN_DAY})` : `url(${theme.IMAGES.DROPDOWN_NIGHT})`};
  background-position: right .8rem top 50%;
  background-repeat: no-repeat;

  font-size: 1.6rem;
  font-weight: 500;
  color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_EDIT_SELECT_TEXT : theme.COLORS.TT_EDIT_SELECT_TEXT};

    -webkit-appearance: none;
    -moz-appearance: none;

`