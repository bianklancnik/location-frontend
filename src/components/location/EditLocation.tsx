import { useNavigate } from "react-router-dom";
import { StockImage } from "../../assets/ImageExporter";
import { GreenFont } from "../../styles/Global.styled";
import {
  MainWithoutBackgroundCenter,
  Wrapper,
} from "../../styles/PageLayout.styled";
import { PrimaryButton } from "../common/Button.styled";
import Footer from "../footer/Footer";
import Navigation from "../navigation/Navigation";
import {
  AddLocationContainer,
  AddLocationImage,
  AddLocationTitle,
} from "./AddLocation.styled";
import {
  EditLocationButtonContainer,
  EditLocationRightSide,
  EditLocationRightSideText,
  EditLocationText,
} from "./EditLocation.styled";

const EditLocation = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Navigation />
      <MainWithoutBackgroundCenter>
        <AddLocationContainer>
          <AddLocationTitle>
            Edit <GreenFont>location</GreenFont>.
          </AddLocationTitle>
          <AddLocationImage alt="" src={StockImage} />
          <EditLocationText>Location: Slovenija</EditLocationText>
          <EditLocationButtonContainer>
            <PrimaryButton>UPLOAD IMAGE</PrimaryButton>
            <EditLocationRightSide>
              <PrimaryButton>SAVE</PrimaryButton>
              <EditLocationRightSideText
                onClick={() => {
                  navigate("/profile");
                }}
              >
                Cancel
              </EditLocationRightSideText>
            </EditLocationRightSide>
          </EditLocationButtonContainer>
        </AddLocationContainer>
      </MainWithoutBackgroundCenter>
      <Footer />
    </Wrapper>
  );
};

export default EditLocation;
