import { useEffect } from "react";
import { AboutDiv, AboutCardDiv, FlexGrowDiv } from "./styles/Div.styled";
import { FaPodcast, FaBook, FaCogs } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  // initialize AOS (animation on scroll package)
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <AboutDiv>
      <h1>Hey, My Name is Zak</h1>
      <p>
        In late 2020 I decided to take a new career path and for all of 2021
        committed my full time to learning web development. In the past I used
        python for small hobby/fun projects and eventually brought that over
        more into my previous career. Realizing how much I loved learning and
        implementing new technologies I decided to pursue it full time.
      </p>

      <div data-aos="fade-up" data-aos-duration="1000">
        <AboutCardDiv data-aos="fade-up">
          <div>
            <FaBook />
          </div>
          <FlexGrowDiv>
            <h4>Life Long Learning</h4>
            <p>Never to late to learn a new tool or trick.</p>
          </FlexGrowDiv>
        </AboutCardDiv>

        <AboutCardDiv data-aos="fade-up">
          <div>
            <FaPodcast />
          </div>
          <FlexGrowDiv>
            <h4>Passion for the field</h4>
            <p>
              Listen to programming podcasts for fun and learning whats new.
            </p>
          </FlexGrowDiv>
        </AboutCardDiv>

        <AboutCardDiv data-aos="fade-up">
          <div>
            <FaCogs />
          </div>
          <FlexGrowDiv>
            <h4>Logic and Efficiency</h4>
            <p>I like the ideas and principles of programming.</p>
          </FlexGrowDiv>
        </AboutCardDiv>
      </div>
    </AboutDiv>
  );
}

export default About;
