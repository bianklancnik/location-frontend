import { WhiteLogo } from "../../assets/ImageExporter";
import { FooterContainer, Span } from "./Footer.styled";

const Footer = () => {
  return (
    <FooterContainer>
      <img alt="" src={WhiteLogo} />
      <Span>All Rights Reserved | skillupmentor.com</Span>
    </FooterContainer>
  );
};

export default Footer;
