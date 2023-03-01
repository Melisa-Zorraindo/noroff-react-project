import styled from "styled-components";

export const StyledNavBar = styled.nav`
  border-top: 1px solid #e0e2e2;
  grid-column: -1/1;
  font-size: 1.1rem;

  ul {
    display: flex;
  }

  li {
    list-style-type: none;
    text-transform: uppercase;
    transition: 0.5s;

    &:hover {
      background-color: #4f4f4f;
      cursor: pointer;

      a {
        color: #fff;
      }
    }

    a {
      display: block;
      padding: 0.5rem 1.5rem;
      text-decoration: none;
      color: #1f1f1f;
    }
  }

  .active {
    background-color: #4f4f4f;
    color: #fff;
  }

  @media (max-width: 900px) {
    display: ${(props) => (props.isVisible ? "block" : "none")};
    ul {
      flex-direction: column;
    }
  }
`;
