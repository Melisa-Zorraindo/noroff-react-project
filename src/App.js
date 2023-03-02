import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Electronics from "./pages/Electronics";
import Beauty from "./pages/Beauty";
import Fashion from "./pages/Fashion";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/src/pages/Cart" element={<Cart />} />
        <Route index element={<Home />} />
        <Route path="/src/pages/Electronics" element={<Electronics />} />
        <Route path="/src/pages/Beauty" element={<Beauty />} />
        <Route path="/src/pages/Fashion" element={<Fashion />} />
        <Route path="/src/pages/Contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
