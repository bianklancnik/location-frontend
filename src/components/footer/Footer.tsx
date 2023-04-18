import { WhiteLogo, WhiteLogoVectorFilled } from "../../assets/ImageExporter";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { FooterContainer, FooterImage, Span } from "./Footer.styled";

const Footer = () => {
  const { width } = useWindowDimensions();
  const mobile = width! <= 768;
  return (
    <FooterContainer>
      <FooterImage alt="" src={mobile ? WhiteLogoVectorFilled : WhiteLogo} />
      <Span>All Rights Reserved | skillupmentor.com</Span>
    </FooterContainer>
  );
};

export default Footer;
