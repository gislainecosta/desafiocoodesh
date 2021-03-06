import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --violet: #64057a;
    --violet-dark: #19021e;
    --violet-light: #e0c4e6;  
    --text: #460259;
    --grey: #efeaf3;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;

    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body, button, textarea, input {
    border: 0 none;
    outline: 0;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
    color: var(--text);

    &:focus {
      outline: none;
    }
  }

  button, textarea, input {
    border: 0 none;
    outline: 0;
    background-color: transparent;

    &:focus {
      outline: none;
    }
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed
  }
`;
