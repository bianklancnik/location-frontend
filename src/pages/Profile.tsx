import { FaPen } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { AlternativeButton } from "../components/common/Button.styled";
import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation";
import { Distance } from "../components/style/Home.styled";
import {
  DeleteUpload,
  EditUpload,
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

  return (
    <Wrapper>
      <Navigation />
      <MainWithoutBackgroundGap>
        <ProfileInfoContainer>
          <AvatarLarge />
          <ProfilePersonName>Jacob Jones</ProfilePersonName>
        </ProfileInfoContainer>
        <ProfileTitle>My best guesses</ProfileTitle>
        <ProfileImageGrid>
          <GridItem>
            <Distance>200 m</Distance>
          </GridItem>
          <GridItem>
            <Distance>200 m</Distance>
          </GridItem>
          <GridItem>
            <Distance>200 m</Distance>
          </GridItem>
        </ProfileImageGrid>
        <ButtonCenterContainer>
          <AlternativeButton>LOAD MORE</AlternativeButton>
        </ButtonCenterContainer>
        <ProfileTitle>My uploads</ProfileTitle>
        <ProfileImageGrid>
          <GridItemUpload>
            <EditUpload
              onClick={() => {
                navigate("/edit-location");
              }}
            >
              <FaPen color="white" size={18} />
            </EditUpload>
            <DeleteUpload>
              <HiOutlineX color="white" size={26} />
            </DeleteUpload>
          </GridItemUpload>
          <GridItemUpload>
            <EditUpload
              onClick={() => {
                navigate("/edit-location");
              }}
            >
              <FaPen color="white" size={18} />
            </EditUpload>
            <DeleteUpload>
              <HiOutlineX color="white" size={26} />
            </DeleteUpload>
          </GridItemUpload>
        </ProfileImageGrid>
        <ButtonCenterContainer>
          <AlternativeButton>LOAD MORE</AlternativeButton>
        </ButtonCenterContainer>
      </MainWithoutBackgroundGap>
      <Footer />
    </Wrapper>
  );
};

export default Profile;
