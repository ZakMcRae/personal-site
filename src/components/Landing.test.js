import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../content/theme";
import Landing from "./Landing";

const MockLanding = () => {
  return (
    <ThemeProvider theme={theme}>
      <Landing />
    </ThemeProvider>
  );
};

describe("Test of Landing Section", () => {
  test("Name is shown on page", () => {
    render(<MockLanding />);
    const name = screen.getByText("Zak McRae");
    expect(name).toBeInTheDocument();
  });

  test("Title is shown on page", () => {
    render(<MockLanding />);
    const jobTitle = screen.getByText("Web Developer");
    expect(jobTitle).toBeInTheDocument();
  });

  test("4 links shown", () => {
    render(<MockLanding />);
    const links = screen.getAllByRole("link");
    // Github, Email, LinkedIn, Resume = 4 total
    expect(links.length).toBe(4);
  });

  test("Resume label shown", () => {
    render(<MockLanding />);
    const resumeLabel = screen.getByText("Resume");
    expect(resumeLabel).toBeInTheDocument();
  });
});
