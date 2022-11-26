import styled from "styled-components";

export const EditLocationText = styled.div`
  width: 100%;
  text-align: left;
`;

export const EditLocationButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

export const EditLocationRightSide = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
  width: 250px;
`;

export const EditLocationRightSideText = styled.div`
  cursor: pointer;
  &:hover {
    color: var(--delete);
  }
`;
