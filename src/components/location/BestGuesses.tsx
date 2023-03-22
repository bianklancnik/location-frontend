import { useEffect, useState } from "react";
import { getuserbestguesses } from "../../api/location";
import { BestGuessesType } from "../../interfaces/location.interface";
import { ButtonCenterContainer } from "../../styles/Global.styled";
import { AlternativeButton } from "../common/Button.styled";
import {
  BackgroundImageGridItem,
  Distance,
  ImageGrid,
} from "../style/Home.styled";
import {
  EmptyGridItem,
  GridItem,
  ProfileImageGrid,
} from "../style/Profile.styled";

type BestGuessesRenderType = {
  isHome: boolean;
};

const BestGuesses = ({ isHome }: BestGuessesRenderType) => {
  const token = localStorage.getItem("token");
  const [bestGuesses, setBestGuesses] = useState<BestGuessesType[]>([]);
  const [pages, setPages] = useState<number>(1);

  const getUserBestGuesses = async () => {
    if (token) {
      let limit: number;
      if (isHome) {
        limit = pages * 3;
      } else {
        limit = pages * 4;
      }
      const result = await getuserbestguesses(
        `/distance/user/best?limit=${limit}`,
        token
      );
      if (result.request) {
        const data = result.request.response;
        const response = JSON.parse(data);
        setBestGuesses(response);
      }
    }
  };

  const showBestGuesses = () => {
    if (Object.keys(bestGuesses).length !== 0 && isHome) {
      return bestGuesses.map((guess) => {
        return (
          <BackgroundImageGridItem
            key={guess.location.id}
            image={guess.location.img}
          >
            <Distance>{guess.distance} m</Distance>
          </BackgroundImageGridItem>
        );
      });
    } else if (Object.keys(bestGuesses).length !== 0) {
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

  useEffect(() => {
    getUserBestGuesses();
  }, []);

  useEffect(() => {
    getUserBestGuesses();
  }, [pages]);

  const addPage = () => {
    setPages(pages + 1);
  };

  return (
    <>
      {isHome ? (
        <>
          <ImageGrid>{showBestGuesses()}</ImageGrid>
          <ButtonCenterContainer>
            <AlternativeButton type="button" onClick={addPage}>
              LOAD MORE
            </AlternativeButton>
          </ButtonCenterContainer>
        </>
      ) : (
        <>
          <ProfileImageGrid>{showBestGuesses()}</ProfileImageGrid>
          <ButtonCenterContainer>
            <AlternativeButton type="button" onClick={addPage}>
              LOAD MORE
            </AlternativeButton>
          </ButtonCenterContainer>
        </>
      )}
    </>
  );
};

export default BestGuesses;
