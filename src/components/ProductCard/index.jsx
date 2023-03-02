import { StyledProductCard } from "./styles";
import { Link } from "react-router-dom";

export default function ProductCard({ title, imageUrl, price }) {
  return (
    <StyledProductCard>
      <img src={imageUrl} alt="techtopia logo" />
      <div className="product-data">
        <h2>{title}</h2>
        <p>{price} NOK</p>
        <Link to="/src/pages/Product">View product</Link>
      </div>
    </StyledProductCard>
  );
}
