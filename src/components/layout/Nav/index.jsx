import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { StyledNavBar } from "./styles";

export default function Nav() {
  const [isVisible, setIsVisible] = useState(false);

  //resets the isVisible state to false when location changes
  //prevents the navbar to appear open when navigating to new page on mobile
  let location = useLocation();
  useEffect(() => {
    setIsVisible(false);
  }, [location]);

  function toggleMenu() {
    setIsVisible((prevState) => {
      return !prevState;
    });
  }

  return (
    <>
      <button className="menu" onClick={toggleMenu}>
        <span className="material-symbols-rounded">menu</span>
      </button>
      <StyledNavBar isVisible={isVisible}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/src/pages/electronics">Electronics</NavLink>
          </li>
          <li>
            <NavLink to="/src/pages/beauty">Beauty</NavLink>
          </li>
          <li>
            <NavLink to="/src/pages/fashion">Fashion</NavLink>
          </li>
          <li>
            <NavLink to="/src/pages/contact">Contact</NavLink>
          </li>
        </ul>
      </StyledNavBar>
    </>
  );
}
