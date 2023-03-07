import React, { useEffect } from "react";
import ProductCard from "../../components/ProductCard";
import { StyledPage } from "../pageStyles";

export default function SearchResults() {
  useEffect(() => {
    document.title = "Techtopia | Search results";
  }, []);

  return (
    <StyledPage>
      <ProductCard />
    </StyledPage>
  );
}
