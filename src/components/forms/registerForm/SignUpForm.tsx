import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { signup } from "../../../api/auth";
import { RegisterData } from "../../../interfaces/auth.interface";
import { AvatarLarge, StyledLinkPrimary } from "../../../styles/Global.styled";
import { FullWidthPrimaryButton } from "../../common/Button.styled";
import { FormError } from "../../style/SignIn.styled";
import {
  EyeIcon,
  FormBottomContainer,
  FormBottomText,
  FormContainer,
  FormHalfContainer,
  FormInput,
  FormInputHalf,
  FormInputTitle,
  FormInputTitleHalf,
  FormText,
  FormTitle,
  PasswordContainer,
} from "../../style/SignUp.styled";

const SignUpForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [pass, setPass] = useState<boolean>(true);
  const [confirmPass, setConfirmPass] = useState<boolean>(true);
  const navigate = useNavigate();
  const [error, setError] = useState<any | null>();

  const onSubmit = handleSubmit((data: RegisterData) => {
    if (
      data.email === "" ||
      data.firstName === "" ||
      data.lastName === "" ||
      data.password === "" ||
      data.confirmPassword === ""
    ) {
      setError("Fields must not be empty");
    } else {
      if (data.password !== data.confirmPassword) {
        setError("Passwords do not match");
      } else {
        signUp(data);
      }
    }
  });

  const signUp = async (data: RegisterData) => {
    const result = await signup("/auth/register", data);
    if (result.request) {
      const data = JSON.parse(result.request.response);
      localStorage.setItem("token", data.access_token);
      reset();
      navigate("/sign-in");
    } else {
      setError(result.message);
    }
  };

  return (
    <FormContainer onSubmit={onSubmit}>
      <FormTitle>Sign up</FormTitle>
      <FormText>
        Your name will appear on posts and your public profile.
      </FormText>
      <AvatarLarge />
      <FormInputTitle>Email</FormInputTitle>
      <FormInput {...register("email")} placeholder="example@net.com" />
      <FormHalfContainer>
        <FormInputTitleHalf>First Name</FormInputTitleHalf>
        <FormInputTitleHalf>Last Name</FormInputTitleHalf>
        <FormInputHalf {...register("firstName")} placeholder="Jacob" />
        <FormInputHalf {...register("lastName")} placeholder="Jones" />
      </FormHalfContainer>
      <FormInputTitle>Password</FormInputTitle>
      <PasswordContainer>
        <FormInput
          {...register("password")}
          type={`${pass ? "password" : "text"}`}
        />
        <EyeIcon
          onClick={() => {
            setPass(!pass);
          }}
          size={20}
          color="grey"
        />
      </PasswordContainer>
      <FormInputTitle>Confirm password</FormInputTitle>
      <PasswordContainer>
        <FormInput
          {...register("confirmPassword")}
          type={`${confirmPass ? "password" : "text"}`}
        />
        <EyeIcon
          onClick={() => {
            setConfirmPass(!confirmPass);
          }}
          size={20}
          color="grey"
        />
      </PasswordContainer>
      {error && <FormError>{error}</FormError>}
      <FullWidthPrimaryButton>SIGN UP</FullWidthPrimaryButton>
      <FormBottomContainer>
        <FormBottomText>Already have an account?</FormBottomText>
        <StyledLinkPrimary to="/sign-in">Sign in</StyledLinkPrimary>
      </FormBottomContainer>
    </FormContainer>
  );
};

export default SignUpForm;
