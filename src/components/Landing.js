import { useEffect } from "react";
import { FullViewDiv } from "./styles/Div.styled";
import Socials from "../components/Socials";

import AOS from "aos";
import "aos/dist/aos.css";

function Landing() {
  useEffect(() => {
    // initialize AOS (animation on scroll package)
    AOS.init({ once: true });

    // wake up my heroku website in case user clicks it later
    // free tier of heroku sleeps until visited - can take 5-20s to startup
    fetch("https://young-eyrie-64675.herokuapp.com/", {
      mode: "no-cors",
    });
  }, []);

  return (
    <FullViewDiv>
      <div data-aos="fade-down" data-aos-duration="1250" data-aos-delay="1750">
        <Socials />
      </div>

      <h1 data-aos="zoom-out" data-aos-duration="2000">
        Zak McRae
      </h1>
      <h3 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
        Web Developer
      </h3>
    </FullViewDiv>
  );
}

export default Landing;
