import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html {
  font-family: sans-serif;
}

* {
    margin: 0px;
    padding: 0px;
    border: 0px;
}

h1 {
  font-family: "Oswald", cursive;
}

h2, h3, h4, h5 {
  font-family: "Poppins", sans-serif;
}

p {
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  line-height: 1.5;
}

a {
  font-family: "Oswald", sans-serif;
}

`;
