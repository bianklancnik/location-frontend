import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getlocationbyid, updatelocation } from "../../api/location";
import { generateImageURL } from "../../api/s3";
import { LocationType } from "../../interfaces/location.interface";
import { GreenFont } from "../../styles/Global.styled";
import {
  MainWithoutBackgroundCenter,
  Wrapper,
} from "../../styles/PageLayout.styled";
import { PrimaryButton } from "../common/Button.styled";
import ConformationPage from "../common/ConformationPage";
import Footer from "../footer/Footer";
import Navigation from "../navigation/Navigation";
import { FormError } from "../style/SignIn.styled";
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
  const { state } = useLocation();
  const { id } = state;
  const [image, setImage] = useState<any>();
  const inputFile = useRef<any>(null);
  const [error, setError] = useState<any | null>();
  const [location, setLocation] = useState<LocationType>();
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

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
      return null;
    }
  };

  const updateLocation = async () => {
    setError("");
    try {
      const token = localStorage.getItem("token");
      if (token && image && location) {
        const result = await updatelocation(
          `/location/${location.id}`,
          image,
          token
        );
        if (result.request) {
          setIsSubmitted(true);
        } else {
          setError(result.message);
        }
      } else {
        setError("No changes detected, please upload an image.");
      }
    } catch (error) {
      return error;
    }
  };

  const getLocationInfo = async () => {
    if (id) {
      const result = await getlocationbyid(`/location/${id}`);
      if (result.request) {
        const data = result.request.response;
        const response = JSON.parse(data);
        setLocation(response);
      }
    }
  };

  const onClose = () => {
    setIsSubmitted(false);
    getLocationInfo();
  };

  useEffect(() => {
    getLocationInfo();
  }, []);

  return (
    <>
      {isSubmitted ? (
        <ConformationPage
          title="Location updated!"
          text="Location was updated successfully."
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
                Edit <GreenFont>location</GreenFont>.
              </AddLocationTitle>
              <input
                type="file"
                id="avatar"
                ref={inputFile}
                style={{ display: "none" }}
                onChange={() => uploadImage()}
              />
              <AddLocationImage alt="" src={image ? image : location?.img} />
              <EditLocationText>
                Location: {location && location.address}
              </EditLocationText>
              {error && <FormError>{error}</FormError>}
              <EditLocationButtonContainer>
                <PrimaryButton
                  type="button"
                  onClick={() => {
                    inputFile.current.click();
                  }}
                >
                  UPLOAD IMAGE
                </PrimaryButton>
                <EditLocationRightSide>
                  <PrimaryButton type="button" onClick={() => updateLocation()}>
                    SAVE
                  </PrimaryButton>
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
      )}
    </>
  );
};

export default EditLocation;
