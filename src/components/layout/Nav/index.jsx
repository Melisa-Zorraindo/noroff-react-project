import { Link } from "react-router-dom";
import "../../../App.css";
import { StyledNav } from "./styles";

export default function Nav() {
  return (
    <StyledNav>
      <ul>
        <li>
          <Link to="/" className="no-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/src/pages/Product" className="no-link">
            Product
          </Link>
        </li>
        <li>
          <Link to="/src/pages/Contact" className="no-link">
            Contact
          </Link>
        </li>
      </ul>
    </StyledNav>
  );
}
