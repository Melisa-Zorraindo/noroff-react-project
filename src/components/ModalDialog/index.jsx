import { StyledModalDialog } from "./styles";
import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";
import { useLocation } from "react-router-dom";
import { useModalDialogStore } from "../../utils/stateManagement/modalDialog";
import { shallow } from "zustand/shallow";

export default function ModalDialog({ text }) {
  const { pathname } = useLocation();

  //modal dialog
  const { isVisible, hide } = useModalDialogStore(
    (state) => ({
      isVisible: state.isVisible,
      hide: state.hide,
    }),
    shallow
  );

  function handleClick() {
    hide();
  }

  return (
    <StyledModalDialog isVisible={isVisible}>
      <div className="modal-box">
        <div className="close-button-container">
          <button onClick={handleClick}>
            <span className="material-symbols-rounded">close</span>
          </button>
        </div>
        <h3>{text}</h3>
        {pathname === "/src/pages/Cart" && (
          <div className="buttons-container">
            <SecondaryButton text={"Yes"} />
            <PrimaryButton text={"No"} />
          </div>
        )}
      </div>
    </StyledModalDialog>
  );
}
