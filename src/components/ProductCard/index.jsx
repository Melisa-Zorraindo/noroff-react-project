import { StyledProductCard } from "./styles";

export default function ProductCard({ title, imageUrl, price }) {
  return (
    <StyledProductCard>
      <img src={imageUrl} alt="techtopia logo" />
      <div>
        <h2>{title}</h2>
        <p>{price}</p>
        <button>View product</button>
      </div>
    </StyledProductCard>
  );
}
