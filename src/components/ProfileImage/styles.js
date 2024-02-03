import styled from "styled-components";

export const Container = styled.button`
  border: none;
  background: transparent;

    svg {
    width: 5rem;
    height: 5rem;
    border: .5rem solid ${({ theme }) => theme.title === 'light' ? theme.COLORS.BORDER_DEFAULT : theme.COLORS.BORDER_DEFAULT};
    border-radius: 8rem;

      path {
        fill: white;
      }
    }
`