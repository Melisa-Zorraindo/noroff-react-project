import styled from "styled-components";

export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 2fr 1fr 4rem;
  padding: 1rem 0;
  row-gap: 2rem;

  img {
    padding-left: 1rem;
  }

  label,
  div {
    display: flex;
    align-items: flex-end;
  }

  div {
    position: relative;
  }

  div :nth-child(1) {
    padding: 0.5rem 0.75rem;
    position: absolute;
    bottom: 45%;
    left: 35%;
    background-color: #14aaa1;
    font-weight: 700;
    border-radius: 50%;
    color: #fff;
  }

  div :nth-child(2) {
    align-items: flex-end;
    font-size: 2.5rem;
    z-index: 1;
  }

  input {
    width: 75%;
    height: 2rem;
    border: 2px solid #e0e2e2;
    border-radius: 4px;

    &:focus {
      outline: 2px solid #14aaa1;
    }
  }

  nav {
    background-color: #14aaa1;
    background-color: #e0e2e2;
    grid-column: -1/1;
  }

  ul {
    display: flex;
  }

  li {
    padding: 0.5rem 0;
    list-style-type: none;
    text-transform: uppercase;
    transition: 0.5s;

    &:hover {
      background-color: #14aaa1;
      cursor: pointer;

      a {
        color: #fff;
      }
    }
  }

  .active {
    background-color: #14aaa1;
    color: #fff;
  }

  a {
    padding: 0.5rem 1.5rem;
    text-decoration: none;
    color: #1f1f1f;
  }
`;
