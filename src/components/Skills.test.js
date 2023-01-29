import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../content/theme";
import Skills from "./Skills";

const MockSkills = () => {
  return (
    <ThemeProvider theme={theme}>
      <Skills />
    </ThemeProvider>
  );
};

describe("Tests of Skills Section", () => {
  test("Main heading is shown", () => {
    render(<MockSkills />);
    const heading = screen.getByRole("heading", {
      name: "Skill Set",
    });
    expect(heading).toBeInTheDocument();
  });

  test("Sub heading is shown", () => {
    render(<MockSkills />);
    const heading = screen.getByRole("heading", {
      name: /here are the lang/i,
    });
    expect(heading).toBeInTheDocument();
  });

  test("3 skill section headings shown", () => {
    render(<MockSkills />);
    const headings = screen.getAllByRole("heading");
    // 5 total headings = 1 main + 1 sub + 3 skill section
    expect(headings.length).toBe(5);
  });

  test("23 skill icons shown", () => {
    render(<MockSkills />);
    const icons = screen.getAllByRole("img");
    expect(icons.length).toBe(23);
  });
});
