import { MdLockOutline } from "react-icons/md";
import { PrimaryButton } from "../components/common/Button.styled";
import Footer from "../components/footer/Footer";
import AllLocations from "../components/location/AllLocations";
import BestGuesses from "../components/location/BestGuesses";
import Navigation from "../components/navigation/Navigation";
import {
  BackgroundImageGridItem,
  HomeContainerLeft,
  HomeContainerMiddle,
  HomeItemLeft,
  HomeItemMiddle,
  HomeTitle,
  ImageGrid,
  WelcomeContainer,
  WelcomeItem,
  WelcomeTitle,
} from "../components/style/Home.styled";
import { ButtonCenterContainer, StyledLink } from "../styles/Global.styled";
import {
  Main,
  MainWithoutBackground,
  Wrapper,
} from "../styles/PageLayout.styled";

const Home = () => {
  const token = localStorage.getItem("token");

  return (
    <Wrapper>
      <Navigation />
      {token ? (
        <MainWithoutBackground>
          <HomeContainerLeft>
            <HomeTitle>Personal best guesses</HomeTitle>
            <HomeItemLeft>
              Your personal best guesses appear here. Go on and try to beat
              personal records or set a new one!
            </HomeItemLeft>
          </HomeContainerLeft>
          <BestGuesses isHome={true} />
          <HomeContainerLeft>
            <HomeTitle>New locations</HomeTitle>
            <HomeItemLeft>
              New uploads from users. Try to guess all the locations by pressing
              on a picture.
            </HomeItemLeft>
          </HomeContainerLeft>
          <AllLocations />
        </MainWithoutBackground>
      ) : (
        <Main>
          <WelcomeContainer>
            <WelcomeTitle>Explore the world with Geotagger!</WelcomeTitle>
            <WelcomeItem>
              Geotagger is website that allows you to post picture and tag it
              the map. Other user than try to locate it via Google Maps.
            </WelcomeItem>
            <StyledLink to="/sign-up">
              <PrimaryButton>SIGN UP</PrimaryButton>
            </StyledLink>
          </WelcomeContainer>
          <HomeContainerMiddle>
            <HomeTitle>Try yourself at Geotagger!</HomeTitle>
            <HomeItemMiddle>
              Try to guess the location of image by selecting position on the
              map. When you guess it, it gives you the error distance.
            </HomeItemMiddle>
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
          <ButtonCenterContainer>
            <StyledLink to="/sign-up">
              <PrimaryButton>SIGN UP</PrimaryButton>
            </StyledLink>
          </ButtonCenterContainer>
        </Main>
      )}
      <Footer />
    </Wrapper>
  );
};

export default Home;
