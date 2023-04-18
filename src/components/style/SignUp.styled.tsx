import styled from "styled-components";
import { BsEyeFill } from "react-icons/bs";
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
  gap: 8px;
  @media screen and (min-width: 768px) {
    max-width: 75%;
  }
`;

export const FormTitle = styled.div`
  font-size: 48px;
  font-weight: 500;
`;

export const FormText = styled.div`
  text-align: center;
`;

export const FormInputTitle = styled.div`
  text-align: left;
  font-weight: 500;
  font-size: 12px;
  width: 100%;
`;
export const FormInput = styled.input`
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.42);
  box-sizing: border-box;

  color: black;

  padding: 2%;
  width: 100%;
  height: 35px;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px var(--dark);
  }
`;

export const FormInputTitleHalf = styled.div`
  text-align: left;
  font-weight: 500;
  font-size: 12px;
  width: 48%;
`;

export const FormInputHalf = styled.input`
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.42);
  box-sizing: border-box;

  color: black;

  padding: 2%;
  width: 48%;
  height: 35px;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px var(--dark);
  }
`;

export const FormHalfContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 8px;
`;

export const PasswordContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const FormBottomContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

export const FormBottomText = styled.div``;

export const EyeIcon = styled(BsEyeFill)`
  position: absolute;
  right: 2%;
  top: 20%;
  cursor: pointer;
  &:focus {
    color: var(--dark);
  }
`;
