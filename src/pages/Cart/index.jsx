import React, { useEffect } from "react";
import { useProductsStore } from "../../utils/stateManagement";
import { shallow } from "zustand/shallow";

export default function Cart() {
  useEffect(() => {
    document.title = "Techtopia | Shopping cart";
  }, []);
  const { availableProducts, addOne, subtractOne, clearCount, clearCart } =
    useProductsStore(
      (state) => ({
        availableProducts: state.availableProducts,
        addOne: state.addOne,
        subtractOne: state.subtractOne,
        clearCount: state.clearCount,
        clearCart: state.clearCart,
      }),
      shallow
    );

  let total = [];
  function calcPrice(price, count) {
    total.push(price * count);
  }

  function calcTotal() {
    return total.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  }

  const cartItems = availableProducts.filter((item) => {
    return item.count > 0;
  });

  return (
    <div>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.id}>
            <div>
              {item.title}: {item.count} | Price{" "}
              {item.count === 0 ? 0 : item.price * item.count}
              {calcPrice(item.price, item.count)}
            </div>
            <button onClick={() => subtractOne(item.id)}>
              Click me to subtract
            </button>
            <button onClick={() => addOne(item.id)}>Click me to add</button>
            <button onClick={() => clearCount(item.id)}>
              Click me to clear
            </button>
          </div>
        ))
      ) : (
        <div>No items in the cart</div>
      )}
      <div>Total: {calcTotal()}</div>
      <button onClick={() => clearCart()}>Clear cart</button>
    </div>
  );
}
