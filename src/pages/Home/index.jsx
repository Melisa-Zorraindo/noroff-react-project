import React, { useState, useEffect } from "react";
import { StyledPage } from "../pageStyles";
import ProductCard from "../../components/ProductCard";
import { url } from "../../utils/contants";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <>
      <StyledPage>
        <h1>All products</h1>
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              imageUrl={product.imageUrl}
              title={product.title}
              price={product.price}
            />
          );
        })}
      </StyledPage>
    </>
  );
}
