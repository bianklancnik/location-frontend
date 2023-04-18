import { Logo, WhiteLogoVector } from "../assets/ImageExporter";
import LoginForm from "../components/forms/loginForm/LoginForm";
import useWindowDimensions from "../components/hooks/useWindowDimensions";
import Navigation from "../components/navigation/Navigation";
import {
  LeftSideContainer,
  LogoLeft,
  LogoRight,
  MainDivider,
  MobileFormContainer,
  RightSideContainer,
} from "../components/style/SignIn.styled";
import { StyledLink } from "../styles/Global.styled";
import { Wrapper } from "../styles/PageLayout.styled";

const SignIn = ({ onLogIn }: any) => {
  const { width } = useWindowDimensions();
  const mobile = width! <= 768;

  return (
    <>
      {mobile ? (
        <Wrapper>
          <Navigation />
          <MobileFormContainer>
            <LoginForm onLogIn={onLogIn} />
          </MobileFormContainer>
        </Wrapper>
      ) : (
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
      )}
    </>
  );
};

export default SignIn;
