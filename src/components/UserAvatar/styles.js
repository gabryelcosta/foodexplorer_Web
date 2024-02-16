import styled from "styled-components";

export const Container = styled.div`
    img {
    width: 5rem;
    height: 5rem;
    border: .2rem solid ${({ theme }) => theme.title === 'light' ? theme.COLORS.BORDER_DEFAULT : theme.COLORS.BORDER_DEFAULT};
    border-radius: 8rem;
    }
`