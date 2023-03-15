import { StyledSecondaryButton } from "./styles";

export default function SecondaryButton({ text, onClick }) {
  return (
    <StyledSecondaryButton onClick={onClick}>{text}</StyledSecondaryButton>
  );
}
