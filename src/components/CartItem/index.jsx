import { useProductsStore } from "../../utils/stateManagement";
import { shallow } from "zustand/shallow";
import { StyledCartItem } from "./styles";

export default function CartItem({ title, count, price, id, imageUrl }) {
  const { addOne, subtractOne, clearCount } = useProductsStore(
    (state) => ({
      addOne: state.addOne,
      subtractOne: state.subtractOne,
      clearCount: state.clearCount,
    }),
    shallow
  );

  function calcSubtotal(price, count) {
    return (price * count).toFixed(2);
  }

  return (
    <StyledCartItem>
      <div className="product-info">
        <img src={imageUrl} alt={title} />
        <div>
          <h2>{title}</h2>
          <p className="price">{calcSubtotal(price, count)} NOK</p>
          <div className="quantity">
            QTY:{" "}
            <button onClick={() => subtractOne(id)}>
              <span className="material-symbols-rounded">remove</span>
            </button>{" "}
            {count}
            <button onClick={() => addOne(id)}>
              <span className="material-symbols-rounded">add</span>
            </button>
          </div>
          <p>(Price per unit: {price} NOK)</p>
        </div>
      </div>
      <div>
        <button onClick={() => clearCount(id)}>
          <span className="material-symbols-rounded">delete_forever</span>
        </button>
      </div>
    </StyledCartItem>
  );
}
