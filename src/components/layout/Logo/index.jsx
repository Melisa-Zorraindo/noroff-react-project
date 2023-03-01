import { Link } from "react-router-dom";
import techtopia from "../../../assets/logo.png";

export default function Logo() {
  return (
    <Link to="/">
      <img src={techtopia} alt="techtopia logo" />
    </Link>
  );
}
