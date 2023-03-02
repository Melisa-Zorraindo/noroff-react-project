import { StyledProductCard } from "./styles";
import { Link, useLocation, useParams } from "react-router-dom";

export default function ProductCard({
  id,
  description,
  discountedPrice,
  imageUrl,
  price,
  rating,
  reviews,
  tags,
  title,
}) {
  //desctructure location and params to conditionally display items
  const { pathname } = useLocation();
  const { id: productId } = useParams();

  return (
    <StyledProductCard location={pathname}>
      <img src={imageUrl} alt={description} />
      <div className="product-data">
        <h2>{title}</h2>
        {pathname === `/src/pages/Product/${productId}` && <p>{description}</p>}
        <p>{discountedPrice} NOK</p>
        <p>
          {price !== discountedPrice &&
            Math.trunc(((price - discountedPrice) / discountedPrice) * 100)}
        </p>
        <span>{price !== discountedPrice && "% off"}</span>
        {pathname === `/src/pages/Product/${productId}` ? (
          <button>Add to cart</button>
        ) : (
          <Link to={`/src/pages/Product/${id}`}>View product</Link>
        )}
      </div>
    </StyledProductCard>
  );
}
