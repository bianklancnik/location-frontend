import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { forgotpw } from "../../../api/auth";
import { FullWidthPrimaryButton } from "../../common/Button.styled";
import {
  FormContainer,
  FormError,
  FormInput,
  FormInputTitle,
  FormText,
  FormTitle,
} from "../../style/SignIn.styled";

const ForgotPasswordForm = () => {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState<string | null>();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data: any) => {
    setError("");
    if (data.email === "") {
      setError("Please enter your email!");
    } else {
      localStorage.setItem("mail", data.email);
      resetPassword(data);
      navigate("/change-password");
    }
  });

  const resetPassword = async (data: any) => {
    await forgotpw("/user/password/forgot", data);
  };

  return (
    <FormContainer onSubmit={onSubmit}>
      <FormTitle>Reset password</FormTitle>
      <FormText>Enter your email to get a password reset link.</FormText>
      <FormInputTitle>Email</FormInputTitle>
      <FormInput {...register("email")} placeholder="example@net.com" />
      {error && <FormError>{error}</FormError>}
      <FullWidthPrimaryButton type="submit">SEND</FullWidthPrimaryButton>
    </FormContainer>
  );
};

export default ForgotPasswordForm;
