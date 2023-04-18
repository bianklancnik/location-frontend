import styled from "styled-components";

export const AddLocationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media screen and (min-width: 768px) {
    max-width: 70%;
  }
`;

export const AddLocationTitle = styled.div`
  font-size: 24px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

export const AddLocationImage = styled.img`
  height: 180px;
  width: 100%;
  border-radius: 4px;
  object-fit: cover;
  @media screen and (min-width: 768px) {
    height: 300px;
  }
`;

export const UploadImageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
`;

export const DeleteUploadedImage = styled.div`
  border-radius: 4px;
  background: var(--delete);
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: var(--delete-dark);
  }
`;

export const AddLocationMap = styled.div`
  width: 100%;
  height: 200px;
`;
