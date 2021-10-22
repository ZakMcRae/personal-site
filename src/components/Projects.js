import React from "react";
import {
  ContentDiv,
  ProjectCardDiv,
  FlexDiv,
  FlexGrowDiv,
  ProjectLinksDiv,
} from "./styles/Div.styled";
import { projectsData } from "../content/projectsData";
import SkillCard from "./skills/SkillCard";

function Projects() {
  return (
    <ContentDiv>
      <h1>My Projects</h1>
      <h4>Here is a sample of the projects I have made.</h4>

      <FlexDiv>
        {projectsData.map((project, index) => {
          return <ProjectCard project={project} key={index} />;
        })}
      </FlexDiv>
    </ContentDiv>
  );
}

const ProjectCard = (props) => {
  const { name, summary, projectImage, tech, repoUrl, siteUrl } = props.project;
  return (
    <ProjectCardDiv>
      <img src={projectImage} alt="" />

      <div>
        <h2>{name}</h2>
        <p>{summary}</p>

        <FlexGrowDiv>
          <h4>Tech Used</h4>
          <div>
            {tech.map((item, index) => {
              return <SkillCard item={item} key={index}></SkillCard>;
            })}
          </div>
        </FlexGrowDiv>
        <ProjectLinksDiv>
          <h4>Project Links</h4>
          <FlexDiv>
            <a href={repoUrl}>View GitHub Repo</a>
            <a href={siteUrl}>Visit Site</a>
          </FlexDiv>
        </ProjectLinksDiv>
      </div>
    </ProjectCardDiv>
  );
};

export default Projects;
