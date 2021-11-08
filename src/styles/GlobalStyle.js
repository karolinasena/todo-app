import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Josefin Sans", sans-serif;
  }

  a {
    text-decoration: none;
  }

  button, 
  input {
    border: none;
    outline: none;
  }

  li {
    list-style: none;
  }
`;