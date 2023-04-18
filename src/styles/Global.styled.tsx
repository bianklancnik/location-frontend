import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLinkPrimary = styled(Link)`
  text-decoration: none;
  color: var(--primary);
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--dark);
  &:hover {
    color: var(--primary);
  }
`;

export const ArrowLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  color: var(--dark);
`;

export const ArrowLinkFull = styled(Link)`
  width: 100%;
  text-decoration: none;
  display: flex;
  align-items: center;
  color: var(--dark);
`;

export const AvatarLarge = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
`;

export const AvatarSmall = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  object-fit: cover;
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
  justify-content: flex-end;
  text-align: right;
  align-items: center;
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    text-align: left;
  }
`;

export const ButtonCenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
