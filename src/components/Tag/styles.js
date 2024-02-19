import styled from "styled-components";

export const Container = styled.span`
  font-size: 1.2rem;
  font-family: ${({ theme }) => theme.FONTS.FONTS_TAG};
  font-weight: 400;

  height: 2.5rem;

  padding: .3rem 1.6rem;
  border-radius: .8rem;
  background-color: ${({ theme }) => theme.title === 'light' ? theme.BACKGROUND.BG_TAG : theme.BACKGROUND.BG_TAG};
  color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_TAG : theme.COLORS.TT_TAG};
`