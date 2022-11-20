import { Logo, WhiteLogoVector } from "../assets/ImageExporter";
import { FullWidthPrimaryButton } from "../components/common/Button.styled";
import {
  FormBottomContainer,
  FormBottomText,
  FormContainer,
  FormInput,
  FormInputTitle,
  FormText,
  FormTitle,
  LeftSideContainer,
  LogoLeft,
  LogoRight,
  MainDivider,
  RightSideContainer,
} from "../components/style/SignIn.styled";
import { StyledLink } from "../styles/Global.styled";

const SignIn = () => {
  return (
    <MainDivider>
      <LeftSideContainer>
        <StyledLink to="/">
          <LogoLeft alt="" src={Logo} />
        </StyledLink>
        <FormContainer>
          <FormTitle>Sign in</FormTitle>
          <FormText>
            Welcome back to Geotagger. We are glad that you are back.
          </FormText>
          <FormInputTitle>Email</FormInputTitle>
          <FormInput placeholder="example@net.com" />
          <FormInputTitle>Password</FormInputTitle>
          <FormInput type="password" />
          <FullWidthPrimaryButton>SIGN IN</FullWidthPrimaryButton>
          <FormBottomContainer>
            <FormBottomText>Do you want to create an account?</FormBottomText>
            <StyledLink to="/signup">Sign up</StyledLink>
          </FormBottomContainer>
        </FormContainer>
      </LeftSideContainer>
      <RightSideContainer>
        <LogoRight alt="" src={WhiteLogoVector} />
      </RightSideContainer>
    </MainDivider>
  );
};

export default SignIn;
