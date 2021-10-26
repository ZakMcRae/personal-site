import { ContentDiv, SectionDiv, FlexDiv } from "./styles/Div.styled";
import { skillsData } from "../content/skillsData";
import { SkillCard } from "./SkillsCard";

// todo implement media queries for larger screen sizes

function Skills() {
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
                <div data-aos="slide-right" key={index}>
                  <SkillCard item={item}></SkillCard>
                </div>
              );
            })}
          </SectionDiv>

          <SectionDiv>
            <h3>Frameworks</h3>
            {skillsData.frameworks.map((item, index) => {
              return (
                <div data-aos="slide-right" key={index}>
                  <SkillCard item={item}></SkillCard>
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
                <div data-aos="slide-left" key={index}>
                  <SkillCard item={item}></SkillCard>
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
