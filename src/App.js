import React, { useState, useEffect } from "react";
import { url } from "./utils/constants";
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

function App() {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(url);
        const data = await response.json();

        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProduct();
  }, []);

  if (isLoading || !products) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>An error occurred</div>;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/src/pages/Cart" element={<Cart />} />
        <Route index element={<Home products={products} />} />
        <Route
          path="/src/pages/Electronics"
          element={<Electronics products={products} />}
        />
        <Route
          path="/src/pages/Beauty"
          element={<Beauty products={products} />}
        />
        <Route
          path="/src/pages/Fashion"
          element={<Fashion products={products} />}
        />
        <Route path="/src/pages/Product/:id" element={<Product />} />
        <Route path="/src/pages/Contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/src/pages/SearchResults/:q" element={<SearchResults />} />
      </Route>
    </Routes>
  );
}

export default App;
