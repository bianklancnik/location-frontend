import styled from "styled-components";

export const LocationContainer = styled.div`
  width: 65%;
  display: flex;
  flex-flow: column;
  gap: 10px;
`;

export const LocationTitle = styled.div`
  font-size: 34px;
  font-weight: 400;
  letter-spacing: 0.25px;
  text-align: left;
  width: 100%;
`;

export const LocationImage = styled.img`
  height: 300px;
  border-radius: 4px;
  object-fit: cover;
`;

export const LocationMap = styled.div`
  border-radius: 4px;
  height: 220px;
`;

export const BottomInputContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

export const BottomInputErrorTitle = styled.div`
  width: 25%;
`;

export const BottomInputError = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.23);
  box-sizing: border-box;

  color: black;

  padding: 2%;
  width: 25%;
  height: 35px;
  border-radius: 4px;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px var(--dark);
  }
`;

export const BottomInputLocationTitle = styled.div`
  width: 72%;
`;

export const BottomInputLocation = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.23);
  box-sizing: border-box;

  color: black;

  padding: 2%;
  width: 72%;
  height: 35px;
  border-radius: 4px;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px var(--dark);
  }
`;

export const LeaderboardContainer = styled.div`
  width: 34%;
`;

export const LeaderboardTitle = styled.div`
  font-size: 34px;
  margin-bottom: 8px;
`;

export const LeaderboardGrid = styled.div`
  display: flex;
  flex-flow: column;
  gap: 10px;
`;

export const LeaderboardItem = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
`;

export const LeaderboardItemLeft = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
  width: 230px;
`;

export const LeaderboardPlace = styled.div`
  width: 27px;
  height: 27px;

  /* Gradient orange */
  background: linear-gradient(41.75deg, #fe7f2d 22.78%, #fcca46 87.18%);
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export const LeaderboardText = styled.div``;

export const LeaderboardPersonName = styled.div``;

export const LeaderboardGuessDate = styled.div`
  font-size: 12px;
`;

export const LeaderboardErrorDistance = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: var(--primary);
`;
