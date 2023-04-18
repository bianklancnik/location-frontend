import { Logo, WhiteLogoVector } from "../assets/ImageExporter";
import SignUpForm from "../components/forms/registerForm/SignUpForm";
import useWindowDimensions from "../components/hooks/useWindowDimensions";
import Navigation from "../components/navigation/Navigation";
import { MobileFormContainer } from "../components/style/SignIn.styled";
import {
  LeftSideContainer,
  LogoLeft,
  LogoRight,
  MainDivider,
  RightSideContainer,
} from "../components/style/SignUp.styled";
import { StyledLink } from "../styles/Global.styled";
import { Wrapper } from "../styles/PageLayout.styled";

const SignUp = () => {
  const { width } = useWindowDimensions();
  const mobile = width! <= 768;

  return (
    <>
      {mobile ? (
        <Wrapper>
          <Navigation />
          <MobileFormContainer>
            <SignUpForm />
          </MobileFormContainer>
        </Wrapper>
      ) : (
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
      )}
    </>
  );
};

export default SignUp;
