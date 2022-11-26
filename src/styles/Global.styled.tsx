import { Link } from "react-router-dom";
import styled from "styled-components";
import { StockImage } from "../assets/ImageExporter";

export const StyledLinkPrimary = styled(Link)`
  text-decoration: none;
  color: var(--primary);
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--dark);
`;

export const AvatarLarge = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-image: url(${StockImage});
  background-size: cover;
`;

export const AvatarSmall = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  background-image: url(${StockImage});
  background-size: cover;
`;

export const GreenFont = styled.span`
  color: var(--primary);
`;

export const ButtonRightContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ButtonLeftContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const ButtonCenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
