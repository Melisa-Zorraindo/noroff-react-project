import React, { useEffect } from "react";
import { useProductsStore } from "./utils/stateManagement/dataManagement";
import { shallow } from "zustand/shallow";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/homeone";
import Electronics from "./pages/electronicsone";
import Beauty from "./pages/beautyone";
import Fashion from "./pages/fashionone";
import Product from "./pages/productone";
import Contact from "./pages/contactone";
import NotFound from "./pages/notFoundone";
import SearchResults from "./pages/searchResultsone";
import Cart from "./pages/cartone";
import Checkout from "./pages/checkoutone";
import CheckoutSuccess from "./pages/checkoutSuccessone";
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
        <Route path="/src/pages/cartone" element={<Cart />} />
        <Route index element={<Home products={availableProducts} />} />
        <Route
          path="/src/pages/electronicsone"
          element={<Electronics products={availableProducts} />}
        />
        <Route
          path="/src/pages/beautyone"
          element={<Beauty products={availableProducts} />}
        />
        <Route
          path="/src/pages/fashionone"
          element={<Fashion products={availableProducts} />}
        />
        <Route path="/src/pages/productone/:id" element={<Product />} />
        <Route path="/src/pages/contactone" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/src/pages/searchResultsone/:q"
          element={<SearchResults />}
        />
        <Route path="/src/pages/checkoutone" element={<Checkout />} />
        <Route
          path="/src/pages/checkoutSuccessone"
          element={<CheckoutSuccess />}
        />
      </Route>
    </Routes>
  );
}

export default App;
