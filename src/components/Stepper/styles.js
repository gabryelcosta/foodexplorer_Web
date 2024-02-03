import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  input {
  font-family: ${({ theme }) => theme.FONTS.FONTS_CARD_STEPPER};
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;

  background: none;
  border: none;
  color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_CARD_STEPPER : theme.COLORS.TT_CARD_STEPPER};

  width: 2rem;
  height: 2rem;


  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
}

::-webkit-input-placeholder {
  font-family: ${({ theme }) => theme.FONTS.FONTS_CARD_STEPPER};
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_CARD_STEPPER : theme.COLORS.TT_CARD_STEPPER};
}
`