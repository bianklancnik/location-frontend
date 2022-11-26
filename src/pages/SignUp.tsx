import { Logo, WhiteLogoVector } from "../assets/ImageExporter";
import { FullWidthPrimaryButton } from "../components/common/Button.styled";
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
  EyeIcon,
  PasswordContainer,
} from "../components/style/SignUp.styled";
import {
  AvatarLarge,
  StyledLink,
  StyledLinkPrimary,
} from "../styles/Global.styled";

const SignUp = () => {
  return (
    <MainDivider>
      <LeftSideContainer>
        <StyledLink to="/">
          <LogoLeft alt="" src={Logo} />
        </StyledLink>
        <FormContainer>
          <FormTitle>Sign up</FormTitle>
          <FormText>
            Your name will appear on posts and your public profle.
          </FormText>
          <AvatarLarge />
          <FormInputTitle>Email</FormInputTitle>
          <FormInput placeholder="example@net.com" />
          <FormHalfContainer>
            <FormInputTitleHalf>First Name</FormInputTitleHalf>
            <FormInputTitleHalf>Last Name</FormInputTitleHalf>
            <FormInputHalf placeholder="Jacob" />
            <FormInputHalf placeholder="Jones" />
          </FormHalfContainer>
          <FormInputTitle>Password</FormInputTitle>
          <PasswordContainer>
            <FormInput type="password" />
            <EyeIcon size={20} color="grey" />
          </PasswordContainer>
          <FormInputTitle>Confirm password</FormInputTitle>
          <PasswordContainer>
            <FormInput type="password" />
            <EyeIcon size={20} color="grey" />
          </PasswordContainer>
          <FullWidthPrimaryButton>SIGN UP</FullWidthPrimaryButton>
          <FormBottomContainer>
            <FormBottomText>Already have an account?</FormBottomText>
            <StyledLinkPrimary to="/sign-in">Sign in</StyledLinkPrimary>
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
