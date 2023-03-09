import React, { useEffect } from "react";
import { StyledPage } from "../pageStyles";
import ProductCard from "../../components/ProductCard";

export default function Fashion({ products }) {
  useEffect(() => {
    document.title = "Techtopia | Fashion";
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
