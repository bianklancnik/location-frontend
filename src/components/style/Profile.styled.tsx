import styled from "styled-components";
import { StockImage } from "../../assets/ImageExporter";

export const ProfileInfoContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
`;

export const ProfilePersonName = styled.div`
  font-size: 34px;
  padding: 0 34px;
`;

export const ProfileTitle = styled.div`
  font-size: 24px;
  font-weight: 400;
`;

export const ProfileImageGrid = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
  @media screen and (min-width: 768px) {
    gap: 1.3%;
  }
`;

export const GridItem = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(
      90deg,
      rgba(102, 159, 137, 0.6) 50%,
      rgba(159, 193, 129, 0.6) 128%
    ),
    url(${(props: any) => props.image});
  @media screen and (min-width: 768px) {
    width: 24%;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 2%;
  }
`;

export const GridItemUpload = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-image: url(${(props: any) => props.image});
  position: relative;
  @media screen and (min-width: 768px) {
    width: 24%;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 2%;
  }
`;

GridItemUpload.defaultProps = {
  image: StockImage,
};

export const EmptyGridItem = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EditUpload = styled.div`
  border-radius: 4px;
  background-color: var(--primary);
  width: 40px;
  height: 40px;
  position: absolute;
  left: 2%;
  top: 3%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: var(--dark);
  }
`;

export const DeleteUpload = styled.div`
  border-radius: 4px;
  background: var(--delete);
  width: 40px;
  height: 40px;
  position: absolute;
  right: 2%;
  top: 3%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: var(--delete-dark);
  }
`;
