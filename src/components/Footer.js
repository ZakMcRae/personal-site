import { FooterDiv } from "./styles/Div.styled";
import Socials from "./Socials";

function Footer() {
  return (
    <FooterDiv>
      <div
        data-aos="fade-in"
        data-aos-duration="2000"
        data-aos-delay="500"
        data-aos-anchor-placement="top-bottom"
      >
        <Socials />
      </div>
    </FooterDiv>
  );
}

export default Footer;
