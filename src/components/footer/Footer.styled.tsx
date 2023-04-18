import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 30px;
  font-size: 12px;
  height: 5px;
  background-color: var(--primary);
  @media screen and (min-width: 768px) {
    padding: 24px 60px;
    font-size: 16px;
  }
`;

export const Span = styled.div`
  color: white;
  text-align: right;
  width: 100%;
`;

export const FooterImage = styled.img`
  width: 20px;
  @media screen and (min-width: 768px) {
    width: 105px;
  }
`;
