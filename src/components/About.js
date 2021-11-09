import { AboutDiv, AboutCardDiv, FlexGrowDiv } from "./styles/Div.styled";
import { FaPodcast, FaBook, FaCogs } from "react-icons/fa";

function About() {
  return (
    <AboutDiv>
      <h1>Here Is A Little Bit About Me</h1>
      <p role="paragraph">
        In late 2020 I decided to take a new career path and for all of 2021
        committed my full time to learning web development. In the past I have
        used python for small hobby/fun projects and eventually brought that
        over into my previous career. Realizing how much I loved learning and
        implementing new technologies I decided to pursue it full time. This
        year I have spent 1000+ hours learning and coding as well as making 900+
        commits so far this year.
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
