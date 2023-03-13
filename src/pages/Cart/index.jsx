import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductsStore } from "../../utils/stateManagement";
import { shallow } from "zustand/shallow";
import { StyledCartPage } from "./styles";
import CartItem from "../../components/CartItem";
import PrimaryButton from "../../components/PrimaryButton";

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
      <h1>Shopping cart</h1>
      {cartItems.length > 0 ? (
        <>
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
          <div className="checkout-container">
            <h3>Order summary</h3>
            <div className="price-summary">
              <p>Subtotal</p>
              <p>{calcSubtotal()} NOK</p>
            </div>
            <div className="price-summary">
              <p>Shipping</p>
              <p>Free</p>
            </div>
            <div className="price-summary">
              <p>VAT 25%</p>
              <p>{calcVAT()} NOK</p>
            </div>
            <div className="price-summary">
              <p className="total">Total</p>
              <p className="total">{calcTotal()} NOK</p>
            </div>
            <PrimaryButton onClick={() => clearCart()} text={"Clear cart"} />
          </div>
        </>
      ) : (
        <div>
          <div>There are no items in the cart</div>
          <Link to={`/`}>Go shopping</Link>
        </div>
      )}
    </StyledCartPage>
  );
}
