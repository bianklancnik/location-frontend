import styled from "styled-components";

export const PopUpWrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const PopUpContainer = styled.div`
  width: 30%;
  height: 35%;
  -webkit-box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.49);
  -moz-box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.49);
  box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.49);
  border-radius: 4px;
  display: flex;
  flex-flow: column;
  justify-content: left;
  padding: 32px;
  gap: 28px;
  position: relative;
`;

export const PopUpTitle = styled.div`
  font-size: 34px;
`;

export const PopUpText = styled.div``;
