import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/src/pages/Product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/src/pages/Contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}
