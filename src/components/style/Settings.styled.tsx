import styled from "styled-components";

export const SettingsWrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const SettingsContainer = styled.div`
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
`;

export const SettingsFormContainer = styled.form`
  display: flex;
  flex-flow: column;
  height: 80%;
  gap: 28px;
  :last-of-type {
    margin-top: auto;
  }
`;

export const SettingsFieldContainer = styled.div`
  display: flex;
  flex-flow: column;
`;

export const SettingsImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SettingsTitle = styled.div`
  font-size: 34px;
`;

export const SettingsText = styled.div``;

export const SettingsButtonText = styled.div`
  cursor: pointer;
`;

export const SettingsButtonContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 20px;
  align-items: center;
  margin-top: auto;
`;
