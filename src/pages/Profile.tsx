import { useEffect, useState } from "react";
import { FaPen } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import {
  deletelocation,
  getuserbestguesses,
  getuserlocations,
} from "../api/location";
import { Avatar } from "../assets/ImageExporter";
import { AlternativeButton } from "../components/common/Button.styled";
import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation";
import {
  BestGuessesType,
  LocationType,
} from "../interfaces/location.interface";
import { Distance } from "../components/style/Home.styled";
import {
  DeleteUpload,
  EditUpload,
  EmptyGridItem,
  GridItem,
  GridItemUpload,
  ProfileImageGrid,
  ProfileInfoContainer,
  ProfilePersonName,
  ProfileTitle,
} from "../components/style/Profile.styled";
import { AvatarLarge, ButtonCenterContainer } from "../styles/Global.styled";
import { MainWithoutBackgroundGap, Wrapper } from "../styles/PageLayout.styled";

const Profile = () => {
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
  const [locations, setLocations] = useState<LocationType[]>([]);
  const [bestGuesses, setBestGuesses] = useState<BestGuessesType[]>([]);
  const [token, setToken] = useState<string>();

  const getUserLocationsAndBestGuesses = async () => {
    const loadToken = localStorage.getItem("token");
    if (loadToken) {
      setToken(loadToken);
      const result = await getuserlocations("/location/user", loadToken);
      if (result.request) {
        const data = result.request.response;
        const response = JSON.parse(data);
        setLocations(response);
      }
      const resultGuess = await getuserbestguesses(
        "/distance/user/best",
        loadToken
      );
      if (resultGuess.request) {
        const data = resultGuess.request.response;
        const response = JSON.parse(data);
        setBestGuesses(response);
      }
    }
  };

  const deleteUserLocation = async (id: number) => {
    if (token) {
      try {
        const result = await deletelocation(`/location/${id}`, token);
        if (result.request) {
          alert("Location deleted!");
          getUserLocationsAndBestGuesses();
        }
      } catch (error) {
        return error;
      }
    }
  };

  const editUserLocation = async (id: number) => {
    navigate("/edit-location", {
      state: { id: id },
    });
  };

  useEffect(() => {
    getUserLocationsAndBestGuesses();
  }, []);

  const showBestGuesses = () => {
    if (Object.keys(bestGuesses).length !== 0) {
      return bestGuesses.map((guess) => {
        return (
          <GridItem key={guess.location.id} image={guess.location.img}>
            <Distance>{guess.distance} m</Distance>
          </GridItem>
        );
      });
    } else {
      return <EmptyGridItem>No locations to display</EmptyGridItem>;
    }
  };

  const showUserLocations = () => {
    if (Object.keys(locations).length !== 0) {
      return locations.map((location) => {
        return (
          <GridItemUpload key={location.id} image={location.img}>
            <EditUpload
              onClick={() => {
                editUserLocation(location.id);
              }}
            >
              <FaPen color="white" size={18} />
            </EditUpload>
            <DeleteUpload
              onClick={() => {
                deleteUserLocation(location.id);
              }}
            >
              <HiOutlineX color="white" size={26} />
            </DeleteUpload>
          </GridItemUpload>
        );
      });
    } else {
      return <EmptyGridItem>No locations to display</EmptyGridItem>;
    }
  };

  return (
    <Wrapper>
      <Navigation />
      <MainWithoutBackgroundGap>
        <ProfileInfoContainer>
          <AvatarLarge src={userInfo.avatar ? userInfo.avatar : Avatar} />
          <ProfilePersonName>
            {userInfo.firstName} {userInfo.lastName}
          </ProfilePersonName>
        </ProfileInfoContainer>
        <ProfileTitle>My best guesses</ProfileTitle>
        <ProfileImageGrid>{showBestGuesses()}</ProfileImageGrid>
        <ButtonCenterContainer>
          <AlternativeButton>LOAD MORE</AlternativeButton>
        </ButtonCenterContainer>
        <ProfileTitle>My uploads</ProfileTitle>
        <ProfileImageGrid>{showUserLocations()}</ProfileImageGrid>
        <ButtonCenterContainer>
          <AlternativeButton>LOAD MORE</AlternativeButton>
        </ButtonCenterContainer>
      </MainWithoutBackgroundGap>
      <Footer />
    </Wrapper>
  );
};

export default Profile;
