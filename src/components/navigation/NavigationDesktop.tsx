import { BsPlus } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Avatar, Logo } from "../../assets/ImageExporter";
import { AvatarSmall, StyledLink } from "../../styles/Global.styled";
import { PrimaryButton } from "../common/Button.styled";
import {
  AvatarContainer,
  Divider,
  Item,
  ItemBold,
  LogoImage,
  PlusSign,
  RightSide,
} from "./Navigation.styled";

const NavigationDesktop = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("token");
  const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");

  return (
    <>
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
              <StyledLink to="/settings">Profile settings</StyledLink>
            </Item>
            <Item
              onClick={() => {
                localStorage.clear();
                window.location.reload();
              }}
            >
              <StyledLink to="/">Logout</StyledLink>
            </Item>
            <AvatarContainer>
              <StyledLink to="/profile">
                <AvatarSmall src={userInfo.avatar ? userInfo.avatar : Avatar} />
              </StyledLink>
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
    </>
  );
};

export default NavigationDesktop;
