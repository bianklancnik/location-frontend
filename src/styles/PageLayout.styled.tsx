import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  background-image: url("WorldMap.png");
  background-repeat: no-repeat;
  background-position: top right;
  flex: 1;
  padding: 50px;
`;

export const MainWithoutBackground = styled.main`
  flex: 1;
  padding: 50px;
`;

export const MainWithoutBackgroundGap = styled.main`
  flex: 1;
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const MainWithoutBackgroundSplit = styled.main`
  flex: 1;
  padding: 50px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;
