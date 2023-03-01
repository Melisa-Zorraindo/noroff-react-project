import styled from "styled-components";

export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 2fr 1fr 4rem;
  padding: 1rem;
  border-bottom: 1px solid #e0e2e2;

  img {
    padding-bottom: 1rem;
  }

  .menu {
    display: none;
  }

  label {
    display: flex;
    align-items: center;
    border-left: 1px solid #e0e2e2;
    border-right: 1px solid #e0e2e2;
  }

  .cart-container {
    justify-self: center;
    align-self: center;
  }

  .cart-wrapper {
    color: #1f1f1f;
    text-decoration: none;
    position: relative;
  }

  .material-symbols-rounded {
    font-size: 2rem;
  }

  .cart-wrapper :nth-child(2) {
    position: absolute;
    bottom: 100%;
    left: 70%;
    background-color: #4f4f4f;
    color: #fff;
    padding: 0.25rem 0.5rem;
    font-weight: 700;
    border-radius: 50%;
  }

  input {
    width: 100%;
    height: 100%;
    border: none;
    font-size: 1.1rem;

    &:focus {
      outline: none;
    }
  }

  @media (max-width: 900px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1rem repeat(3, 1fr) 4rem 1rem;
    padding: 1rem 0;

    img {
      max-width: 175px;
      grid-row-start: 1;
      grid-column-start: 2;
      grid-row-end: 2;
      grid-column-end: 5;
    }

    label {
      grid-row-start: 2;
      grid-column-start: 3;
      grid-row-end: 3;
      grid-column-end: 6;
      border-right: none;
      border-top: 1px solid #e0e2e2;
    }

    .cart-container {
      grid-column: 2;
      grid-row-start: 1;
      grid-column-start: 5;
      grid-row-end: 2;
      grid-column-end: 6;
      border-left: 1px solid #e0e2e2;
    }

    .menu {
      display: block;
      grid-row-start: 2;
      grid-column-start: 2;
      grid-row-end: 3;
      grid-column-end: 3;
      width: 2.5rem;
      border: none;
      background-color: transparent;
      color: #1f1f1f;
      cursor: pointer;
    }
  }
`;
