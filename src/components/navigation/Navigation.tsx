import { Logo } from "../../assets/ImageExporter";
import { AvatarSmall, StyledLink } from "../../styles/Global.styled";
import { PrimaryButton } from "../common/Button.styled";
import {
  AvatarContainer,
  Divider,
  Item,
  ItemBold,
  NavigationContainer,
  PlusSign,
  RightSide,
} from "./Navigation.styled";
import { BsPlus } from "react-icons/bs";

const Navigation = () => {
  const isLoggedIn = true;

  return (
    <NavigationContainer>
      <img alt="" src={Logo} />
      <RightSide>
        {isLoggedIn ? (
          <>
            <Item>
              <StyledLink to="/signin">Home</StyledLink>
            </Item>
            <Item>
              <StyledLink to="/signin">Profile settings</StyledLink>
            </Item>
            <Item>
              <StyledLink to="/signin">Logout</StyledLink>
            </Item>
            <AvatarContainer>
              <AvatarSmall alt="" src="bled.jpg" />
              <PlusSign>
                <BsPlus color="white" size={30} />
              </PlusSign>
            </AvatarContainer>
          </>
        ) : (
          <>
            <StyledLink to="/signin">
              <ItemBold>Sign in</ItemBold>
            </StyledLink>
            <Divider>or</Divider>
            <StyledLink to="/signup">
              <PrimaryButton>SIGN UP</PrimaryButton>
            </StyledLink>
          </>
        )}
      </RightSide>
    </NavigationContainer>
  );
};

export default Navigation;
