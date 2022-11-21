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
  &:hover {
    mask-image: linear-gradient(
      90deg,
      rgba(102, 159, 137, 0.6) 50%,
      rgba(159, 193, 129, 0.6) 128%
    );
  }
`;
