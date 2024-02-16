import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 20rem 1fr;
  grid-template-areas:
  "Header"
  "Main"
  "Footer";
  max-width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.title === 'light' ? theme.BACKGROUND.BG_PAGE : theme.BACKGROUND.BG_PAGE};
`

export const Header = styled.header`
  grid-area: Header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 20rem;
  background: ${({ theme }) => theme.title === 'light' ? theme.BACKGROUND.BG_MENU_HEADER : theme.BACKGROUND.BG_MENU_HEADER};
  padding: 5.6rem 2.8rem 2.4rem;

  .nav_text {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: -3rem;

    button {
      font-size: 1.6rem;
      font-weight: 500;
      line-height: 23rem;
      font-family: ${({ theme }) => theme.FONTS.FONTS_PROFILE_NAV_TITLE};
      color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.TT_PROFILE_NAV_TITLE : theme.COLORS.TT_PROFILE_NAV_TITLE};

        svg {
        width: 2.2rem;
        height: 2.2rem;
      }
    }
  }
`

export const Avatar = styled.div`
  position: relative;
  margin: -12.4rem auto 3.2rem;

  width: 18.6rem;
  height: 18.6rem;

  img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
    border: none;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.title === 'light' ? theme.BACKGROUND.BG_PROFILE_CAMERA : theme.BACKGROUND.BG_PROFILE_CAMERA};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: .5rem;
    right: .5rem;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.title === 'light' ? theme.COLORS.SVG_PROFILE_CAMERA : theme.COLORS.SVG_PROFILE_CAMERA};
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 30rem;
  margin: 3rem auto;
  height: 4rem;
  gap: .5rem;

  input {
    height: 2.2rem;
    border-radius: .5rem;
  }

  > div:nth-child(4){
    margin-top: 2.4rem;
  }

  button {
    margin-top: 2.4rem;
    height: 4.8rem;
    padding: 1.4rem 2.4rem;
    border-radius: .5rem;
  }
`