import { Logo } from "../../assets/ImageExporter";
import { StyledLink } from "../../styles/Global.styled";
import { PrimaryButton } from "../common/Button.styled";
import {
  Divider,
  ItemBold,
  NavigationContainer,
  RightSide,
} from "./Navigation.styled";

const Navigation = () => {
  return (
    <NavigationContainer>
      <img alt="" src={Logo} />
      <RightSide>
        <ItemBold>Sign in</ItemBold>
        <Divider>or</Divider>
        <StyledLink to="/signup">
          <PrimaryButton>SIGN UP</PrimaryButton>
        </StyledLink>
      </RightSide>
    </NavigationContainer>
  );
};

export default Navigation;
