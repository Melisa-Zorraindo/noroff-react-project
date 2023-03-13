import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductsStore } from "../../utils/stateManagement";
import { shallow } from "zustand/shallow";
import { StyledPage } from "../pageStyles";
import CartItem from "../../components/CartItem";

export default function Cart() {
  useEffect(() => {
    document.title = "Techtopia | Shopping cart";
  }, []);
  const { availableProducts, clearCart } = useProductsStore(
    (state) => ({
      availableProducts: state.availableProducts,
      clearCart: state.clearCart,
    }),
    shallow
  );

  const cartItems = availableProducts.filter((item) => {
    return item.count > 0;
  });

  let total = [];

  cartItems.forEach((item) => {
    total.push(item.count * item.price);
  });

  function calcTotal() {
    return total.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  }

  return (
    <StyledPage>
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              title={item.title}
              count={item.count}
              price={item.price}
            />
          ))}
          <div>Total: {calcTotal()}</div>
          <button onClick={() => clearCart()}>Clear cart</button>
        </>
      ) : (
        <>
          <div>There are no items in the cart</div>
          <Link to={`/`}>Go shopping</Link>
        </>
      )}
    </StyledPage>
  );
}
