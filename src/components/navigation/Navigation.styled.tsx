import styled from "styled-components";

export const NavigationContainer = styled.nav`
  padding: 20px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.2);
  height: 30px;
  z-index: 20;
  background-color: white;
`;

export const RightSide = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Item = styled.div``;

export const Divider = styled.div`
  padding: 0 20px;
`;

export const ItemBold = styled.div`
  width: 60px;
  margin: 10px auto 10px auto;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
