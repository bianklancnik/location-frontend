import { Logo, WhiteLogoVector } from "../assets/ImageExporter";
import { PrimaryButton } from "../components/common/Button.styled";
import {
  FormContainer,
  FormHalfContainer,
  FormInput,
  FormInputHalf,
  FormInputTitle,
  FormInputTitleHalf,
  FormText,
  FormTitle,
  LeftSideContainer,
  LogoLeft,
  LogoRight,
  MainDivider,
  RightSideContainer,
  FormBottomContainer,
  FormBottomText,
} from "../components/style/SignUp.styled";
import { AvatarLarge, StyledLink } from "../styles/Global.styled";

const SignUp = () => {
  return (
    <MainDivider>
      <LeftSideContainer>
        <LogoLeft alt="" src={Logo} />
        <FormContainer>
          <FormTitle>Sign up</FormTitle>
          <FormText>
            Your name will appear on posts and your public profle.
          </FormText>
          <AvatarLarge alt="" src="logo192.png" />
          <FormInputTitle>Email</FormInputTitle>
          <FormInput placeholder="example@net.com" />
          <FormHalfContainer>
            <FormInputTitleHalf>First Name</FormInputTitleHalf>
            <FormInputTitleHalf>Last Name</FormInputTitleHalf>
            <FormInputHalf placeholder="Jacob" />
            <FormInputHalf placeholder="Jones" />
          </FormHalfContainer>
          <FormInputTitle>Password</FormInputTitle>
          <FormInput type="password" />
          <FormInputTitle>Confirm password</FormInputTitle>
          <FormInput type="password" />
          <PrimaryButton>SIGN UP</PrimaryButton>
          <FormBottomContainer>
            <FormBottomText>Already have an account?</FormBottomText>
            <StyledLink to="/">Sign in</StyledLink>
          </FormBottomContainer>
        </FormContainer>
      </LeftSideContainer>
      <RightSideContainer>
        <LogoRight alt="" src={WhiteLogoVector} />
      </RightSideContainer>
    </MainDivider>
  );
};

export default SignUp;
