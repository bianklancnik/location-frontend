import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";
import { PrimaryButton } from "../components/common/Button.styled";
import Footer from "../components/footer/Footer";
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
import { AvatarSmall, GreenFont } from "../styles/Global.styled";
import {
  MainWithoutBackgroundSplit,
  Wrapper,
} from "../styles/PageLayout.styled";

const center = {
  lat: 46.0569465,
  lng: 14.505751499999974,
};

const Location = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "",
  });

  if (!isLoaded) {
    return <div>Map can not be loaded</div>;
  }

  return (
    <Wrapper>
      <Navigation />
      <MainWithoutBackgroundSplit>
        <LocationContainer>
          <LocationTitle>
            Take a <GreenFont>guess</GreenFont>!
          </LocationTitle>
          <LocationImage alt="" src="bled.jpg" />
          <LocationMap>
            <GoogleMap
              center={center}
              zoom={13}
              mapContainerStyle={{ width: "100%", height: "100%" }}
            ></GoogleMap>
          </LocationMap>
          <BottomInputContainer>
            <BottomInputErrorTitle>Error distance</BottomInputErrorTitle>
            <BottomInputLocationTitle>
              Guessed location
            </BottomInputLocationTitle>
            <BottomInputError disabled={true} />
            <BottomInputLocation disabled={true} />
          </BottomInputContainer>
          <PrimaryButton>GUESS</PrimaryButton>
        </LocationContainer>
        <LeaderboardContainer>
          <LeaderboardTitle>Leaderboard</LeaderboardTitle>
          <LeaderboardGrid>
            <LeaderboardItem>
              <LeaderboardItemLeft>
                <LeaderboardPlace>1</LeaderboardPlace>
                <AvatarSmall alt="" src="bled.jpg" />
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
                <AvatarSmall alt="" src="bled.jpg" />
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
