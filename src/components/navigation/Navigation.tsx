import { Logo } from "../../assets/ImageExporter";
import { PrimaryButton } from "../common/Button.style";
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
        <PrimaryButton>SIGN UP</PrimaryButton>
      </RightSide>
    </NavigationContainer>
  );
};

export default Navigation;
