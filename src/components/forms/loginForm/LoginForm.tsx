import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { login } from "../../../api/auth";
import { LogInData } from "../../../interfaces/auth.interface";
import { StyledLinkPrimary } from "../../../styles/Global.styled";
import { FullWidthPrimaryButton } from "../../common/Button.styled";
import {
  FormBottomContainer,
  FormBottomText,
  FormContainer,
  FormError,
  FormInput,
  FormInputTitle,
  FormText,
  FormTitle,
} from "../../style/SignIn.styled";

const LoginForm = ({ onLogIn }: any) => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const [error, setError] = useState<any | null>();

  const onSubmit = handleSubmit((data: LogInData) => {
    if (data.email === "" || data.password === "")
      setError("Fields must not be empty");
    else signIn(data);
  });

  const signIn = async (data: LogInData) => {
    const result = await login("/auth/login", data);
    if (result.request) {
      const data = JSON.parse(result.request.response);
      localStorage.setItem("token", data.access_token);
      reset();
      onLogIn();
      navigate("/profile");
    } else {
      setError(result.message);
    }
  };

  return (
    <FormContainer onSubmit={onSubmit}>
      <FormTitle>Sign in</FormTitle>
      <FormText>
        Welcome back to Geotagger. We are glad that you are back.
      </FormText>
      <FormInputTitle>Email</FormInputTitle>
      <FormInput {...register("email")} placeholder="example@net.com" />
      <FormInputTitle>Password</FormInputTitle>
      <FormInput {...register("password")} type="password" />
      {error && <FormError>{error}</FormError>}
      <FullWidthPrimaryButton type="submit">SIGN IN</FullWidthPrimaryButton>
      <FormBottomContainer>
        <FormBottomText>Do you want to create an account?</FormBottomText>
        <StyledLinkPrimary to="/sign-up">Sign up</StyledLinkPrimary>
      </FormBottomContainer>
    </FormContainer>
  );
};

export default LoginForm;
