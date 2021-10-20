import React from "react";
import { ContentDiv, SectionDiv } from "../../components/styles/Div.styled";
import SkillCard from "./SkillCard";
import { skillsData } from "../../content/skillsData";

function Skills() {
  return (
    <ContentDiv>
      <h1>Skill Set</h1>
      <h4>
        Here are the languages, frameworks and tools I have learned and used in
        projects.
      </h4>

      <SectionDiv>
        <h3>Languages</h3>
        {skillsData.languages.map((item, index) => {
          return <SkillCard item={item} key={index}></SkillCard>;
        })}
      </SectionDiv>

      <SectionDiv>
        <h3>Frameworks</h3>
        {skillsData.frameworks.map((item, index) => {
          return <SkillCard item={item} key={index}></SkillCard>;
        })}
      </SectionDiv>

      <SectionDiv>
        <h3>Tools</h3>
        {skillsData.tools.map((item, index) => {
          return <SkillCard item={item} key={index}></SkillCard>;
        })}
      </SectionDiv>
    </ContentDiv>
  );
}

export default Skills;
