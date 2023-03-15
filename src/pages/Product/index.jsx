import React, { useState, useEffect } from "react";
import { StyledPage } from "../pageStyles";
import ProductCard from "../../components/ProductCard";
import ProductReviews from "../../components/ProductReviews";
import { useParams } from "react-router-dom";
import { url } from "../../utils/constants";

export default function Product() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    async function fetchProduct() {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(url + id);
        const data = await response.json();

        //set document title including product name
        document.title = `Techtopia | ${data.title}`;

        setData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>An error occurred</div>;
  }

  return (
    <StyledPage>
      <h1>{data.title}</h1>
      <ProductCard
        imageUrl={data.imageUrl}
        title={data.title}
        price={data.price}
        discountedPrice={data.discountedPrice}
        description={data.description}
      />
      <ProductReviews rating={data.rating} reviews={data.reviews} />
    </StyledPage>
  );
}
