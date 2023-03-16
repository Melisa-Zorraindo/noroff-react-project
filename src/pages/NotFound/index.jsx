import { useEffect } from "react";
import { StyledPage } from "../pageStyles";
import Feedback from "../../components/Feedback";

export default function NotFound() {
  useEffect(() => {
    document.title = "Techtopia | 404 Not Found";
  }, []);

  return (
    <StyledPage>
      <Feedback title={"oops... we couldn't find the page"} />
    </StyledPage>
  );
}
