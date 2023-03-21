import React, { useEffect } from "react";
import { useProductsStore } from "./utils/stateManagement";
import { shallow } from "zustand/shallow";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home";
import Electronics from "./pages/electronics";
import Beauty from "./pages/beauty";
import Fashion from "./pages/fashion";
import Product from "./pages/product";
import Contact from "./pages/contact";
import NotFound from "./pages/notFound";
import SearchResults from "./pages/searchResults";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import CheckoutSuccess from "./pages/checkoutSuccess";
import Feedback from "./components/Feedback";
import Loader from "./components/Loader";

function App() {
  const { availableProducts, fetchProducts, isLoading, error } =
    useProductsStore(
      (state) => ({
        availableProducts: state.availableProducts,
        fetchProducts: state.fetchProducts,
        isLoading: state.isLoading,
        error: state.error,
      }),
      shallow
    );

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (isLoading || !availableProducts) {
    return <Loader />;
  }

  if (error) {
    return <Feedback title={"An error occurred"} message={error} />;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/src/pages/cart" element={<Cart />} />
        <Route index element={<Home products={availableProducts} />} />
        <Route
          path="/src/pages/electronics"
          element={<Electronics products={availableProducts} />}
        />
        <Route
          path="/src/pages/beauty"
          element={<Beauty products={availableProducts} />}
        />
        <Route
          path="/src/pages/fashion"
          element={<Fashion products={availableProducts} />}
        />
        <Route path="/src/pages/product/:id" element={<Product />} />
        <Route path="/src/pages/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/src/pages/searchResults/:q" element={<SearchResults />} />
        <Route path="/src/pages/checkout" element={<Checkout />} />
        <Route
          path="/src/pages/checkoutSuccess"
          element={<CheckoutSuccess />}
        />
      </Route>
    </Routes>
  );
}

export default App;
