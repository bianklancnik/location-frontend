import styled from "styled-components";

export const NavigationContainer = styled.nav`
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.2);
  z-index: 20;
  background-color: white;
  @media screen and (min-width: 768px) {
    padding: 20px 50px;
  }
`;

export const RightSide = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Item = styled.div`
  color: var(--dark);
  width: 120px;
  margin: 10px auto 10px auto;
  font-size: 16px;
  text-align: center;
`;

export const Divider = styled.div`
  padding: 0 20px;
`;

export const ItemBold = styled.div`
  width: 60px;
  margin: 10px auto 10px auto;
  font-size: 16px;
  font-weight: 500;
  color: var(--dark);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AvatarContainer = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoImage = styled.img``;

export const MobileLink = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MobileLinkDivider = styled.div`
  margin-top: 5%;
`;

export const MobileNavWrapper = styled.div`
  padding: 0px;
  width: 100%;
`;

export const MobileNavUsername = styled.div`
  margin-left: 10%;
  width: 100%;
`;

export const PlusSign = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: var(--dark);
  }
`;
