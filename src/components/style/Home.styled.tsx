import styled from "styled-components";

export const WelcomeContainer = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 5% 0 15% 0;
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    align-items: flex-start;
    width: 35%;
  }
`;

export const WelcomeTitle = styled.div`
  font-size: 34px;
  font-weight: 500;
  color: var(--primary);
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 64px;
    text-align: left;
  }
`;

export const WelcomeItem = styled.div`
  text-align: center;
  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

export const HomeContainerMiddle = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 4%;
`;

export const HomeTitle = styled.div`
  font-size: 32px;
  color: var(--primary);
`;

export const HomeItemMiddle = styled.div`
  width: 100%;
  text-align: center;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`;

export const HomeContainerLeft = styled.div`
  display: flex;
  flex-flow: column;
  gap: 10px;
  margin-bottom: 4%;
  @media screen and (max-width: 768px) {
    margin-top: 5%;
  }
`;

export const HomeItemLeft = styled.div`
  text-align: left;
`;

export const ImageGrid = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 2%;
  @media screen and (min-width: 768px) {
    flex-flow: row wrap;
  }
`;

export const BackgroundImageGridItem = styled.div`
  height: 200px;
  width: 100%;
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
    url(${(props: any) => props.image});
  margin-bottom: 2%;
  @media screen and (min-width: 768px) {
    height: 280px;
    width: 32%;
  }
`;

export const Distance = styled.div`
  color: #fff;
  font-weight: 700;
  font-size: 30px;
`;

export const ImageGridItem = styled.div`
  width: 100%;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2%;
  transition: all 0.2s ease-in-out;
  filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.15));
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 32%;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const ImageGridImg = styled.img`
  width: 100%;
  height: 280px;
  image-rendering: auto;
  object-fit: cover;
  border-radius: 4px;
`;

export const HomeButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5% 0 3% 0;
`;
