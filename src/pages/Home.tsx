import {
  AlternativeButton,
  PrimaryButton,
} from "../components/common/Button.styled";
import Footer from "../components/footer/Footer";
import {
  HomeContainerMiddle,
  ImageGrid,
  HomeTitle,
  WelcomeContainer,
  WelcomeItem,
  WelcomeTitle,
  BackgroundImageGridItem,
  HomeButtonContainer,
  HomeContainerLeft,
  HomeItemMiddle,
  HomeItemLeft,
  Distance,
  ImageGridItem,
} from "../components/style/Home.styled";
import Navigation from "../components/navigation/Navigation";
import {
  Main,
  MainWithoutBackground,
  Wrapper,
} from "../styles/PageLayout.styled";
import { MdLockOutline } from "react-icons/md";
import { StyledLink } from "../styles/Global.styled";

const Home = () => {
  const isLoggedIn = true;

  return (
    <Wrapper>
      <Navigation />
      {isLoggedIn ? (
        <MainWithoutBackground>
          <HomeContainerLeft>
            <HomeTitle>Personal best guesses</HomeTitle>
            <HomeItemLeft>
              Your personal best guesses appear here. Go on and try to beat
              personal records or set a new one!
            </HomeItemLeft>
          </HomeContainerLeft>
          <ImageGrid>
            <BackgroundImageGridItem>
              <Distance>200 m</Distance>
            </BackgroundImageGridItem>
            <BackgroundImageGridItem>
              <Distance>200 m</Distance>
            </BackgroundImageGridItem>
            <BackgroundImageGridItem>
              <Distance>200 m</Distance>
            </BackgroundImageGridItem>
          </ImageGrid>
          <HomeButtonContainer>
            <StyledLink to="/signup">
              <AlternativeButton>LOAD MORE</AlternativeButton>
            </StyledLink>
          </HomeButtonContainer>
          <HomeContainerLeft>
            <HomeTitle>New locations</HomeTitle>
            <HomeItemLeft>
              New uploads from users. Try to guess all the locations by pressing
              on a picture.
            </HomeItemLeft>
          </HomeContainerLeft>
          <ImageGrid>
            <ImageGridItem alt="" src="bled.jpg" />
            <ImageGridItem alt="" src="bled.jpg" />
            <ImageGridItem alt="" src="bled.jpg" />
            <ImageGridItem alt="" src="bled.jpg" />
            <ImageGridItem alt="" src="bled.jpg" />
            <ImageGridItem alt="" src="bled.jpg" />
          </ImageGrid>
          <HomeButtonContainer>
            <StyledLink to="/signup">
              <AlternativeButton>LOAD MORE</AlternativeButton>
            </StyledLink>
          </HomeButtonContainer>
        </MainWithoutBackground>
      ) : (
        <Main>
          <WelcomeContainer>
            <WelcomeTitle>Explore the world with Geotagger!</WelcomeTitle>
            <WelcomeItem>
              Geotagger is website that allows you to post picture and tag it
              the map. Other user than try to locate it via Google Maps.
            </WelcomeItem>
            <StyledLink to="/signup">
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
          <HomeButtonContainer>
            <StyledLink to="/signup">
              <PrimaryButton>SIGN UP</PrimaryButton>
            </StyledLink>
          </HomeButtonContainer>
        </Main>
      )}
      <Footer />
    </Wrapper>
  );
};

export default Home;
