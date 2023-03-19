import styled from "styled-components";

export const ConformationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const ConformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 32px;
  gap: 16px;
  background: #ffffff;
  width: 30%;
  height: 20%;

  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  border-radius: 16px;
`;

export const ConformationTitle = styled.div`
  font-size: 32px;
`;

export const ConformationText = styled.div`
  font-size: 16px;
`;
