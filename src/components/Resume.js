import { FaFileAlt } from "react-icons/fa";
import { ResumeDiv } from "./styles/Div.styled";

function Resume() {
  return (
    <ResumeDiv>
      <a
        href={process.env.PUBLIC_URL + "/content/Zak-McRae-Resume.pdf"}
        download
      >
        <FaFileAlt />
      </a>
    </ResumeDiv>
  );
}

export default Resume;
