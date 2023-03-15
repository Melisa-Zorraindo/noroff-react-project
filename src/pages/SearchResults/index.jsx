import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import { StyledPage } from "../pageStyles";
import { url } from "../../utils/constants";

export default function SearchResults() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { q } = useParams();

  useEffect(() => {
    async function fetchProduct() {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(url);
        const data = await response.json();

        //set document title including product name
        document.title = "Techtopia | Search results";

        setData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProduct();
  }, [q]);

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>An error occurred</div>;
  }

  const query = data.filter((product) => {
    return product.title.toLowerCase().includes(q);
  });

  return (
    <StyledPage>
      {query.length > 0 ? (
        query.map((item) => {
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
        })
      ) : (
        <div>Nothing found</div>
      )}
    </StyledPage>
  );
}
