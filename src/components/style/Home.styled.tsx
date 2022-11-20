import styled from "styled-components";

export const WelcomeContainer = styled.div`
  display: flex;
  flex-flow: column;
  width: 35%;
  justify-content: flex-start;
  gap: 30px;
  padding: 5% 0 15% 0;
`;

export const WelcomeTitle = styled.div`
  font-size: 64px;
  font-weight: 500;
  color: var(--primary);
`;

export const WelcomeItem = styled.div``;

export const HomeContainerMiddle = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 4%;
`;

export const HomeTitle = styled.div`
  font-size: 32px;
  color: var(--primary);
`;

export const HomeItem = styled.div`
  width: 40%;
  text-align: center;
`;

export const ImageGrid = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
`;

export const BackgroundImageGridItem = styled.div`
  height: 250px;
  width: 32%;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-image: linear-gradient(
      90deg,
      rgba(102, 159, 137, 0.6) 50%,
      rgba(159, 193, 129, 0.6) 128%
    ),
    url("bled.jpg");
`;

export const HomeButtonContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: 5% 0 3% 0;
`;
