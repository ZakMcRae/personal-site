import { AboutDiv, AboutCardDiv, FlexGrowDiv } from "./styles/Div.styled";
import { FaPodcast, FaBook, FaCogs } from "react-icons/fa";

function About() {
  return (
    <AboutDiv>
      <h1>Here Is A Little Bit About Me</h1>
      <p role="paragraph">
        I am a full stack developer with a strong background in web development
        and mobile development through React, express and React Native. I would
        love to be part of a team to provide value as well as improve myself as
        a developer. <br />
        <br />I have been working as a freelance developer for the past year
        allowing me to work on a variety of projects from a node/express api, to
        a food delivery mobile app and a website for logging employee's working
        hours.
      </p>

      <div>
        <AboutCardDiv>
          <div>
            <FaBook role="img" />
          </div>
          <FlexGrowDiv>
            <h4>Life Long Learning</h4>
            <p role="paragraph">Never too late to learn a new tool or trick.</p>
          </FlexGrowDiv>
        </AboutCardDiv>

        <AboutCardDiv>
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

        <AboutCardDiv>
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
