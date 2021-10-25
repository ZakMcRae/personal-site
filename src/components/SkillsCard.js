import React from "react";
import { SkillCardDiv } from "./styles/Div.styled";

export function SkillCard(props) {
  const { icon, name } = props.item;
  return (
    <SkillCardDiv>
      <div>
        <img src={icon} alt="" />
      </div>
      <p>{name}</p>
    </SkillCardDiv>
  );
}
export default SkillCard;
