import styled from "styled-components";

// 100% view height - landing page
export const FullViewDiv = styled.div`
  height: 100vh;
  background-color: #eee;

  h1 {
    font-size: 40px;
    text-align: center;
    padding-top: 25vh;
  }

  h3 {
    text-align: center;
  }
`;

// large content section div
export const ContentDiv = styled.div`
  background-color: #bbb;
  border: 1px solid black;
  text-align: center;

  & h1 {
    margin-top: 50px;
  }

  & h4 {
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
  background-color: #eee;
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
