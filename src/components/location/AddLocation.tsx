import { HiOutlineX } from "react-icons/hi";
import { ImagePlaceholder } from "../../assets/ImageExporter";
import { ButtonRightContainer, GreenFont } from "../../styles/Global.styled";
import {
  MainWithoutBackgroundCenter,
  Wrapper,
} from "../../styles/PageLayout.styled";
import { PrimaryButton } from "../common/Button.styled";
import Footer from "../footer/Footer";
import Map from "../map/Map";
import Navigation from "../navigation/Navigation";
import { FormInput, FormInputTitle } from "../style/SignIn.styled";
import {
  AddLocationContainer,
  AddLocationImage,
  AddLocationMap,
  AddLocationTitle,
  DeleteUploadedImage,
  UploadImageContainer,
} from "./AddLocation.styled";

const AddLocation = () => {
  return (
    <Wrapper>
      <Navigation />
      <MainWithoutBackgroundCenter>
        <AddLocationContainer>
          <AddLocationTitle>
            Add a new <GreenFont>location</GreenFont>.
          </AddLocationTitle>
          <AddLocationImage alt="" src={ImagePlaceholder} />
          <UploadImageContainer>
            <PrimaryButton>UPLOAD IMAGE</PrimaryButton>
            <DeleteUploadedImage>
              <HiOutlineX color="white" size={26} />
            </DeleteUploadedImage>
          </UploadImageContainer>
          <AddLocationMap>{<Map />}</AddLocationMap>
          <FormInputTitle>Location</FormInputTitle>
          <FormInput />
          <ButtonRightContainer>
            <PrimaryButton>ADD NEW</PrimaryButton>
          </ButtonRightContainer>
        </AddLocationContainer>
      </MainWithoutBackgroundCenter>
      <Footer />
    </Wrapper>
  );
};

export default AddLocation;
