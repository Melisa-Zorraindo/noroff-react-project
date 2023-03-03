import styled from "styled-components";

export const StyledPrimaryButton = styled.button`
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.neutral};
  background-color: ${({ theme }) => theme.color.highlight};
  border: none;
  cursor: pointer;
  padding: 0.5rem 0;
  text-align: center;

  &:hover {
    opacity: 0.9;
  }
`;
