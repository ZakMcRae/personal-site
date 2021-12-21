import {
  ContentDiv,
  ProjectCardDiv,
  FlexDiv,
  FlexGrowDiv,
  ProjectLinksDiv,
} from "./styles/Div.styled";
import { projectsData } from "../content/projectsData";
import SkillCard from "./SkillsCard";

function Projects() {
  return (
    <ContentDiv>
      <h1>Work and Projects</h1>
      <h4>Here is a sample of my professional and personal projects.</h4>

      {projectsData.map((project, index) => {
        return <ProjectCard project={project} key={index} index={index} />;
      })}
    </ContentDiv>
  );
}

const ProjectCard = (props) => {
  const { name, summary, projectImage, tech, repoUrl, siteUrl } = props.project;

  return (
    <ProjectCardDiv>
      <img
        src={projectImage}
        alt=""
        className={props.index % 2 !== 0 ? "reverse-project-card" : ""}
      />

      <div>
        <h2>{name}</h2>
        <p role="paragraph">{summary}</p>

        <FlexGrowDiv>
          <h4>Tech Used</h4>
          <div>
            {tech.map((item, index) => {
              return <SkillCard item={item} key={index}></SkillCard>;
            })}
          </div>
        </FlexGrowDiv>
        <ProjectLinksDiv>
          {repoUrl && siteUrl ? (
            <h4>Project Links</h4>
          ) : repoUrl || siteUrl ? (
            <h4>Project Links</h4>
          ) : null}
          <FlexDiv>
            <div data-aos="fade-right" data-aos-duration="1000">
              {repoUrl ? <a href={repoUrl}>View GitHub Repo</a> : null}
            </div>
            <div data-aos="fade-left" data-aos-duration="1000">
              {siteUrl ? <a href={siteUrl}>Visit Site</a> : null}
            </div>
          </FlexDiv>
        </ProjectLinksDiv>
      </div>
    </ProjectCardDiv>
  );
};

export default Projects;
