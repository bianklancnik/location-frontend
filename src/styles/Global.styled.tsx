import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLinkPrimary = styled(Link)`
  text-decoration: none;
  color: var(--primary);
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--dark);
`;

export const AvatarLarge = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
`;

export const AvatarSmall = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
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
