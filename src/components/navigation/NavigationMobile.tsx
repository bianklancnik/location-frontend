import { slide as Menu } from "react-burger-menu";
import { MdArrowForwardIos } from "react-icons/md";
import { Avatar, Logo } from "../../assets/ImageExporter";
import {
  ArrowLink,
  ArrowLinkFull,
  AvatarSmall,
  StyledLink,
} from "../../styles/Global.styled";
import {
  FullWidthAlternativeButton,
  FullWidthPrimaryButton,
} from "../common/Button.styled";
import {
  LogoImage,
  MobileLink,
  MobileLinkDivider,
  MobileNavUsername,
  MobileNavWrapper,
  PlusSign,
} from "./Navigation.styled";
import { BsPlus } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const NavigationMobile = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("token");
  const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");

  return (
    <>
      {isLoggedIn && (
        <PlusSign
          onClick={() => {
            navigate("/add-location");
          }}
        >
          <BsPlus color="white" size={30} />
        </PlusSign>
      )}
      <StyledLink to="/">
        <LogoImage alt="" src={Logo} />
      </StyledLink>
      {isLoggedIn ? (
        <Menu right>
          <MobileNavWrapper>
            <MobileLink>
              <ArrowLinkFull to="/profile">
                <AvatarSmall src={userInfo.avatar ? userInfo.avatar : Avatar} />
                <MobileNavUsername>
                  {userInfo.firstName} {userInfo.lastName}
                </MobileNavUsername>
              </ArrowLinkFull>
            </MobileLink>
            <MobileLinkDivider />
            <MobileLink>
              <ArrowLink to="/">Home</ArrowLink>
              <ArrowLink to="/">
                <MdArrowForwardIos color="black" />
              </ArrowLink>
            </MobileLink>
            <MobileLinkDivider />
            <MobileLink>
              <ArrowLink to="/settings">Profile settings</ArrowLink>
              <ArrowLink to="/settings">
                <MdArrowForwardIos color="black" />
              </ArrowLink>
            </MobileLink>
            <MobileLinkDivider />
            <MobileLink
              onClick={() => {
                localStorage.clear();
                window.location.reload();
              }}
            >
              <ArrowLink to="/">Logout</ArrowLink>
              <ArrowLink to="/">
                <MdArrowForwardIos color="black" />
              </ArrowLink>
            </MobileLink>
          </MobileNavWrapper>
        </Menu>
      ) : (
        <Menu right>
          <MobileNavWrapper>
            <MobileLink>
              <ArrowLink to="/">Home</ArrowLink>
              <ArrowLink to="/">
                <MdArrowForwardIos color="black" />
              </ArrowLink>
            </MobileLink>
            <MobileLinkDivider />
            <StyledLink to="/sign-in">
              <FullWidthAlternativeButton>SIGN IN</FullWidthAlternativeButton>
            </StyledLink>
            <MobileLinkDivider />
            <StyledLink to="/sign-up">
              <FullWidthPrimaryButton>SIGN UP</FullWidthPrimaryButton>
            </StyledLink>
          </MobileNavWrapper>
        </Menu>
      )}
    </>
  );
};

export default NavigationMobile;
