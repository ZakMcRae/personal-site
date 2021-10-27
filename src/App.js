import "./App.css";
import Landing from "./components/Landing";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import { GlobalStyles } from "./components/styles/GlobalStyle";
import { ThemeProvider } from "styled-components";

// todo redo colors into variables

const theme = {
  colors: {
    //Teal
    // backgroundPrimary: "#29A0B1",
    // Orange
    // backgroundPrimary: "#FF8300",
    // Gold
    backgroundPrimary: "#F8D210",
    backgroundSecondary: "#fff",
    textPrimary: "#333",
    textSecondary: "#333",
  },
};

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Landing></Landing>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Timeline></Timeline>
        <Footer></Footer>
      </ThemeProvider>
    </>
  );
};

export default App;
