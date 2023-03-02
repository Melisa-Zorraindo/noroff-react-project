import { ThemeProvider } from "styled-components";

const elegant = {
  color: {
    highlight: "#4f4f4f",
    support: "#e0e2e2",
    neutral: "#fff",
  },
  break: {
    small: "900px",
  },
  border: {
    thickness: "1px",
    type: "solid",
  },
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={elegant}>{children}</ThemeProvider>
);

export default Theme;
