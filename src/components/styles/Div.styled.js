import styled from "styled-components";

// 100% view height - landing page
export const FullViewDiv = styled.div`
  height: 100vh;
  background-color: #9dc6ff;

  & > h1 {
    font-size: 40px;
    text-align: center;
    padding-top: 25vh;
  }

  & > h3 {
    text-align: center;
  }
`;

// large content section div
export const ContentDiv = styled.div`
  background-color: #eee;
  border: 1px solid black;
  text-align: center;

  & > h1 {
    margin-top: 50px;
  }

  & > h4 {
    margin: auto;
    margin-bottom: 25px;
    max-width: 90%;
  }
`;

// spaced out inside larger section div
export const SectionDiv = styled.div`
  margin-bottom: 25px;
`;

export const SocialsDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 125px;
  height: 48px;
  justify-content: space-around;
  align-items: center;

  & > a > * {
    box-sizing: content-box;
    font-size: 24px;
    color: black;
    border: 2px solid black;
    border-radius: 5px;
    padding: 5px;
  }

  & > a > *:hover {
    transform: scale(1.1);
  }
`;

export const SkillCardDiv = styled.div`
  width: 150px;
  height: 36px;
  background-color: #ddd;
  display: flex;
  align-items: center;
  margin: auto;
  margin-bottom: 5px;
  box-shadow: -1px 1px 2px 0 #555;
  border-radius: 2px;

  & div {
    background-color: #fff;
    padding: 0 5px;
  }

  & img {
    width: 30px;
    height: 30px;
    object-fit: cover;
    display: flex;
  }

  & p {
    flex-grow: 1;
  }
`;

export const ProjectCardDiv = styled.div`
  background-color: #4c8492;
  width: 95%;
  max-width: 520px;
  margin: auto;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: -1px 1px 2px 0 #555;
  display: flex;
  flex-direction: column;

  & > img {
    width: 95%;
    max-width: 500px;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 8px;
    border-radius: 5px;
    box-shadow: -1px 1px 2px 0 #555;
  }

  & > div {
    width: 95%;
    margin: auto;
    display: flex;
    flex-direction: column;
  }

  & h4 {
    margin-bottom: 10px;
  }

  & > div > p {
    margin-bottom: 25px;
  }

  & > div > div > div {
    display: grid;
    grid-template-columns: repeat(1, auto);
    column-gap: 5px;
    justify-content: center;
  }

  & a {
    width: 150px;
    background-color: #ddd;
    display: flex;
    color: black;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px 5px;
    margin-bottom: 10px;
    border-radius: 5px;
    text-decoration: none;
    box-shadow: -1px 1px 2px 0 #555;
  }

  & a:hover {
    transform: scale(1.1);
  }

  @media (min-width: 350px) {
    height: 800px;

    & > div {
      height: 400px;
    }

    & > div > div > div {
      display: grid;
      grid-template-columns: repeat(2, auto);
      column-gap: 5px;
      justify-content: center;
    }

    & > div > p {
      height: 80px;
      margin-bottom: 0px;
    }
  }
`;

export const FlexDiv = styled.div`
  margin: auto;

  @media (min-width: 350px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 10px;
  }
`;

export const FlexGrowDiv = styled.div`
  flex-grow: 1;
`;

export const ProjectLinksDiv = styled.div`
  margin-top: 25px;
  margin-bottom: 5px;
  padding-bottom: 5px;
`;

export const TimeLineCardDiv = styled.div`
  max-width: 95%;
  background-color: #fff;
  margin: auto;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-radius: 5px;
  box-shadow: -1px 1px 2px 0 #555;

  & > h3 {
    padding-top: 10px;
    max-width: 95%;
    margin: auto;
  }

  & > p {
    text-align: start;
    max-width: 90%;
    margin: 20px auto;
  }

  & > a {
    max-width: 150px;
    flex-shrink: 2;
    background-color: #ddd;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: black;
    padding: 10px 5px;
    border-radius: 5px;
    text-decoration: none;
    box-shadow: -1px 1px 2px 0 #555;
    margin: auto;
  }
`;
