import styled from "styled-components";

export const StyledCartPage = styled.main`
  margin: 4rem 0;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;

  h1 {
    flex: 100%;
  }

  .purchase {
    flex: 0 0 65%;
  }

  .checkout-container {
    border: ${({ theme }) =>
      `${theme.border.thickness} ${theme.border.type} ${theme.color.support}`};
    display: flex;
    flex-direction: column;
    padding: 1rem;
    margin: 2rem 0;
    height: fit-content;
    flex: 0 0 30%;

    h3 {
      margin: 0 0 1rem;
    }
  }

  .price-summary {
    display: flex;
    justify-content: space-between;

    p {
      margin: 0.5rem 0;
    }

    .total {
      font-weight: 700;
      margin: 1rem 0;
    }
  }

  @media (max-width: ${({ theme }) => theme.break.medium}) {
    .purchase,
    .checkout-container {
      flex: 0 0 100%;
    }
  }
`;
