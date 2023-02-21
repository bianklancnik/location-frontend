import { Logo, WhiteLogoVector } from "../assets/ImageExporter";
import ChangePasswordForm from "../components/forms/passwordForm/ChangePasswordForm";
import {
  LeftSideContainer,
  LogoLeft,
  LogoRight,
  MainDivider,
  RightSideContainer,
} from "../components/style/SignIn.styled";
import { StyledLink } from "../styles/Global.styled";

const ChangePassword = () => {
  return (
    <MainDivider>
      <LeftSideContainer>
        <StyledLink to="/">
          <LogoLeft alt="" src={Logo} />
        </StyledLink>
        <ChangePasswordForm />
      </LeftSideContainer>
      <RightSideContainer>
        <LogoRight alt="" src={WhiteLogoVector} />
      </RightSideContainer>
    </MainDivider>
  );
};

export default ChangePassword;
