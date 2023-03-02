import styled from "styled-components";

export const StyledProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: ${({ theme }) =>
    `${theme.border.thickness} ${theme.border.type} ${theme.color.support}`};
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
    color: ${({ theme }) => theme.color.neutral};
    background-color: ${({ theme }) => theme.color.highlight};
    padding: 0.5rem 0;
    text-align: center;

    &:hover {
      opacity: 0.9;
    }
  }
`;
