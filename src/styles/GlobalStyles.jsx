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
  margin: 0 auto;
  font-family: 'Figtree', sans-serif;
  color: ${({ theme }) => theme.color.highlight};
  max-width: 1400px;
}

ul {
    margin: 0;
    padding: 0;
}
`;
