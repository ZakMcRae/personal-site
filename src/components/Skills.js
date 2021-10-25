import { useEffect } from "react";
import { ContentDiv, SectionDiv } from "./styles/Div.styled";
import { skillsData } from "../content/skillsData";
import { SkillCard } from "./SkillsCard";
import AOS from "aos";
import "aos/dist/aos.css";

// todo implement media queries for larger screen sizes

function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <ContentDiv>
      <h1>Skill Set</h1>
      <h4>
        Here are the languages, frameworks and tools I have learned and used in
        projects.
      </h4>

      <SectionDiv data-aos="fade-up" data-aos-once="true">
        <h3>Languages</h3>
        {skillsData.languages.map((item, index) => {
          return <SkillCard item={item} key={index}></SkillCard>;
        })}
      </SectionDiv>

      <SectionDiv data-aos="fade-up" data-aos-once="true">
        <h3>Frameworks</h3>
        {skillsData.frameworks.map((item, index) => {
          return <SkillCard item={item} key={index}></SkillCard>;
        })}
      </SectionDiv>

      <SectionDiv data-aos="fade-up" data-aos-once="true">
        <h3>Tools</h3>
        {skillsData.tools.map((item, index) => {
          return <SkillCard item={item} key={index}></SkillCard>;
        })}
      </SectionDiv>
    </ContentDiv>
  );
}

export default Skills;
