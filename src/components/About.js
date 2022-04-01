import { AboutDiv, AboutCardDiv, FlexGrowDiv } from "./styles/Div.styled";
import { FaPodcast, FaBook, FaCogs } from "react-icons/fa";

function About() {
  return (
    <AboutDiv>
      <h1>Here Is A Little Bit About Me</h1>
      <p role="paragraph">
        I am a self taught full stack Javascript developer with a strong
        background in web development and mobile development through React
        Native. I would love to be part of a team to provide value as well as
        improve myself as a developer. <br />
        <br /> In late 2020 I decided to take a new career path and for most of
        2021 committed my full time to learning web development. In the past I
        have used python for small hobby and personal projects and eventually
        brought that over into my previous career. Realizing how much I loved
        learning, problem solving and implementing new technologies I decided to
        pursue it as a full time career.
        <br /> <br />I am currently working in a freelance position working on
        websites and React Native Android and iOS apps.
      </p>

      <div data-aos="fade-up" data-aos-duration="1000">
        <AboutCardDiv
          data-aos="fade-up"
          data-aos-duration="1250"
          data-aos-delay="500"
        >
          <div>
            <FaBook role="img" />
          </div>
          <FlexGrowDiv>
            <h4>Life Long Learning</h4>
            <p role="paragraph">Never too late to learn a new tool or trick.</p>
          </FlexGrowDiv>
        </AboutCardDiv>

        <AboutCardDiv
          data-aos="fade-up"
          data-aos-duration="1250"
          data-aos-delay="500"
        >
          <div>
            <FaPodcast role="img" />
          </div>
          <FlexGrowDiv>
            <h4>Passion for the Field</h4>
            <p role="paragraph">
              Listen to programming podcasts for fun and learning whats new.
            </p>
          </FlexGrowDiv>
        </AboutCardDiv>

        <AboutCardDiv
          data-aos="fade-up"
          data-aos-duration="1250"
          data-aos-delay="500"
        >
          <div>
            <FaCogs role="img" />
          </div>
          <FlexGrowDiv>
            <h4>Logic and Efficiency</h4>
            <p role="paragraph">
              I like the ideas and principles of programming.
            </p>
          </FlexGrowDiv>
        </AboutCardDiv>
      </div>
    </AboutDiv>
  );
}

export default About;
