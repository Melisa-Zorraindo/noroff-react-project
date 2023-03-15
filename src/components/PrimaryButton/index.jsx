import { StyledPrimaryButton } from "./styles";

export default function PrimaryButton({ text, onClick }) {
  return <StyledPrimaryButton onClick={onClick}>{text}</StyledPrimaryButton>;
}
