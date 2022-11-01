import {
  ContentDiv,
  ProjectCardDiv,
  FlexDiv,
  FlexGrowDiv,
  ProjectLinksDiv,
} from "./styles/Div.styled";
import { projectsData } from "../content/projectsData";
import SkillCard from "./SkillsCard";
import { useState } from "react";

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
  const { name, summary, projectImages, imageShape, tech, repoUrl, siteUrl } =
    props.project;

  const [imageIndex, setImageIndex] = useState(0);

  // set style class on image
  let imageClassName;
  // check for odd or even index - flips image and info sides every card
  if (props.index % 2 !== 0) {
    imageClassName = "reverse-project-card";
  }
  // check for image shape and add or set class accordingly
  if (imageShape === "phone") {
    if (imageClassName) {
      imageClassName += " project-phone-card-image";
    } else {
      imageClassName = "project-phone-card-image";
    }
  }

  return (
    <>
      {/* todo - improve button position and style - add previous button as well */}
      {projectImages.length > 1 && (
        <div
          style={{
            position: "absolute",
            left: "50px",
            backgroundColor: "orange",
          }}
          onClick={() => {
            if (imageIndex !== projectImages.length - 1) {
              setImageIndex((prev) => prev + 1);
            } else {
              setImageIndex(0);
            }
          }}
        >
          <p>Next</p>
        </div>
      )}

      <ProjectCardDiv>
        <img
          src={projectImages[imageIndex]}
          alt=""
          className={imageClassName}
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
    </>
  );
};

export default Projects;
