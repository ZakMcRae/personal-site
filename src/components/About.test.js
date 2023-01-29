import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../content/theme";
import About from "./About";

const MockAbout = () => {
  return (
    <ThemeProvider theme={theme}>
      <About />
    </ThemeProvider>
  );
};

describe("Tests of About Section", () => {
  test("Heading is shown", () => {
    render(<MockAbout />);
    const heading = screen.getByRole("heading", {
      name: "Here Is A Little Bit About Me",
    });
    expect(heading).toBeInTheDocument();
  });

  test("Main paragraph is shown", () => {
    render(<MockAbout />);
    const paragraph = screen.getByText(/I am a/i);
    expect(paragraph).toBeInTheDocument();
  });

  test("About card headings are shown", () => {
    render(<MockAbout />);
    const headings = screen.getAllByRole("heading");
    // 1 H1 main heading + 3 H4 About Card headings = 4 total
    expect(headings.length).toBe(4);
  });

  test("About card paragraphs are shown", () => {
    render(<MockAbout />);
    const paragraphs = screen.getAllByRole("paragraph");
    // 2 main paragraphs + 3 About Card paragrpahs = 5 total
    expect(paragraphs.length).toBe(5);
  });

  test("About card images are shown", () => {
    render(<MockAbout />);
    const images = screen.getAllByRole("img");
    expect(images.length).toBe(3);
  });
});
