import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--primary);
`;

export const AvatarLarge = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
`;
