import { StyledProductCard } from "../../styles/components/ProductCard.styles";
import PrimaryButton from "../PrimaryButton";
import ModalDialog from "../ModalDialog";
import { Link, useLocation, useParams } from "react-router-dom";
import { useProductsStore } from "../../utils/stateManagement/dataManagement";
import { useModalDialogStore } from "../../utils/stateManagement/modalDialog";
import { shallow } from "zustand/shallow";

export default function ProductCard({
  id,
  description,
  discountedPrice,
  imageUrl,
  price,
  title,
}) {
  //desctructure location and params to conditionally display items
  const { pathname } = useLocation();
  const { id: productId } = useParams();

  const { addOne } = useProductsStore(
    (state) => ({
      addOne: state.addOne,
    }),
    shallow
  );

  //modal dialog
  const { isVisible, show } = useModalDialogStore(
    (state) => ({
      isVisible: state.isVisible,
      show: state.show,
    }),
    shallow
  );

  function handleClick(productId) {
    addOne(productId);
    show();
  }

  return (
    <StyledProductCard location={pathname}>
      <ModalDialog
        text={"Your item has been added to the cart"}
        isVisible={isVisible}
      />
      <img src={imageUrl} alt={description} />
      <div className="product-data">
        <h2>{title}</h2>
        {pathname === `/src/pages/productone/${productId}` && (
          <p>{description}</p>
        )}
        <div
          className={
            price !== discountedPrice
              ? "promo-container"
              : "promo-container-hidden"
          }
        >
          <p className="old-price">{price !== discountedPrice ? price : ""}</p>
          <p className="discount">
            {price !== discountedPrice &&
              Math.trunc(((price - discountedPrice) / discountedPrice) * 100)}
            {price !== discountedPrice && "% OFF"}
          </p>
        </div>
        <p>{discountedPrice} NOK</p>

        {pathname === `/src/pages/productone/${productId}` ? (
          <PrimaryButton
            onClick={() => handleClick(productId)}
            text={"Add to cart"}
          ></PrimaryButton>
        ) : (
          <Link to={`/src/pages/productone/${id}`}>View product</Link>
        )}
      </div>
    </StyledProductCard>
  );
}
