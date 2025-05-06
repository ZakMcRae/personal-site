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
        work in software development. I have been working 3.5 years full time in
        the field of web development.
      </p>
      <p role="paragraph">
        Spent 2.5 years working at Chartd as the primary front end developer
        being the first hired employee. It was great being part of a
        collaborative team using a modern tech stack to build dashboards and
        financial tools to support and help clients. Unfortunately all good
        things come to an end, the company is winding down and I am looking for
        new opportunities.
      </p>
      <p role="paragraph">
        Other than web development I enjoy spending time with my family, tv,
        video games, tinkering and learning new things. I have dabbled in
        electronics making some esp32 mini web servers with IR emitters to
        control TV and other electronics around the house via a local website
        but I am not too good with the sauldering part of electronics lol. I
        also have a 3D printer and enjoy using fusion 360 to design, model and
        print fun and functional things for my home.
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
