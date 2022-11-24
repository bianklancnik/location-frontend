import { FaPen } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";
import { AlternativeButton } from "../components/common/Button.styled";
import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation";
import { Distance, ImageGrid } from "../components/style/Home.styled";
import {
  DeleteUpload,
  EditUpload,
  GridItem,
  GridItemUpload,
  ProfileInfoContainer,
  ProfilePersonName,
  ProfileTitle,
} from "../components/style/Profile.styled";
import { AvatarLarge, ButtonCenterContainer } from "../styles/Global.styled";
import { MainWithoutBackgroundGap, Wrapper } from "../styles/PageLayout.styled";

const Profile = () => {
  return (
    <Wrapper>
      <Navigation />
      <MainWithoutBackgroundGap>
        <ProfileInfoContainer>
          <AvatarLarge alt="" src="bled.jpg" />
          <ProfilePersonName>Jacob Jones</ProfilePersonName>
        </ProfileInfoContainer>
        <ProfileTitle>My best guesses</ProfileTitle>
        <ImageGrid>
          <GridItem>
            <Distance>200 m</Distance>
          </GridItem>
          <GridItem>
            <Distance>200 m</Distance>
          </GridItem>
          <GridItem>
            <Distance>200 m</Distance>
          </GridItem>
          <GridItem>
            <Distance>200 m</Distance>
          </GridItem>
        </ImageGrid>
        <ButtonCenterContainer>
          <AlternativeButton>LOAD MORE</AlternativeButton>
        </ButtonCenterContainer>
        <ProfileTitle>My uploads</ProfileTitle>
        <ImageGrid>
          <GridItemUpload>
            <EditUpload>
              <FaPen color="white" size={18} />
            </EditUpload>
            <DeleteUpload>
              <HiOutlineX color="white" size={26} />
            </DeleteUpload>
          </GridItemUpload>
        </ImageGrid>
        <ButtonCenterContainer>
          <AlternativeButton>LOAD MORE</AlternativeButton>
        </ButtonCenterContainer>
      </MainWithoutBackgroundGap>
      <Footer />
    </Wrapper>
  );
};

export default Profile;
