import axios from "axios";
import { useRef, useState } from "react";
import { HiOutlineX } from "react-icons/hi";
import { addlocation } from "../../api/location";
import { generateImageURL } from "../../api/s3";
import { ImagePlaceholder } from "../../assets/ImageExporter";
import { ButtonRightContainer, GreenFont } from "../../styles/Global.styled";
import {
  MainWithoutBackgroundCenter,
  Wrapper,
} from "../../styles/PageLayout.styled";
import { PrimaryButton } from "../common/Button.styled";
import ConformationPage from "../common/ConformationPage";
import Footer from "../footer/Footer";
import InitMap from "../map/InitMap";
import Navigation from "../navigation/Navigation";
import { FormError, FormInput, FormInputTitle } from "../style/SignIn.styled";
import {
  AddLocationContainer,
  AddLocationImage,
  AddLocationMap,
  AddLocationTitle,
  DeleteUploadedImage,
  UploadImageContainer,
} from "./AddLocation.styled";

const AddLocation = () => {
  const [error, setError] = useState<any | null>();
  const [address, setAddress] = useState<string>("");
  const [coords, setCoords] = useState<any>();
  const [image, setImage] = useState<any>(ImagePlaceholder);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const inputFile = useRef<any>(null);

  const uploadImage = async () => {
    try {
      const s3 = {
        headers: {
          "Content-Type": "image/png",
        },
      };
      const s3url = await generateImageURL();
      if (inputFile.current) {
        await axios.put(s3url, inputFile.current.files[0], s3);
        const imageUrl = s3url.split("?")[0];
        setImage(imageUrl);
      }
    } catch (error) {
      setError(error);
      return null;
    }
  };

  const addLocation = async () => {
    setError("");
    if (!address || image === ImagePlaceholder) {
      setError("Please choose an image and a location on the map.");
    } else {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const { lat, lng } = coords;
          const data = { address: address, lat: lat, lon: lng, img: image };
          const result = await addlocation("/location", data, token);
          if (result.request) {
            setIsSubmitted(true);
          }
        }
      } catch (error) {
        return error;
      }
    }
  };

  const onMarkerChange = (address: string, loc: any) => {
    setAddress(address);
    setCoords(loc);
  };

  const onClose = () => {
    setIsSubmitted(false);
  };

  return (
    <>
      {isSubmitted ? (
        <ConformationPage
          title="Location added!"
          text="New location was added successfully."
          onClose={() => {
            onClose();
          }}
        />
      ) : (
        <Wrapper>
          <Navigation />
          <MainWithoutBackgroundCenter>
            <AddLocationContainer>
              <AddLocationTitle>
                Add a new <GreenFont>location</GreenFont>.
              </AddLocationTitle>
              <input
                type="file"
                id="avatar"
                ref={inputFile}
                style={{ display: "none" }}
                onChange={() => uploadImage()}
              />
              <AddLocationImage alt="" src={image ? image : ImagePlaceholder} />
              <UploadImageContainer>
                <PrimaryButton
                  type="button"
                  onClick={() => {
                    inputFile.current.click();
                  }}
                >
                  UPLOAD IMAGE
                </PrimaryButton>
                <DeleteUploadedImage
                  onClick={() => {
                    setImage(ImagePlaceholder);
                  }}
                >
                  <HiOutlineX color="white" size={26} />
                </DeleteUploadedImage>
              </UploadImageContainer>
              <AddLocationMap>
                {<InitMap onMarkerChange={onMarkerChange} />}
              </AddLocationMap>
              <FormInputTitle>Location</FormInputTitle>
              <FormInput value={address} disabled />
              {error && <FormError>{error}</FormError>}
              <ButtonRightContainer>
                <PrimaryButton type="button" onClick={() => addLocation()}>
                  ADD NEW
                </PrimaryButton>
              </ButtonRightContainer>
            </AddLocationContainer>
          </MainWithoutBackgroundCenter>
          <Footer />
        </Wrapper>
      )}
    </>
  );
};

export default AddLocation;
