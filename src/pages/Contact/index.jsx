import { useEffect } from "react";
import { StyledContactPage } from "./styles";
import ContactForm from "../../components/ContactForm";

export default function Contact() {
  useEffect(() => {
    document.title = "Techtopia | Get in touch";
  }, []);

  return (
    <StyledContactPage>
      <h1>Get in touch</h1>
      <ContactForm />
    </StyledContactPage>
  );
}
