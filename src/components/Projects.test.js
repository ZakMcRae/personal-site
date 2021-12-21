import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../content/theme";
import Projects from "./Projects";

const MockProjects = () => {
  return (
    <ThemeProvider theme={theme}>
      <Projects />
    </ThemeProvider>
  );
};

describe("Tests of Projects Section", () => {
  test("Main heading is shown", () => {
    render(<MockProjects />);
    const heading = screen.getByRole("heading", {
      name: "Work and Projects",
    });
    expect(heading).toBeInTheDocument();
  });

  test("Sub heading is shown", () => {
    render(<MockProjects />);
    const heading = screen.getByRole("heading", {
      name: /Here is a sample/i,
    });
    expect(heading).toBeInTheDocument();
  });

  test("All headings shown", () => {
    render(<MockProjects />);
    const headings = screen.getAllByRole("heading");
    // 1 main heading, 1 sub heading, 6 x 3 headings in cards -1 no project link header = 19
    expect(headings.length).toBe(19);
  });

  test("All links shown", () => {
    render(<MockProjects />);
    const links = screen.getAllByRole("link");
    // 4 x 2 links in cards + 1 x 1 + 1 x 0 = 9 total
    expect(links.length).toBe(9);
  });

  test("All icons images shown", () => {
    render(<MockProjects />);
    const images = screen.getAllByRole("img");
    // 6 project images + 28 skill images = 24 total
    expect(images.length).toBe(34);
  });

  test("All paragraphs shown", () => {
    render(<MockProjects />);
    const paragraphs = screen.getAllByRole("paragraph");
    // 6 x 1 per project summary = 6 total
    expect(paragraphs.length).toBe(6);
  });
});
