import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: border-box; 
  }

  a, a:visited {
    text-decoration: none;
    cursor: pointer;
  }

  button {
    cursor: pointer;
    outline: none;
    font-family: inherit;
  }

  ul li {
    list-style: none;
  }

  html, body {
    width: 100%;
    height: 100%;
    font-family: 'Montserrat', sans-serif;
    background-color: #F4F5F6;
    color: #000000;
  }

  input, textarea, select {
    font-family: 'Montserrat', sans-serif;
  }
`;