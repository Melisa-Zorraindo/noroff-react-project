import React, { useState, useEffect } from "react";
import { StyledHomePage } from "./styles";
import ProductCard from "../../components/ProductCard";

const url = "https://api.noroff.dev/api/v1/online-shop";

export default function Home() {
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

  return (
    <>
      <StyledHomePage>
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
      </StyledHomePage>
    </>
  );
}
