import { BsPlus } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../assets/ImageExporter";
import { AvatarSmall, StyledLink } from "../../styles/Global.styled";
import { PrimaryButton } from "../common/Button.styled";
import {
  AvatarContainer,
  Divider,
  Item,
  ItemBold,
  LogoImage,
  NavigationContainer,
  PlusSign,
  RightSide,
} from "./Navigation.styled";

const Navigation = () => {
  const navigate = useNavigate();
  const isLoggedIn = true;

  return (
    <NavigationContainer>
      <StyledLink to="/">
        <LogoImage alt="" src={Logo} />
      </StyledLink>
      <RightSide>
        {isLoggedIn ? (
          <>
            <Item>
              <StyledLink to="/">Home</StyledLink>
            </Item>
            <Item>
              <StyledLink to="/profile">Profile settings</StyledLink>
            </Item>
            <Item>
              <StyledLink to="/sign-in">Logout</StyledLink>
            </Item>
            <AvatarContainer>
              <AvatarSmall alt="" src="bled.jpg" />
              <PlusSign
                onClick={() => {
                  navigate("/add-location");
                }}
              >
                <BsPlus color="white" size={30} />
              </PlusSign>
            </AvatarContainer>
          </>
        ) : (
          <>
            <StyledLink to="/sign-in">
              <ItemBold>Sign in</ItemBold>
            </StyledLink>
            <Divider>or</Divider>
            <StyledLink to="/sign-up">
              <PrimaryButton>SIGN UP</PrimaryButton>
            </StyledLink>
          </>
        )}
      </RightSide>
    </NavigationContainer>
  );
};

export default Navigation;
