import { Logo, WhiteLogoVector } from "../assets/ImageExporter";
import ForgotPasswordForm from "../components/forms/passwordForm/ForgotPasswordForm";
import {
  LeftSideContainer,
  LogoLeft,
  LogoRight,
  MainDivider,
  RightSideContainer,
} from "../components/style/SignIn.styled";
import { StyledLink } from "../styles/Global.styled";

const ForgotPassword = () => {
  return (
    <MainDivider>
      <LeftSideContainer>
        <StyledLink to="/">
          <LogoLeft alt="" src={Logo} />
        </StyledLink>
        <ForgotPasswordForm />
      </LeftSideContainer>
      <RightSideContainer>
        <LogoRight alt="" src={WhiteLogoVector} />
      </RightSideContainer>
    </MainDivider>
  );
};

export default ForgotPassword;
