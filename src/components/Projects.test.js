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
    // 1 main heading, 1 sub heading, 5 x 3 headings in cards, -2 no project link header = 15 total
    expect(headings.length).toBe(15);
  });

  test("All links shown", () => {
    render(<MockProjects />);
    const links = screen.getAllByRole("link");
    // 2 Cards 0 links + 3 Cards 2 links  = 6 total
    expect(links.length).toBe(6);
  });

  test("All icons images shown", () => {
    render(<MockProjects />);
    const images = screen.getAllByRole("img");
    // 5 project images + 22 skill images = 27 total
    expect(images.length).toBe(27);
  });

  test("All paragraphs shown", () => {
    render(<MockProjects />);
    const paragraphs = screen.getAllByRole("paragraph");
    // 5 x 1 per project summary = 5 total
    expect(paragraphs.length).toBe(5);
  });
});
