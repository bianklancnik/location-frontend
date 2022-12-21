import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { update } from "../../../api/auth";
import { UpdateUser } from "../../../interfaces/user.interface";
// import { useNavigate } from "react-router-dom";
import { AvatarLarge, StyledLink } from "../../../styles/Global.styled";
import {
  FullWidthPrimaryButton,
  HalfWidthDarkButton,
  HalfWidthPrimaryButton,
  PrimaryButton,
} from "../../common/Button.styled";
import {
  SettingsButtonContainer,
  SettingsButtonText,
  SettingsFieldContainer,
  SettingsFormContainer,
  SettingsImageContainer,
  SettingsText,
} from "../../style/Settings.styled";
import { FormError } from "../../style/SignIn.styled";
import {
  EyeIcon,
  FormHalfContainer,
  FormInput,
  FormInputHalf,
  FormInputTitle,
  FormInputTitleHalf,
  PasswordContainer,
} from "../../style/SignUp.styled";

const SettingsForm = () => {
  const [visible, setVisible] = useState<boolean>(true);
  const { register, handleSubmit, reset } = useForm();
  const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
  const navigate = useNavigate();
  const [error, setError] = useState<any | null>();
  const [changePass, setChangePass] = useState<boolean>(false);
  const [changeImg, setChangeImg] = useState<boolean>(false);

  const onSubmit = handleSubmit((data: UpdateUser) => {
    if (!data) {
      setError("At least one field must be filled out to submit the form");
    } else if (data.newPassword !== data.confNewPassword) {
      setError("Passwords do not match!");
    } else {
      updateUserInfo(data);
    }
  });

  const updateUserInfo = async (data: UpdateUser) => {
    const token = localStorage.getItem("token");
    if (token) {
      const result = await update("/user/update", data, userInfo.id, token);
      if (result.request) {
        const data = result.request.response;
        reset();
        localStorage.setItem("userInfo", data);
        navigate("/profile");
      } else {
        setError(result.message);
      }
    }
  };

  return (
    <>
      {!changePass && !changeImg && (
        <SettingsFormContainer onSubmit={onSubmit}>
          <SettingsText>Change your information.</SettingsText>
          <SettingsFieldContainer>
            <FormInputTitle>Email</FormInputTitle>
            <FormInput {...register("email")} placeholder={userInfo.email} />
          </SettingsFieldContainer>
          <FormHalfContainer>
            <FormInputTitleHalf>First Name</FormInputTitleHalf>
            <FormInputTitleHalf>Last Name</FormInputTitleHalf>
            <FormInputHalf
              {...register("firstName")}
              placeholder={userInfo.firstName}
            />
            <FormInputHalf
              {...register("lastName")}
              placeholder={userInfo.lastName}
            />
          </FormHalfContainer>
          <SettingsButtonContainer>
            <HalfWidthDarkButton
              onClick={() => {
                setChangePass(!changePass);
              }}
            >
              Change password
            </HalfWidthDarkButton>
            <HalfWidthPrimaryButton
              onClick={() => {
                setChangeImg(!changeImg);
              }}
            >
              Change profile picture
            </HalfWidthPrimaryButton>
          </SettingsButtonContainer>
          {error && <FormError>{error}</FormError>}
          <SettingsButtonContainer>
            <PrimaryButton>SUBMIT</PrimaryButton>
            <StyledLink to="/profile">Cancel</StyledLink>
          </SettingsButtonContainer>
        </SettingsFormContainer>
      )}
      {changePass && !changeImg && (
        <SettingsFormContainer onSubmit={onSubmit}>
          <SettingsText>Change your information.</SettingsText>
          <SettingsFieldContainer>
            <FormInputTitle>Current password</FormInputTitle>
            <PasswordContainer>
              <FormInput
                {...register("currPassword")}
                type={`${visible ? "password" : "text"}`}
              />
              <EyeIcon
                onClick={() => {
                  setVisible(!visible);
                }}
                size={20}
                color="grey"
              />
            </PasswordContainer>
          </SettingsFieldContainer>
          <SettingsFieldContainer>
            <FormInputTitle>New password</FormInputTitle>
            <PasswordContainer>
              <FormInput
                {...register("newPassword")}
                type={`${visible ? "password" : "text"}`}
              />
              <EyeIcon
                onClick={() => {
                  setVisible(!visible);
                }}
                size={20}
                color="grey"
              />
            </PasswordContainer>
          </SettingsFieldContainer>
          <SettingsFieldContainer>
            <FormInputTitle>Confirm new password</FormInputTitle>
            <PasswordContainer>
              <FormInput
                {...register("confNewPassword")}
                type={`${visible ? "password" : "text"}`}
              />
              <EyeIcon
                onClick={() => {
                  setVisible(!visible);
                }}
                size={20}
                color="grey"
              />
            </PasswordContainer>
          </SettingsFieldContainer>
          {error && <FormError>{error}</FormError>}
          <SettingsButtonContainer>
            <PrimaryButton>SUBMIT</PrimaryButton>
            <SettingsButtonText
              onClick={() => {
                setChangePass(!changePass);
              }}
            >
              Cancel
            </SettingsButtonText>
          </SettingsButtonContainer>
        </SettingsFormContainer>
      )}
      {!changePass && changeImg && (
        <SettingsFormContainer onSubmit={onSubmit}>
          <SettingsText>Change your profile photo.</SettingsText>
          <SettingsImageContainer>
            <AvatarLarge />
          </SettingsImageContainer>
          <FullWidthPrimaryButton>UPLOAD NEW IMAGE</FullWidthPrimaryButton>
          {error && <FormError>{error}</FormError>}
          <SettingsButtonContainer>
            <PrimaryButton>SUBMIT</PrimaryButton>
            <SettingsButtonText
              onClick={() => {
                setChangeImg(!changeImg);
              }}
            >
              Cancel
            </SettingsButtonText>
          </SettingsButtonContainer>
        </SettingsFormContainer>
      )}
    </>
  );
};

export default SettingsForm;
