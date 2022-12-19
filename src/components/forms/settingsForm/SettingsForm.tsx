import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
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
  //   const [pass, setPass] = useState<boolean>(true);
  //   const [confirmPass, setConfirmPass] = useState<boolean>(true);
  const navigate = useNavigate();
  //   const [error, setError] = useState<any | null>();
  const [changePass, setChangePass] = useState<boolean>(false);
  const [changeImg, setChangeImg] = useState<boolean>(false);

  const onSubmit = handleSubmit(() => {
    reset();
    navigate("/profile");
  });

  return (
    <>
      {!changePass && !changeImg && (
        <SettingsFormContainer onSubmit={onSubmit}>
          <SettingsText>Change your information.</SettingsText>
          <SettingsFieldContainer>
            <FormInputTitle>Email</FormInputTitle>
            <FormInput {...register("email")} placeholder="example@net.com" />
          </SettingsFieldContainer>
          <FormHalfContainer>
            <FormInputTitleHalf>First Name</FormInputTitleHalf>
            <FormInputTitleHalf>Last Name</FormInputTitleHalf>
            <FormInputHalf {...register("firstName")} placeholder="Jacob" />
            <FormInputHalf {...register("lastName")} placeholder="Jones" />
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
