import styled from "styled-components";

export const StyledProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #e0e2e2;
  width: 17rem;
  padding: 1rem;

  img {
    max-width: 200px;
    align-self: center;
  }

  .product-data {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    color: #fff;
    background-color: #1f1f1f;
    padding: 0.5rem 0;
    text-align: center;

    &:hover {
      opacity: 0.9;
    }
  }
`;
