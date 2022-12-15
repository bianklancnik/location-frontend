import { Logo, WhiteLogoVector } from "../assets/ImageExporter";
import SignUpForm from "../components/forms/registerForm/SignUpForm";
import {
  LeftSideContainer,
  LogoLeft,
  LogoRight,
  MainDivider,
  RightSideContainer,
} from "../components/style/SignUp.styled";
import { StyledLink } from "../styles/Global.styled";

const SignUp = () => {
  return (
    <MainDivider>
      <LeftSideContainer>
        <StyledLink to="/">
          <LogoLeft alt="" src={Logo} />
        </StyledLink>
        <SignUpForm />
      </LeftSideContainer>
      <RightSideContainer>
        <LogoRight alt="" src={WhiteLogoVector} />
      </RightSideContainer>
    </MainDivider>
  );
};

export default SignUp;
