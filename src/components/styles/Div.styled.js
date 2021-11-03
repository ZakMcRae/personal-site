import styled from "styled-components";

// 100% view height - landing page
export const FullViewDiv = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  overflow-x: hidden;

  // Landing Heading
  & > h1 {
    font-size: 40px;
    text-align: center;
    padding-top: 25vh;
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  // Landing Sub Heading
  & > h3 {
    text-align: center;
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  & svg {
    background-color: ${({ theme }) => theme.colors.textPrimary};
  }

  @media (min-width: 960px) {
    h1 {
      font-size: 60px;
    }
  }
`;

export const LinkBarDiv = styled.div`
  padding: 5px;
  width: 100%;
  background-color: #000;
`;

// large content section div
export const ContentDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  text-align: center;
  padding-bottom: 75px;
  overflow-x: hidden;

  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  }

  // Heading
  & > h1 {
    margin-top: 75px;
  }

  // Sub Heading
  & > h4 {
    margin: auto;
    margin-bottom: 25px;
    max-width: 90%;
  }
`;

// spaced out inside larger section div
export const SectionDiv = styled.div`
  margin-bottom: 13px;
  // stop aos scroll animation overflow
  overflow-x: hidden;
`;

export const SocialsDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 125px;
  height: 48px;
  gap: 5px;
  justify-content: center;
  align-items: center;

  // Icon
  & svg {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.backgroundPrimary};
    border: 2px solid ${({ theme }) => theme.colors.backgroundPrimary};
    border-radius: 5px;
    padding: 5px;
    box-shadow: -1px 1px 2px 0 #555;
  }

  & > a > *:hover {
    transform: scale(1.05);
  }
`;

export const ResumeDiv = styled.div`
  position: absolute;
  top: 8px;
  right: 18px;
  display: flex;

  // Icon
  & svg {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.backgroundPrimary};
    border: 2px solid ${({ theme }) => theme.colors.backgroundPrimary};
    border-radius: 5px;
    padding: 5px;
    box-shadow: -1px 1px 2px 0 #555;
  }

  & > a > *:hover {
    transform: scale(1.05);
  }
