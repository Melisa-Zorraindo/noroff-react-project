import Nav from "../Nav";
import SearchBar from "../SearchBar";
import BurgerMenu from "../BurgerMenu";
import Cart from "../Cart";
import Logo from "../../../assets/logo.png";
import { StyledHeader } from "./styles";

export default function Header() {
  return (
    <StyledHeader>
      <img src={Logo} alt="techtopia logo" />
      <SearchBar />
      <Cart />
      <BurgerMenu />
      <Nav />
    </StyledHeader>
  );
}
