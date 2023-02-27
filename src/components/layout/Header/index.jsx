import Nav from "../Nav";
import Logo from "../../../assets/logo.png";
import { StyledHeader } from "./styles";

export default function Header() {
  return (
    <StyledHeader>
      <img src={Logo} alt="techtopia logo" />
      <Nav />
    </StyledHeader>
  );
}
