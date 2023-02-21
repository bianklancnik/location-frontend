import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateAvatar } from "../../../api/auth";
import { generateImageURL } from "../../../api/s3";
import { Avatar } from "../../../assets/ImageExporter";
import { AvatarLarge } from "../../../styles/Global.styled";
import {
  FullWidthPrimaryButton,
  PrimaryButton,
} from "../../common/Button.styled";
import {
  SettingsButtonContainer,
  SettingsButtonText,
  SettingsFormContainer,
  SettingsImageContainer,
  SettingsText,
} from "../../style/Settings.styled";
import { FormError } from "../../style/SignIn.styled";

const SettingsFormAvatar = ({ onCancel }: any) => {
  const [error, setError] = useState<any | null>();
  const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
  const [image, setImage] = useState<any>(Avatar);
  const inputFile = useRef<any>(null);
  const navigate = useNavigate();

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

  const changeAvatar = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const result = await updateAvatar(
          "/user/update/avatar",
          image,
          userInfo.id,
          token
        );
        if (result.request) {
          const data = result.request.response;
          localStorage.setItem("userInfo", data);
          navigate("/profile");
        }
      }
    } catch (error) {
      return error;
    }
  };

  return (
    <SettingsFormContainer>
      <SettingsText>Change your profile photo.</SettingsText>
      <SettingsImageContainer>
        <input
          type="file"
          id="avatar"
          ref={inputFile}
          style={{ display: "none" }}
          onChange={() => uploadImage()}
        />
        <AvatarLarge src={image ? image : userInfo.avatar} />
      </SettingsImageContainer>
      <FullWidthPrimaryButton
        type="button"
        onClick={() => {
          inputFile.current.click();
        }}
      >
        UPLOAD NEW IMAGE
      </FullWidthPrimaryButton>
      {error && <FormError>{error}</FormError>}
      <SettingsButtonContainer>
        <PrimaryButton type="button" onClick={() => changeAvatar()}>
          SUBMIT
        </PrimaryButton>
        <SettingsButtonText
          onClick={() => {
            onCancel();
          }}
        >
          Cancel
        </SettingsButtonText>
      </SettingsButtonContainer>
    </SettingsFormContainer>
  );
};

export default SettingsFormAvatar;
