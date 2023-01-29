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
    // 1 main heading, 1 sub heading, 4 x 3 headings in cards, -2 no project link header = 10 total
    expect(headings.length).toBe(10);
  });

  test("All icons images shown", () => {
    render(<MockProjects />);
    const images = screen.getAllByRole("img");
    // 4 project images + 16 skill images = 20 total
    expect(images.length).toBe(20);
  });

  test("All paragraphs shown", () => {
    render(<MockProjects />);
    const paragraphs = screen.getAllByRole("paragraph");
    // 5 x 1 per project summary = 5 total
    expect(paragraphs.length).toBe(4);
  });
});
