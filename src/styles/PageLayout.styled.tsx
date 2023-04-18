import styled from "styled-components";
import { WorldMap } from "../assets/ImageExporter";

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  background-image: url(${WorldMap});
  background-repeat: no-repeat;
  background-position: top right;
  flex: 1;
  padding: 50px;
`;

export const MainWithoutBackground = styled.main`
  flex: 1;
  padding: 25px;
  @media screen and (min-width: 768px) {
    padding: 50px;
  }
`;

export const MainWithoutBackgroundCenter = styled.main`
  flex: 1;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    padding: 50px;
  }
`;

export const MainWithoutBackgroundGap = styled.main`
  flex: 1;
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  @media screen and (min-width: 768px) {
    padding: 50px;
  }
`;

export const MainWithoutBackgroundSplit = styled.main`
  flex: 1;
  padding: 25px;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    flex-flow: row wrap;
    padding: 50px;
  }
`;
