import React, { useEffect } from "react";
import { useProductsStore } from "../../utils/stateManagement";
import { shallow } from "zustand/shallow";
import { StyledCartPage } from "./styles";
import CartItem from "../../components/CartItem";
import OrderSummary from "../../components/OrderSummary";
import Feedback from "../../components/Feedback";
import ModalDialog from "../../components/ModalDialog";

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

  function calcSubtotal() {
    const sum = total.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );

    return sum.toFixed(2);
  }

  function calcVAT() {
    const sum = calcSubtotal();
    return ((sum * 25) / 100).toFixed(2);
  }

  function calcTotal() {
    const vat = parseFloat(calcVAT());
    const subtotal = parseFloat(calcSubtotal());
    return (vat + subtotal).toFixed(2);
  }

  return (
    <StyledCartPage>
      <ModalDialog text={"Are you sure you want to remove this item?"} />
      {cartItems.length > 0 ? (
        <>
          <h1>Shopping cart</h1>
          <div className="purchase">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                title={item.title}
                count={item.count}
                price={item.price}
                imageUrl={item.imageUrl}
              />
            ))}
          </div>
          <OrderSummary
            calcSubtotal={calcSubtotal}
            calcVAT={calcVAT}
            calcTotal={calcTotal}
            clearCart={clearCart}
          />
        </>
      ) : (
        <div>
          <Feedback title={"There are no items in the cart"} />
        </div>
      )}
    </StyledCartPage>
  );
}
