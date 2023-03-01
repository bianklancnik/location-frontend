import { Avatar, StockImage } from "../assets/ImageExporter";
import { PrimaryButton } from "../components/common/Button.styled";
import Footer from "../components/footer/Footer";
import InitMap from "../components/map/InitMap";
import Navigation from "../components/navigation/Navigation";
import {
  BottomInputContainer,
  BottomInputError,
  BottomInputErrorTitle,
  BottomInputLocation,
  BottomInputLocationTitle,
  LeaderboardContainer,
  LeaderboardErrorDistance,
  LeaderboardGrid,
  LeaderboardGuessDate,
  LeaderboardItem,
  LeaderboardItemLeft,
  LeaderboardPersonName,
  LeaderboardPlace,
  LeaderboardText,
  LeaderboardTitle,
  LocationContainer,
  LocationImage,
  LocationMap,
  LocationTitle,
} from "../components/style/Location.styled";
import {
  AvatarSmall,
  ButtonLeftContainer,
  GreenFont,
} from "../styles/Global.styled";
import {
  MainWithoutBackgroundSplit,
  Wrapper,
} from "../styles/PageLayout.styled";

const Location = () => {
  //current solution
  const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");

  return (
    <Wrapper>
      <Navigation />
      <MainWithoutBackgroundSplit>
        <LocationContainer>
          <LocationTitle>
            Take a <GreenFont>guess</GreenFont>!
          </LocationTitle>
          <LocationImage alt="" src={StockImage} />
          <LocationMap>{<InitMap />}</LocationMap>
          <BottomInputContainer>
            <BottomInputErrorTitle>Error distance</BottomInputErrorTitle>
            <BottomInputLocationTitle>
              Guessed location
            </BottomInputLocationTitle>
            <BottomInputError disabled={true} />
            <BottomInputLocation disabled={true} />
          </BottomInputContainer>
          <ButtonLeftContainer>
            <PrimaryButton>GUESS</PrimaryButton>
          </ButtonLeftContainer>
        </LocationContainer>
        <LeaderboardContainer>
          <LeaderboardTitle>Leaderboard</LeaderboardTitle>
          <LeaderboardGrid>
            <LeaderboardItem>
              <LeaderboardItemLeft>
                <LeaderboardPlace>1</LeaderboardPlace>
                <AvatarSmall src={userInfo.avatar ? userInfo.avatar : Avatar} />
                <LeaderboardText>
                  <LeaderboardPersonName>Bian Klančnik</LeaderboardPersonName>
                  <LeaderboardGuessDate>23.11.2022</LeaderboardGuessDate>
                </LeaderboardText>
              </LeaderboardItemLeft>
              <LeaderboardErrorDistance>50m</LeaderboardErrorDistance>
            </LeaderboardItem>
            <LeaderboardItem>
              <LeaderboardItemLeft>
                <LeaderboardPlace>2</LeaderboardPlace>
                <AvatarSmall src={userInfo.avatar ? userInfo.avatar : Avatar} />
                <LeaderboardText>
                  <LeaderboardPersonName>Bian Klančnik</LeaderboardPersonName>
                  <LeaderboardGuessDate>22.11.2022</LeaderboardGuessDate>
                </LeaderboardText>
              </LeaderboardItemLeft>
              <LeaderboardErrorDistance>250m</LeaderboardErrorDistance>
            </LeaderboardItem>
          </LeaderboardGrid>
        </LeaderboardContainer>
      </MainWithoutBackgroundSplit>
      <Footer />
    </Wrapper>
  );
};

export default Location;
