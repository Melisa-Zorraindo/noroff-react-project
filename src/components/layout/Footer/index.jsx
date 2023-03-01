import { StyledFooter } from "./styles";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <StyledFooter>
      <h4>&copy; Melisa Zorraindo</h4>
      <ul>
        <li>
          <Link to="https://github.com/Melisa-Zorraindo">GitHub</Link>
        </li>
        <li>·</li>
        <li>
          <Link to="https://www.linkedin.com/in/melisa-zorraindo-81719618b/">
            LinkedIn
          </Link>
        </li>
      </ul>
    </StyledFooter>
  );
}
