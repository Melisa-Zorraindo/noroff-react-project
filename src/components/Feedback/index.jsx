import { StyledFeedback } from "../../styles/components/Feedback.styles";
import { useLocation, Link } from "react-router-dom";

export default function Feedback({ title, message }) {
  const { pathname } = useLocation();

  return (
    <StyledFeedback>
      <h1>{title}</h1>
      <p>{message}</p>
      {(pathname === "/src/pages/checkoutSuccessone" ||
        pathname === "/src/pages/cartone") && <Link to={"/"}>Go shopping</Link>}
    </StyledFeedback>
  );
}
