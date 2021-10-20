import styled from "styled-components";

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

export const ContentDiv = styled.div`
  background-color: #bbb;
  border: 1px solid black;
  height: 50vh;

  & h1,
  p {
    text-align: center;
  }

  & h1 {
    margin-top: 50px;
  }
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
  background-color: #aaa;
`;
