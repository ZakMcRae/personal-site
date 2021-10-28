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

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background-color: black;
}

::-webkit-scrollbar-thumb {
  background-color: #555;
  border: 6px solid transparent;
  background-clip: border-box;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #a8bbbf;
}


// class reverses order of flex layout on project cards on large screens
@media (min-width:960px) {
  .reverse-project-card{
    order:2 !important;
    border-radius: unset !important;
    border-top-right-radius: 5px !important;
    border-bottom-right-radius: 5px !important;
    border: unset !important;
    border-left: 1px solid #555 !important;
  }
}
`;
