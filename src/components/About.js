import { AboutDiv, AboutCardDiv, FlexGrowDiv } from "./styles/Div.styled";
import { FaPodcast, FaBook, FaCogs } from "react-icons/fa";

function About() {
  return (
    <AboutDiv>
      <h1>Here Is A Little Bit About Me</h1>
      <p role="paragraph">
        I am a full stack developer with a passion for learning and problem
        solving. Before software development I had a background in sales and
        customer service. I started learning some Python to automate boring and
        repetitive tasks and decided to make the switch full time to learn and
        work in software development. I have since done a year of freelance work
        and am now working full time in the field of web development.
      </p>
      <p role="paragraph">
        Currently working at Chartd as a web application developer. I am
        enjoying being part of a collaborative team using a modern tech stack to
        build dashboards and financial tools to support and help clients.
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
