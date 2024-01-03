import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
    font-family: ${({ theme }) => theme.FONTS.FONT_1};
  }

  body {
    background-color: ${({ theme }) => theme.BACKGROUND.BG_900};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: ${({ theme }) => theme.FONTS.FONT_1};
    font-size: 1.6rem;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover  {
    filter: brightness(0.9);
  }
`