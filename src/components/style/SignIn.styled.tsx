import styled from "styled-components";
import { MapImage } from "../../assets/ImageExporter";

export const MainDivider = styled.div`
  display: flex;
  flex-flow: row wrap;
  height: 100vh;
`;

export const LeftSideContainer = styled.div`
  width: 40%;
  display: flex;
  flex-flow: column;
`;

export const RightSideContainer = styled.div`
  width: 60%;
  background-size: cover;
  background-image: linear-gradient(
      90deg,
      rgba(102, 159, 137, 0.6) 50%,
      rgba(159, 193, 129, 0.6) 128%
    ),
    url(${MapImage});
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoLeft = styled.img`
  padding: 13px 50px;
`;

export const LogoRight = styled.img``;

export const FormContainer = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  gap: 10px;
`;

export const FormTitle = styled.div`
  font-size: 48px;
  font-weight: 500;
`;

export const FormText = styled.div`
  text-align: center;
  width: 90%;
`;

export const FormInputTitle = styled.div`
  text-align: left;
  font-weight: 500;
  font-size: 12px;
  width: 100%;
`;

export const FormInput = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.23);
  box-sizing: border-box;

  color: black;

  padding: 2%;
  width: 100%;
  height: 35px;
  border-radius: 4px;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px var(--dark);
  }
`;

export const FormError = styled.div`
  color: red;
  font-size: 12px;
  max-width: 100%;
`;

export const FormBottomContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

export const FormBottomText = styled.div``;

export const MobileFormContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`;
