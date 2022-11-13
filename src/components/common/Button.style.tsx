import styled from "styled-components";

export const PrimaryButton = styled.div`
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
  &:hover {
    background: var(--dark);
  }
`;
