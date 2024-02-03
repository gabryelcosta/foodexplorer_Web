import styled from "styled-components";

export const Container = styled.span`
  font-size: 12px;
  font-family: ${({ theme }) => theme.FONTS.FONTS_TAG};
  font-weight: 400;

  height: 25px;

  padding: 5px 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.title === 'light' ? theme.BACKGROUND.BG_TAG : theme.BACKGROUND.BG_TAG};
  color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_TAG : theme.COLORS.TT_TAG};
`