import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <div className="cart-container">
      <Link to="/src/pages/Cart" className="cart-wrapper">
        <span className="material-symbols-rounded">shopping_bag</span>
        <span>0</span>
      </Link>
    </div>
  );
}
