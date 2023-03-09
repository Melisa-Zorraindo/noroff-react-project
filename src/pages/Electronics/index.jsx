import React, { useEffect } from "react";
import { StyledPage } from "../pageStyles";
import ProductCard from "../../components/ProductCard";

export default function Electronics({ products }) {
  useEffect(() => {
    document.title = "Techtopia | Electronics";
  }, []);

  //filter items by tag
  const electronics = products.filter((product) => {
    return (
      product.tags.includes("electronics") ||
      product.tags.includes("headphones") ||
      product.tags.includes("watch")
    );
  });

  return (
    <StyledPage>
      <h1>Electronics</h1>
      {electronics.map((item) => {
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
