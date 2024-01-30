import styled from 'styled-components';

export const Container = styled.button`
  background: none;
  color: ${({ theme, $isactive, disabled }) => {
    if (disabled) {
      return theme.COLORS.GRAY_900;
    }
    if (theme.title === 'light') {
      return $isactive ? theme.COLORS.GRAY_800 : theme.COLORS.TT_BUTTONTEXT;
    } else {
      return $isactive ? theme.COLORS.GRAY_800 : theme.COLORS.TT_BUTTONTEXT;
    }
  }};


  border: none;
  font-size: 1.4rem;
  font-family: ${({ theme }) => theme.FONTS.FONTS_BUTTONTEXT};
  font-style: normal;
  font-weight: 500;
  line-height: 2.4rem;

  display: flex;
  align-items: center;
  gap: .5rem;

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
`