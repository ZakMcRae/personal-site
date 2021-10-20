import React from "react";
import { SkillCardDiv } from "../styles/Div.styled";

function SkillCard(props) {
  const { name } = props;
  return <SkillCardDiv>{name}</SkillCardDiv>;
}

export default SkillCard;
