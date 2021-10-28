import { ContentDiv, TimeLineCardDiv } from "./styles/Div.styled";
const timeLineData = require("../content/timeline.json");

// todo implement media queries for larger screen sizes

function Timeline() {
  return (
    <ContentDiv>
      <h1>My Timeline</h1>
      <h4>Here is a rough timeline of my recent progression in programming.</h4>
      {timeLineData.map((item, index) => {
        if (index % 2 === 0) {
          return (
            <div key={index}>
              <TimeLineCard item={item} />
            </div>
          );
        } else
          return (
            <div key={index}>
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
      <div data-aos="fade-in" data-aos-duration="1250">
        <a href={linkUrl}>{linkText}</a>
      </div>
    </TimeLineCardDiv>
  );
};

export default Timeline;
