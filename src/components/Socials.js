import React from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { SocialsDiv } from "../components/styles/Div.styled";

function Socials() {
  return (
    <SocialsDiv>
      <a href="https://github.com/ZakMcRae">
        <FaGithub />
      </a>
      <a href="mailto:zakmcrae@gmail.com">
        <FaEnvelope />
      </a>
      <a href="https://www.linkedin.com/in/zachary-mcrae/">
        <FaLinkedinIn />
      </a>
    </SocialsDiv>
  );
}

export default Socials;
