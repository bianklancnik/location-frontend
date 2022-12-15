import styled from "styled-components";

export const PrimaryButton = styled.button`
  border: 0;
  outline: 0;
  border-radius: 3px;
  color: #fff;
  background: var(--primary);
  width: 130px;
  height: 30px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  font-family: "Roboto";
  &:hover {
    background: var(--dark);
  }
`;

export const FullWidthPrimaryButton = styled.button`
  border: 0;
  outline: 0;
  border-radius: 3px;
  color: #fff;
  background: var(--primary);
  width: 100%;
  height: 30px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  font-family: "Roboto";
  &:hover {
    background: var(--dark);
  }
`;

export const AlternativeButton = styled.button`
  outline: 0;
  border-radius: 3px;
  color: var(--primary);
  background: #fff;
  border: 1px solid #669f89;
  border-radius: 4px;
  width: 130px;
  height: 30px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  font-family: "Roboto";
  &:hover {
    background: var(--primary);
    color: #fff;
  }
`;
