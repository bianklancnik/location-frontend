import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { resetpassword } from "../../../api/auth";
import { FullWidthPrimaryButton } from "../../common/Button.styled";
import { FormError } from "../../style/SignIn.styled";
import {
  EyeIcon,
  FormContainer,
  FormInput,
  FormInputTitle,
  FormText,
  FormTitle,
  PasswordContainer,
} from "../../style/SignUp.styled";

const ChangePasswordForm = () => {
  const { register, handleSubmit } = useForm();
  const [visible, setVisible] = useState<boolean>(true);
  const [error, setError] = useState<string | null>();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data: any) => {
    setError("");
    if (data.token === "" || data.newPassword === "") {
      setError("Fields must not be empty!");
    } else {
      const email = localStorage.getItem("mail");
      if (email) {
        resetPassword(data, email);
      }
    }
  });

  const resetPassword = async (data: any, email: string) => {
    const result = await resetpassword("/user/password/reset", data, email);
    if (result.request) {
      const response = JSON.parse(result.request.response);
      if (response) {
        localStorage.removeItem("mail");
        navigate("/sign-in");
      }
      setError("Incorrect token provided!");
    }
  };

  return (
    <FormContainer onSubmit={onSubmit}>
      <FormTitle>Reset password</FormTitle>
      <FormText>
        A password reset token was sent to your email. Enter your new password
        and the token.
      </FormText>
      <FormInputTitle>Token</FormInputTitle>
      <FormInput {...register("token")} />
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
      {error && <FormError>{error}</FormError>}
      <FullWidthPrimaryButton type="submit">RESET</FullWidthPrimaryButton>
    </FormContainer>
  );
};

export default ChangePasswordForm;
