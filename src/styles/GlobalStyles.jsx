import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

#root {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

* {
box-sizing: border-box;
}

body {
    margin: 0;
    font-family: 'Figtree', sans-serif;
    color: ${({ theme }) => theme.color.highlight};
}

ul {
    margin: 0;
    padding: 0;
}
`;
