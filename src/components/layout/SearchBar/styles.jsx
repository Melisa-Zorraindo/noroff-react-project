import styled from "styled-components";

export const StyledSearchBar = styled.div`
  border-left: ${({ theme }) =>
    `${theme.border.thickness} ${theme.border.type} ${theme.color.support}`};
  border-right: ${({ theme }) =>
    `${theme.border.thickness} ${theme.border.type} ${theme.color.support}`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  .input-wrapper {
    display: flex;
    align-items: center;
  }

  ul {
    list-style-type: none;
    position: absolute;
    top: 100%;
    background-color: ${({ theme }) => theme.color.support};
    width: 100%;
  }

  li {
    transition: 0.5s;
    padding: 0.5rem 1rem;

    &:hover {
      background-color: ${({ theme }) => theme.color.highlight};
      color: ${({ theme }) => theme.color.neutral};
      cursor: pointer;
    }
  }

  .selected {
    background-color: ${({ theme }) => theme.color.highlight};
    color: ${({ theme }) => theme.color.neutral};
  }

  .unselected {
    background-color: ${({ theme }) => theme.color.support};
    color: ${({ theme }) => theme.color.highlight};
  }

  @media (max-width: ${({ theme }) => theme.break.medium}) {
    grid-row-start: 2;
    grid-column-start: 3;
    grid-row-end: 3;
    grid-column-end: 6;
    border-right: none;
    border-top: ${({ theme }) =>
      `${theme.border.thickness} ${theme.border.type} ${theme.color.support}`};
  }
`;
