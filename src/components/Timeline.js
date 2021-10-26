import { ContentDiv, TimeLineCardDiv } from "./styles/Div.styled";
const timeLineData = require("../content/timeline.json");

// todo implement media queries for larger screen sizes

function Timeline() {
  return (
    <ContentDiv>
      <h1>My Timeline</h1>
      <h4>Here is a rough timeline of my progression in programming.</h4>
      {timeLineData.map((item, index) => {
        if (index % 2 === 0) {
          return (
            <div key={index} data-aos="fade-up-right">
              <TimeLineCard item={item} />
            </div>
          );
        } else
          return (
            <div key={index} data-aos="fade-up-left">
              <TimeLineCard item={item} />
            </div>
          );
      })}
    </ContentDiv>
  );
}

const TimeLineCard = (props) => {
  const { date, title, body, linkText, linkUrl } = props.item;
  return (
    <TimeLineCardDiv>
      <h3>{title}</h3>
      <span>{date}</span>
      <p>{body}</p>
      <a href={linkUrl}>{linkText}</a>
    </TimeLineCardDiv>
  );
};

export default Timeline;
