import React from "react";
import { ContentDiv } from "../../components/styles/Div.styled";
import SkillCard from "./SkillCard";
import skills from "../../content/skills.json";

function Skills() {
  return (
    <ContentDiv>
      <h1>Skill Set</h1>
      <p>
        Here are the languages, frameworks and tools I have learned and used in
        projects.
      </p>

      <h3>Languages</h3>
      {skills.languages.map((language, index) => {
        return <SkillCard name={language} key={index}></SkillCard>;
      })}

      <h3>Frameworks</h3>
      {skills.frameworks.map((framework, index) => {
        return <SkillCard name={framework} key={index}></SkillCard>;
      })}

      <h3>Tools</h3>
      {skills.tools.map((tool, index) => {
        return <SkillCard name={tool} key={index}></SkillCard>;
      })}
    </ContentDiv>
  );
}

export default Skills;
