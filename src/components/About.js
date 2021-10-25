import React from "react";
import { AboutDiv, AboutCardDiv, FlexGrowDiv } from "./styles/Div.styled";
import { FaPodcast, FaBook, FaCogs } from "react-icons/fa";

function About() {
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

      <div>
        <AboutCardDiv>
          <div>
            <FaBook />
          </div>
          <FlexGrowDiv>
            <h4>Life Long Learning</h4>
            <p>Never to late to learn a new tool or trick.</p>
          </FlexGrowDiv>
        </AboutCardDiv>

        <AboutCardDiv>
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

        <AboutCardDiv>
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
