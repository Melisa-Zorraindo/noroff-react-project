import React, { useState, useEffect } from "react";
import { StyledPage } from "../pageStyles";
import ProductCard from "../../components/ProductCard";
import { url } from "../../utils/contants";

export default function Fashion() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(url);
        const data = await response.json();

        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchProducts();
  }, []);

  //filter items by tag
  const fashion = products.filter((product) => {
    return (
      product.tags.includes("fashion") ||
      product.tags.includes("shoes") ||
      product.tags.includes("bags") ||
      product.tags.includes("glasses")
    );
  });

  return (
    <StyledPage>
      <h1>Fashion</h1>
      {fashion.map((item) => {
        return (
          <ProductCard
            key={item.id}
            imageUrl={item.imageUrl}
            title={item.title}
            price={item.price}
          />
        );
      })}
    </StyledPage>
  );
}
