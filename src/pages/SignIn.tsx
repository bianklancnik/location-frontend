import { Logo, WhiteLogoVector } from "../assets/ImageExporter";
import LoginForm from "../components/forms/loginForm/LoginForm";
import {
  LeftSideContainer,
  LogoLeft,
  LogoRight,
  MainDivider,
  RightSideContainer,
} from "../components/style/SignIn.styled";
import { StyledLink } from "../styles/Global.styled";

const SignIn = ({ onLogIn }: any) => {
  return (
    <MainDivider>
      <LeftSideContainer>
        <StyledLink to="/">
          <LogoLeft alt="" src={Logo} />
        </StyledLink>
        <LoginForm onLogIn={onLogIn} />
      </LeftSideContainer>
      <RightSideContainer>
        <LogoRight alt="" src={WhiteLogoVector} />
      </RightSideContainer>
    </MainDivider>
  );
};

export default SignIn;
