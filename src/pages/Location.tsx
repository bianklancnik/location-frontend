import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  getdistancesbylocationid,
  getlocationbyid,
  guesslocation,
  islocationguessed,
} from "../api/location";
import { Avatar } from "../assets/ImageExporter";
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
  LeaderboardAvatar,
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
import { EmptyGridItem } from "../components/style/Profile.styled";
import {
  LeaderboardType,
  LocationType,
} from "../interfaces/location.interface";
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
  const [address, setAddress] = useState<string>("");
  const [coords, setCoords] = useState<any>();
  const [location, setLocation] = useState<LocationType>();
  const [distance, setDistance] = useState<number>(-1);
  const [leaderboard, setLeaderboard] = useState<LeaderboardType[]>([]);
  const [token, setToken] = useState<string>();
  const { state } = useLocation();
  const { id } = state;

  const onMarkerChange = (address: string, loc: any) => {
    setAddress(address);
    setCoords(loc);
  };

  const getLocationInfo = async () => {
    if (id) {
      const result = await getlocationbyid(`/location/${id}`);
      if (result.request) {
        const data = result.request.response;
        const response = JSON.parse(data);
        setLocation(response);
      }
    }
  };

  const isLocationGuessedByUser = async () => {
    const loadToken = localStorage.getItem("token");
    if (loadToken) {
      setToken(loadToken);
      const result = await islocationguessed(`/distance/user/${id}`, loadToken);
      if (result.request) {
        const data = result.request.response;
        const response = JSON.parse(data);
        setDistance(response);
      }
    }
  };

  const getLeaderboard = async () => {
    if (id) {
      const result = await getdistancesbylocationid(`/distance/${id}`);
      if (result.request) {
        const data = result.request.response;
        const response = JSON.parse(data);
        calculateDates(response);
      }
    }
  };

  const calculateDates = (leaderboardData: LeaderboardType[]) => {
    const now = new Date();
    const lb = leaderboardData.map((entry: LeaderboardType) => {
      const date = new Date(entry.createdAt);
      const diffTime = Math.abs(now.valueOf() - date.valueOf());
      const minutes = Math.floor(diffTime / 60000);
      const hours = Math.floor(minutes / 60);
      if (hours < 24) {
        if (hours === 1) {
          entry.createdAt = `${hours} hour ago`;
        } else {
          entry.createdAt = `${hours} hours ago`;
        }
        return entry;
      }
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();

      entry.createdAt = `${day}. ${month}. ${year}`;
      return entry;
    });
    setLeaderboard(lb);
  };

  const showLeaderboard = () => {
    if (Object.keys(leaderboard).length !== 0) {
      return leaderboard.map((entry, i: number) => {
        return (
          <LeaderboardItem key={i}>
            <LeaderboardItemLeft>
              <LeaderboardPlace rank={i + 1}>{i + 1}</LeaderboardPlace>
              <LeaderboardAvatar>
                <AvatarSmall
                  src={entry.user.avatar ? entry.user.avatar : Avatar}
                />
              </LeaderboardAvatar>
              <LeaderboardText>
                <LeaderboardPersonName>
                  {entry.user.firstName} {entry.user.lastName}
                </LeaderboardPersonName>
                <LeaderboardGuessDate>{entry.createdAt}</LeaderboardGuessDate>
              </LeaderboardText>
            </LeaderboardItemLeft>
            <LeaderboardErrorDistance>
              {entry.distance} km
            </LeaderboardErrorDistance>
          </LeaderboardItem>
        );
      });
    } else {
      return <EmptyGridItem>No guesses.</EmptyGridItem>;
    }
  };

  const guessLocation = async () => {
    if (address && coords && token) {
      const { lat, lng } = coords;
      const data = { lat: lat, lon: lng };
      const result = await guesslocation(`/distance/${id}`, data, token);
      if (result.request) {
        const data = result.request.response;
        const response = JSON.parse(data);
        setDistance(response);
      }
    }
  };

  useEffect(() => {
    isLocationGuessedByUser();
    getLocationInfo();
    getLeaderboard();
  }, []);

  return (
    <Wrapper>
      <Navigation />
      <MainWithoutBackgroundSplit>
        <LocationContainer>
          <LocationTitle>
            Take a <GreenFont>guess</GreenFont>!
          </LocationTitle>
          <LocationImage alt="" src={location?.img} />
          <LocationMap>
            {<InitMap onMarkerChange={onMarkerChange} />}
          </LocationMap>
          <BottomInputContainer>
            <BottomInputErrorTitle>Error distance (km)</BottomInputErrorTitle>
            <BottomInputLocationTitle>
              Guessed location
            </BottomInputLocationTitle>
            <BottomInputError value={distance > -1 ? distance : ""} disabled />
            <BottomInputLocation value={address} disabled />
          </BottomInputContainer>
          <ButtonLeftContainer>
            {distance > -1 ? (
              <BottomInputLocationTitle>
                Location already guessed!
              </BottomInputLocationTitle>
            ) : (
              <PrimaryButton
                type="button"
                onClick={() => {
                  guessLocation();
                }}
              >
                GUESS
              </PrimaryButton>
            )}
          </ButtonLeftContainer>
        </LocationContainer>
        <LeaderboardContainer>
          <LeaderboardTitle>Leaderboard</LeaderboardTitle>
          <LeaderboardGrid>{showLeaderboard()}</LeaderboardGrid>
        </LeaderboardContainer>
      </MainWithoutBackgroundSplit>
      <Footer />
    </Wrapper>
  );
};

export default Location;
