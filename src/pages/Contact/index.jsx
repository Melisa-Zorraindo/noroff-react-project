import { StyledContactPage } from "./styles";
import ContactForm from "../../components/ContactForm";

export default function Contact() {
  return (
    <StyledContactPage>
      <h1>Get in touch</h1>
      <ContactForm />
    </StyledContactPage>
  );
}
