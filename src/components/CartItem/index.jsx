import { useProductsStore } from "../../utils/stateManagement";
import { shallow } from "zustand/shallow";

export default function CartItem({ title, count, price, id }) {
  const { addOne, subtractOne, clearCount } = useProductsStore(
    (state) => ({
      addOne: state.addOne,
      subtractOne: state.subtractOne,
      clearCount: state.clearCount,
    }),
    shallow
  );

  function calcSubtotal(price, count) {
    return price * count;
  }

  return (
    <>
      <div>
        {title}: {count} | Price: {price} | Subtotal:{" "}
        {calcSubtotal(price, count)}
      </div>
      <button onClick={() => subtractOne(id)}>Click me to subtract</button>
      <button onClick={() => addOne(id)}>Click me to add</button>
      <button onClick={() => clearCount(id)}>Click me to clear</button>
    </>
  );
}
