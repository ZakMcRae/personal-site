import { useEffect } from "react";
import { ContentDiv, SectionDiv, FlexDiv } from "./styles/Div.styled";
import { skillsData } from "../content/skillsData";
import { SkillCard } from "./SkillsCard";
import AOS from "aos";
import "aos/dist/aos.css";

// todo implement media queries for larger screen sizes

function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
  return (
    <ContentDiv>
      <h1>Skill Set</h1>
      <h4>
        Here are the languages, frameworks and tools I have learned and used in
        projects.
      </h4>

      <FlexDiv>
        <div>
          <SectionDiv>
            <h3>Languages</h3>
            {skillsData.languages.map((item, index) => {
              return (
                <div data-aos="slide-right">
                  <SkillCard item={item} key={index}></SkillCard>
                </div>
              );
            })}
          </SectionDiv>

          <SectionDiv>
            <h3>Frameworks</h3>
            {skillsData.frameworks.map((item, index) => {
              return (
                <div data-aos="slide-right">
                  <SkillCard item={item} key={index}></SkillCard>
                </div>
              );
            })}
          </SectionDiv>
        </div>

        <div>
          <SectionDiv>
            <h3>Tools</h3>
            {skillsData.tools.map((item, index) => {
              return (
                <div data-aos="slide-left">
                  <SkillCard item={item} key={index}></SkillCard>
                </div>
              );
            })}
          </SectionDiv>
        </div>
      </FlexDiv>
    </ContentDiv>
  );
}

export default Skills;
