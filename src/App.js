import Landing from "./components/Landing";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
// import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import { GlobalStyles } from "./components/styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./content/theme";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Landing></Landing>
        <Projects></Projects>
        <Skills></Skills>
        <About></About>
        {/* <Timeline></Timeline> */}
        <Footer></Footer>
      </ThemeProvider>
    </>
  );
};

export default App;
