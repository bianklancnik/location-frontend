import { PrimaryButton } from "../components/common/Button.styled";
import Footer from "../components/footer/Footer";
import {
  HomeContainerMiddle,
  ImageGrid,
  HomeItem,
  HomeTitle,
  WelcomeContainer,
  WelcomeItem,
  WelcomeTitle,
  BackgroundImageGridItem,
  HomeButtonContainer,
} from "../components/style/Home.styled";
import Navigation from "../components/navigation/Navigation";
import { Main, Wrapper } from "../styles/PageLayout.styled";
import { MdLockOutline } from "react-icons/md";
import { StyledLink } from "../styles/Global.styled";

const Home = () => {
  return (
    <Wrapper>
      <Navigation />
      <Main>
        <WelcomeContainer>
          <WelcomeTitle>Explore the world with Geotagger!</WelcomeTitle>
          <WelcomeItem>
            Geotagger is website that allows you to post picture and tag it on
            the map. Other user than try to locate it via Google Maps.
          </WelcomeItem>
          <StyledLink to="/signup">
            <PrimaryButton>SIGN UP</PrimaryButton>
          </StyledLink>
        </WelcomeContainer>
        <HomeContainerMiddle>
          <HomeTitle>Try yourself at Geotagger!</HomeTitle>
          <HomeItem>
            Try to guess the location of image by selecting position on the map.
            When you guess it, it gives you the error distance.
          </HomeItem>
        </HomeContainerMiddle>
        <ImageGrid>
          <BackgroundImageGridItem>
            <MdLockOutline color="white" size={40} />
          </BackgroundImageGridItem>
          <BackgroundImageGridItem>
            <MdLockOutline color="white" size={40} />
          </BackgroundImageGridItem>
          <BackgroundImageGridItem>
            <MdLockOutline color="white" size={40} />
          </BackgroundImageGridItem>
        </ImageGrid>
        <HomeButtonContainer>
          <StyledLink to="/signup">
            <PrimaryButton>SIGN UP</PrimaryButton>
          </StyledLink>
        </HomeButtonContainer>
      </Main>
      <Footer />
    </Wrapper>
  );
};

export default Home;
