import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/src/pages/Product">Product</Link>
        </li>
        <li>
          <Link to="/src/pages/Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
