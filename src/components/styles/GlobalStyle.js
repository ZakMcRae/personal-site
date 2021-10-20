import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
// change default box sizing and reset margin/padding to 0
html {
  box-sizing: border-box;
  font-family: sans-serif;
}

*, *:before, *:after {
  box-sizing: inherit;
}

* {
    margin: 0px;
    padding: 0px;
    border: 0px;
}
`;
