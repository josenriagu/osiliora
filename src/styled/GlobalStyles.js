// Create global styles using styled components to be injected into components.
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
   font-size: 62.5%;
}
* {
   box-sizing: border-box;
}
body{
   text-align: left;
   margin: 0;
   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
}
h1 {
   font-size: 3.2rem;
}
h2 {
   font-size: 2.4rem;
   color: #6ea22c;
}
h3 {
   font-size: 1.872rem;
}
h4 {
   font-size: 1.75rem;
}
p, ul, li, span, label {
   font-size: 1.6rem;
}
label {
   font-weight: bold;
}
button {
   cursor: pointer;
   font-size: 1.5rem;
   margin: 1.5rem 0;
   padding: 1.2rem;
   border-radius: .5rem;
   border: .1rem solid #6ea22c;
   background-color: transparent;
   :hover {
   background-color: #6ea22c;
   color: white;
   }
}
input {
   font-size: 1.5rem;
   margin-top: 1rem;
   padding: 1rem;
   border-radius: .5rem;
   border: .1rem solid #e5e5e5;
   :focus {
      outline: none;
      border: .1rem solid gold;
   }
   :hover {
      -webkit-transform: scale(1.05);
      -ms-transform: scale(1.05);
      transform: scale(1.05);
      box-shadow: -0.1rem 1rem 1rem 0 rgba(0, 0, 0, 0.08);
   }
}
`;