import { BsArrowReturnRight } from "react-icons/bs";
import { ResumeLabelDiv } from "./styles/Div.styled";

function ResumeLabel() {
  return (
    <ResumeLabelDiv>
      <span>Resume</span>
      <BsArrowReturnRight />
    </ResumeLabelDiv>
  );
}

export default ResumeLabel;
