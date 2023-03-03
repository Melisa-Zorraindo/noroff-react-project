import React, { useState, useEffect } from "react";
import { StyledPage } from "../pageStyles";
import ProductCard from "../../components/ProductCard";
import { url } from "../../utils/contants";

export default function Beauty() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    document.title = "Techtopia | Beauty";

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
  const beauty = products.filter((product) => {
    return (
      product.tags.includes("beauty") ||
      product.tags.includes("perfume") ||
      product.tags.includes("shampoo")
    );
  });

  return (
    <StyledPage>
      <h1>Beauty</h1>
      {beauty.map((item) => {
        return (
          <ProductCard
            key={item.id}
            id={item.id}
            imageUrl={item.imageUrl}
            title={item.title}
            price={item.price}
            discountedPrice={item.discountedPrice}
            description={item.description}
          />
        );
      })}
    </StyledPage>
  );
}
