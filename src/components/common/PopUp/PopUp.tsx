import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "../Button.styled";
import {
  PopUpContainer,
  PopUpText,
  PopUpTitle,
  PopUpWrapper,
} from "./PopUp.styled";

const PopUp = () => {
  const navigate = useNavigate();

  return (
    <PopUpWrapper>
      <PopUpContainer>
        <PopUpTitle>Information changed</PopUpTitle>
        <PopUpText>Your settings are saved.</PopUpText>
        <PrimaryButton
          onClick={() => {
            navigate("/profile");
          }}
        >
          CLOSE
        </PrimaryButton>
      </PopUpContainer>
    </PopUpWrapper>
  );
};

export default PopUp;