`;

export const ResumeLabelDiv = styled.div`
  width: 70px;
  position: absolute;
  top: 5px;
  right: 15px;

  & svg {
    color: black;
    transform: rotate(-90deg);
    font-size: 24px;
    background-color: transparent;
  }

  & span {
    font-family: "Oswald";
    font-size: 16px;
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

  // svg icon div
  & div {
    background-color: #fff;
    padding: 3px;
  }

  // svg icon
  & img {
    width: 30px;
    height: 30px;
    object-fit: cover;
    display: flex;
  }

  // skill name
  & p {
    flex-grow: 1;
  }
`;

export const ProjectCardDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  width: 95%;
  max-width: 520px;
  margin: auto;
  margin-bottom: 25px;
  border-radius: 5px;
  box-shadow: -1px 1px 2px 0 #555;
  display: flex;
  flex-direction: column;

  // Project Image
  & > img {
    width: 100%;
    max-width: 520px;
    margin: auto;
    margin-bottom: 20px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom: 1px solid #555;
  }

  // Project Info Section
  & > div {
    width: 95%;
    margin: auto;
    display: flex;
    flex-direction: column;
  }

  // Project Title
  & h4 {
    margin-bottom: 10px;
  }

  // Project Summary
  & > div > p {
    margin-bottom: 25px;
  }

  // Project Tech Used and Project Link Div
  & > div > div > div {
    display: grid;
    grid-template-columns: repeat(1, auto);
    column-gap: 5px;
    justify-content: center;
  }

  // Project Link Buttons
  & a {
    width: 135px;
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    display: flex;
    color: ${({ theme }) => theme.colors.textSecondary};
    justify-content: space-evenly;
    align-items: center;
    padding: 10px 5px;
    margin-bottom: 10px;
    border-radius: 5px;
    text-decoration: none;
    box-shadow: -1px 1px 2px 0 #555;
  }

  & a:hover {
    transform: scale(1.05);
  }

  @media (min-width: 350px) {
    // Project Info Section
    & > div {
      height: 400px;
    }

    // Project Tech Used and Project Link Div
    & > div > div > div {
      display: grid;
      grid-template-columns: repeat(2, auto);
      column-gap: 5px;
      justify-content: center;
    }

    // Project Summary
    & > div > p {
      height: 80px;
      margin-bottom: 0px;
    }

    @media (min-width: 960px) {
      flex-direction: row;
      max-width: 912px;
      width: unset;
      margin-bottom: 75px;

      & > div {
        padding: 25px 10px;
      }

      & > img {
        margin: unset;
        border-radius: unset;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        border: unset;
        border-right: 1px solid #555;
      }
    }
  }
`;

export const FlexDiv = styled.div`
  margin: auto;
  max-width: 95%;

  @media (min-width: 350px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    gap: 25px;
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
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  margin: auto;
  margin-bottom: 25px;
  padding-bottom: 10px;
  border-radius: 5px;
  box-shadow: -1px 1px 2px 0 #555;

  // Card Heading
  & > h3 {
    padding-top: 10px;
    max-width: 95%;
    margin: auto;
  }

  // Card Body Text
  & > p {
    text-align: start;
    max-width: 90%;
    margin: 20px auto;
  }

  // Card Button
  & a {
    max-width: 150px;
    flex-shrink: 2;
    background-color: #ddd;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
    color: ${({ theme }) => theme.colors.textPrimary};
    padding: 10px 5px;
    border-radius: 5px;
    text-decoration: none;
    box-shadow: -1px 1px 2px 0 #555;
    margin: auto;
  }

  & a:hover {
    transform: scale(1.05);
  }

  @media (min-width: 820px) {
    max-width: 800px;
  }
`;

export const FooterDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0px;
  background-color: #000;
`;

export const AboutDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  text-align: center;
  padding-bottom: 75px;

  // About Heading
  & > h1 {
    max-width: 95%;
    margin: auto;
    padding-top: 75px;
  }

  // About Body Content
  & > p {
    text-align: start;
    max-width: 90%;
    margin: 10px auto;
    margin-bottom: 20px;
  }

  // About Cards Div
  & > div {
    max-width: 95%;
    margin: auto;
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
    color: ${({ theme }) => theme.colors.textPrimary};
    border-radius: 5px;
    box-shadow: -1px 1px 2px 0 #555;
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 350px) {
    & > div {
      margin: auto;
      margin-bottom: 10px;
      max-width: 330px;
    }
  }

  @media (min-width: 768px) {
    & > div {
      margin: 50px auto;
      max-width: 95%;
      flex-direction: row;
    }
  }

  @media (min-width: 842px) {
    & > p {
      max-width: 756px;
    }
  }

  @media (min-width: 960px) {
    & > div {
      max-width: 910px;
    }
  }
`;

export const AboutCardDiv = styled.div`
  height: 140px;
  padding-top: 5px;
  display: flex;
  flex-direction: row;
  max-width: 95%;
  margin: auto;
  align-items: center;
  justify-content: center;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.textPrimary};
  }

  // Card Body Text
  & > div > p {
    padding: 0px 5px;
    text-align: center;
    margin: auto;
    justify-content: center;
    display: flex;
  }

  // About Card Icons
  & svg {
    box-sizing: content-box;
    font-size: 50px;
    padding: 0px 10px;
  }

  @media (min-width: 350px) {
    max-width: 330px;

    & > div > p {
      width: 260px;
    }
  }

  @media (min-width: 768px) {
    max-width: 330px;
    flex-direction: column;

    & > div > p {
      width: unset;
      padding-bottom: 10px;
    }

    & svg {
      padding-top: 10px;
    }

    &:not(:last-child) {
      border-bottom: unset;
      border-right: 1px solid ${({ theme }) => theme.colors.textPrimary};
    }
  }
`;
