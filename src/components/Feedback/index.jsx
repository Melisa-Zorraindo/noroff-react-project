import { StyledFeedback } from "./styles";
import { useLocation, Link } from "react-router-dom";

export default function Feedback({ title, message }) {
  const { pathname } = useLocation();

  return (
    <StyledFeedback>
      <h1>{title}</h1>
      <p>{message}</p>
      {(pathname === "/src/pages/checkoutSuccess" ||
        pathname === "/src/pages/cart") && <Link to={"/"}>Go shopping</Link>}
    </StyledFeedback>
  );
}
