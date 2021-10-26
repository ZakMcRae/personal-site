import { useEffect } from "react";
import {
  ContentDiv,
  ProjectCardDiv,
  FlexDiv,
  FlexGrowDiv,
  ProjectLinksDiv,
} from "./styles/Div.styled";
import { projectsData } from "../content/projectsData";
import SkillCard from "./SkillsCard";
import AOS from "aos";
import "aos/dist/aos.css";

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

  // initialize AOS (animation on scroll package)
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

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
          <h4 data-aos="zoom-in">Project Links</h4>
          <FlexDiv>
            <div data-aos="zoom-in">
              <a href={repoUrl}>View GitHub Repo</a>
            </div>
            <div data-aos="zoom-in">
              <a href={siteUrl}>Visit Site</a>
            </div>
          </FlexDiv>
        </ProjectLinksDiv>
      </div>
    </ProjectCardDiv>
  );
};

export default Projects;
