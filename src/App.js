import React, { useEffect } from "react";
import { useProductsStore } from "./utils/stateManagement";
import { shallow } from "zustand/shallow";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Electronics from "./pages/Electronics";
import Beauty from "./pages/Beauty";
import Fashion from "./pages/Fashion";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import SearchResults from "./pages/SearchResults";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import CheckoutSuccess from "./pages/CheckoutSuccess";
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
        <Route path="/src/pages/Cart" element={<Cart />} />
        <Route index element={<Home products={availableProducts} />} />
        <Route
          path="/src/pages/Electronics"
          element={<Electronics products={availableProducts} />}
        />
        <Route
          path="/src/pages/Beauty"
          element={<Beauty products={availableProducts} />}
        />
        <Route
          path="/src/pages/Fashion"
          element={<Fashion products={availableProducts} />}
        />
        <Route path="/src/pages/Product/:id" element={<Product />} />
        <Route path="/src/pages/Contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/src/pages/SearchResults/:q" element={<SearchResults />} />
        <Route path="/src/pages/Checkout" element={<Checkout />} />
        <Route
          path="/src/pages/CheckoutSuccess"
          element={<CheckoutSuccess />}
        />
      </Route>
    </Routes>
  );
}

export default App;
